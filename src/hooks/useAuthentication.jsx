import { db } from '../firebase/config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { useState, useEffect } from 'react';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const UseAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [canceled, setCanceled] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null); // Estado para mostrar mensagem de sucesso
  const auth = getAuth();

  function checkIfIsCanceled() {
    if (canceled) {
      return;
    }
  }

  //register
  const createUser = async data => {
    const docCollection = 'userInfo';
    checkIfIsCanceled();
    setLoading(true);
    setError(null);
    setSuccessMessage(null); // Limpar a mensagem de sucesso antes de criar um novo usuário

    try {
      // Verificar se já existe o userName na coleção
      const userInfoQuery = query(collection(db, docCollection), where('userName', '==', data.userName));
      const userIdQuery = query(collection(db, docCollection), where('userId', '==', data.email));
      const userInfoSnapshot = await getDocs(userInfoQuery);
      const userIdSnapshot = await getDocs(userIdQuery);
      if (!userInfoSnapshot.empty) {
        throw new Error('Nome de usuário já existe');
      }
      if (!userIdSnapshot.empty) {
        throw new Error('Email já cadastrado!');
      }
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password); // Criar usuário
      await updateProfile(user, { displayName: data.displayName, phoneNumber: data.phoneNumber }); // Atualizar informações

      const newUserInfo = {
        phoneNumber: data.phoneNumber,
        userName: data.userName,
        userId: data.email,
      };
      await addDoc(collection(db, docCollection), newUserInfo);
      setLoading(false);
      setSuccessMessage('Usuário cadastrado com sucesso!'); // Definir a mensagem de sucesso
      return user;
    } catch (error) {
      setLoading(false);
      if (error.message.includes('Email já cadastrado!')) {
        return setError('E-mail já cadastrado!');
      }
      if (error.message.includes('Nome de usuário já existe')) {
        return setError('Nome de usuário já existe!');
      }
      if (error.message.includes('Password')) {
        return setError('A senha precisa conter ao menos 6 caracteres!');
      }

      if (error.message.includes('auth/email-already-in-use')) {
        return setError('E-mail já cadastrado!');
      }

      return setSuccessMessage('Usuário cadastrado com sucesso!'); // Definir a mensagem de sucesso
    }
  };

  //logout
  const logout = () => {
    checkIfIsCanceled();
    signOut(auth);
  };

  //login
  const login = async data => {
    checkIfIsCanceled();
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      let systemMessageError;
      if (error.message.includes('auth/wrong-password')) {
        systemMessageError = 'Senha incorreta!';
      } else if (error.message.includes('auth/user-not-found')) {
        systemMessageError = 'Usuário não cadastrado!';
      } else {
        systemMessageError = 'Ocorreu um erro ao logar, por favor tente novamente mais tarde!';
      }
      setError(systemMessageError);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCanceled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    successMessage, // Adicionar a mensagem de sucesso ao objeto retornado
    logout,
    login,
  };
};