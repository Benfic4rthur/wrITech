import { db } from '../firebase/config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { useState, useEffect } from 'react';

export const useAuthentication = () => {
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

  const createUser = async data => {
    checkIfIsCanceled();
    setLoading(true);
    setError(null);
    setSuccessMessage(null); // Limpar a mensagem de sucesso antes de criar um novo usuário

    try {
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(user, { displayName: data.name });
      setLoading(false);
      setSuccessMessage('Usuário cadastrado com sucesso!'); // Definir a mensagem de sucesso
      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemMessageError;
      if (error.message.includes('Password')) {
        systemMessageError = 'A senha precisa conter ao menos 6 caracteres!';
      } else if (error.message.includes('auth/email-already-in-use')) {
        systemMessageError = 'E-mail já cadastrado!';
      } else {
        systemMessageError =
          'Ocorreu um erro ao criar o usuário, por favor tente novamente mais tarde!';
      }
      setLoading(false);
      setError(systemMessageError);
    }
    setLoading(false);
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
  };
};
