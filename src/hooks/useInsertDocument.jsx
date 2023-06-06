import { useState, useEffect, useReducer } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const initialState = {
  loading: null,
  error: null,
  successMessage: null,
};

const insertReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        error: null,
        successMessage: null,
      };
    case 'INSERTED_DOC':
      return {
        loading: false,
        error: null,
        successMessage: action.payload,
      };
    case 'ERROR':
      return {
        loading: false,
        error: action.payload,
        successMessage: null,
      };
    default:
      return state;
  }
};

export const useInsertDocument = docCollection => {
  const [response, dispatch] = useReducer(insertReducer, initialState);

  // lidando com memoryleak
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = action => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const insertDocument = async document => {
    checkCancelBeforeDispatch({ type: 'LOADING' });

    try {
      const newDocument = { ...document, createdAt: Timestamp.now() };

      const insertedDocument = await addDoc(collection(db, docCollection), newDocument);

      checkCancelBeforeDispatch({
        type: 'INSERTED_DOC',
        payload: insertedDocument,
      });
    } catch (error) {
      checkCancelBeforeDispatch({ type: 'ERROR', payload: error.message });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {insertDocument, response};
};