import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const useInsertUserInfo = docCollection => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const insertUserInfo = async (phoneNumber, userName, userId) => {
    setLoading(true);
    setError(null);

    try {
      // Verificar se já existe o userName na coleção
      const userInfoQuery = query(collection(db, docCollection), where('userName', '==', userName));
      const userIdQuery = query(collection(db, docCollection), where('userId', '==', userId));
      const userInfoSnapshot = await getDocs(userInfoQuery,);
      const userIdSnapshot = await getDocs(userIdQuery,);
      if (!userInfoSnapshot.empty) {
        throw new Error('Nome de usuário já existe!');
      }
      if (!userIdSnapshot.empty) {
        throw new Error('Email já cadastrado!');
      }
      const newUserInfo = {
        phoneNumber,
        userName,
        userId,
      };

      await addDoc(collection(db, docCollection), newUserInfo);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      // Limpar o estado quando o componente for desmontado
      setLoading(false);
      setError(null);
    };
  }, []);

  return { insertUserInfo, loading, error };
};
