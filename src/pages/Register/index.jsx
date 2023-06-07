import { useEffect, useState } from 'react';
import { Link, useFetcher } from 'react-router-dom';
import { createUser } from '../../hooks/useAuthentication';
import styles from './index.module.css';

export default function Index() {
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
      <div className={styles.register}>
        <h1>Cadastre-se</h1>
        <fetcher.Form method='POST' action='/register'>
          <label>
            <span>Nome:</span>
            <input type='text' name='displayName' required placeholder='Nome do usuário' />
          </label>
          <label>
            <span>E-mail:</span>
            <input type='email' name='email' required placeholder='E-mail do usuário' />
          </label>
          <label>
            <span>Senha:</span>
            <input type='password' name='password' required placeholder='Senha do usuário' />
          </label>
          <label>
            <span>Confirmação senha:</span>
            <input
              type='password'
              name='confirmPassword'
              required
              placeholder='Confirmação da senha'
            />
          </label>
          <Link to={'/login'} about='link para a pagina de login'>
            Fazer login
          </Link>

          <button className='btn' disabled={!Loading}>
            {Loading ? 'Cadastrar' : 'Aguarde...'}
          </button>

          {Error && <p className='error'>{Error}</p>}
        </fetcher.Form>
      </div>
    </div>
  );
}

export async function actionRegister({ request }) {
  const data = await request.formData();

  console.log({ data });

  const displayName = await data.get('displayName');

  const email = await data.get('email');

  const password = await data.get('password');

  const confirmPassword = await data.get('confirmPassword');

  console.log({ displayName, email, password, confirmPassword });

  //   const { createUser, error: authError, success } = UseAuthentication();

  if (password !== confirmPassword) {
    return {
      error: 'As senhas não são iguais',
      success: false,
    };
  }

  const res = await createUser({ displayName, email, password });

  console.log(res);

  return res;
}
