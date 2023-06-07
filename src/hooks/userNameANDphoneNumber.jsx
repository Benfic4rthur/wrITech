import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

export const useInsertUserInfo = docCollection => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const insertUserInfo = async (phoneNumber, userName, userId) => {
    setLoading(true);
    setError(null);

    try {
      const newUserInfo = {
        phoneNumber,
        userName,
        userId
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
