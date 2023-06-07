import { useEffect, useState } from 'react';
import { Link, useFetcher } from 'react-router-dom';
import { login } from '../../hooks/useAuthentication';
import styles from './index.module.css';

export function Login() {
  const fetcher = useFetcher();
  const { state, data } = fetcher;
  const [Loading, setLoading] = useState(state == 'idle');
  const [Error, setError] = useState('');

  useEffect(() => {
    setLoading(state == 'idle');
    setError(data?.error);
  }, [state]);

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1>Entrar</h1>
        <fetcher.Form method='POST' action='/login'>
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

          <button className='btn' disabled={!Loading}>
            {Loading ? 'Entrar' : 'Aguarde...'}
          </button>

          {Error && <p className='error'>{Error}</p>}
        </fetcher.Form>
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
