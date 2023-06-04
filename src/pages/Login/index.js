import styles from './index.module.css';
import { useState, useEffect } from 'react';
import { UseAuthentication } from '../../hooks/useAuthentication';
const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { createUser, error: authError, loading } = UseAuthentication();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    const user = {
      email,
      password,
    };
    const res = await createUser(user);
    console.log(res);
  };
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <div className={styles.container}>
    <div className={styles.login}>
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit}>
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
        {!loading && <button className='btn'>Entrar</button>}
        {loading && (
          <button className='btn' disabled>
            Aguarde...
          </button>
        )}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  </div>
  );
};

export default Index;
