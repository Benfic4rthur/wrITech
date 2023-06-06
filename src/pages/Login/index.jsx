import { useEffect, useState } from 'react';
import { Form, Link, useActionData, useLoaderData } from 'react-router-dom';
import { login } from '../../hooks/useAuthentication';
import styles from './index.module.css';

export function Login() {
  const data = useActionData();
  const loading = useLoaderData();

  const [error, setError] = useState('');

  useEffect(() => {
    console.log(loading);
    setError(data?.error);
  }, [loading]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1>Entrar</h1>
        {/* <form onSubmit={handleSubmit}> */}
        <Form method='POST' action='/login'>
          <label>
            <span>E-mail:</span>
            <input type='email' name='email' required placeholder='E-mail do usuário' />
          </label>
          <label>
            <span>Senha:</span>
            <input type='password' name='password' required placeholder='Senha do usuário' />
          </label>

          <Link className='Link' to={'/register'} about='link para a pagina para criação de conta'>
            Criar conta
          </Link>

          <button className='btn' disabled={loading}>
            {!loading ? 'Entrar' : 'Aguarde...'}
          </button>

          {error && <p className='error'>{error}</p>}
        </Form>
      </div>
    </div>
  );
}

export async function actionLogin({ request }) {
  const data = await request.formData();

  const email = await data.get('email');

  const password = await data.get('password');

  const res = await login({ email, password });

  console.log(res);

  return res;
}
