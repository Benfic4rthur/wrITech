import styles from './index.module.css';
import { useState, useEffect } from 'react';
import { UseAuthentication } from '../../hooks/useAuthentication';
import { useInsertUserInfo } from '../../hooks/userNameANDphoneNumber';
import InputMask from 'react-input-mask';

const Index = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { createUser, error: authError, loading, successMessage } = UseAuthentication();
  const { insertUserInfo } = useInsertUserInfo('userInfo');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    // Remover caracteres não numéricos do número de telefone
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    const userIdMail = email;

    const user = {
      displayName,
      email,
      phoneNumber: cleanedPhoneNumber,
      userId: userIdMail,
      userName,
      password,
    };

    if (password !== confirmPassword) {
      setError('As senhas não são iguais');
      return;
    }

    const res = await createUser(user);

    if (!loading && !authError) {
      insertUserInfo(cleanedPhoneNumber, userName, userIdMail);
    }
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.container}>
      <div className={styles.register}>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              type='text'
              name='displayName'
              required
              placeholder='Nome completo'
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
            />
          </label>
          <label>
            <span>Usuário:</span>
            <input
              type='text'
              name='userName'
              required
              placeholder='Nome de usuário'
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
          </label>
          <label>
            <span>E-mail:</span>
            <input
              type='email'
              name='email'
              required
              placeholder='E-mail do usuário'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Celular:</span>
            <InputMask
              mask='(99) 99999-9999'
              maskPlaceholder={null}
              name='celular'
              required
              placeholder='Celular do usuário'
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            />
          </label>
          <label>
            <span>Senha:</span>
            <input
              type='password'
              name='password'
              required
              placeholder='Senha do usuário'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <label>
            <span>Confirmação senha:</span>
            <input
              type='password'
              name='confirmPassword'
              required
              placeholder='Confirmação da senha'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </label>
          {!loading && <button className='btn'>Cadastrar</button>}
          {loading && (
            <button className='btn' disabled>
              Aguarde...
            </button>
          )}
          {successMessage && <p className='success'>{successMessage}</p>}
          {error && <p className='error'>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Index;
