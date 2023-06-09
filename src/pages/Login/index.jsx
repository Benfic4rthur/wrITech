import { useEffect, useState } from 'react';
import { RxEnvelopeClosed, RxLockClosed } from 'react-icons/rx';
import { CreateInput } from '../../components/CreateInput';
import { UseAuthentication } from '../../hooks/useAuthentication';
import { ButtonForm, ContainerForm, Error, Form } from '../../styles/styledsLoaginAndRecord';
import { ContainerCenter } from '../../styles/styledGlobal';

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, error: authError, loading } = UseAuthentication();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    const user = {
      email,
      password,
    };
    const res = await login(user);
    console.log(res);
  };
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <ContainerCenter>
      <ContainerForm>
        <h1>Entrar</h1>
        <Form onSubmit={handleSubmit}>
          <CreateInput
            Svg={RxEnvelopeClosed}
            aria-label='Email'
            type='email'
            name='email'
            required
            placeholder='E-mail do usuário'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <CreateInput
            Svg={RxLockClosed}
            aria-label='Senha'
            type='password'
            name='password'
            required
            placeholder='Senha do usuário'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <ButtonForm disabled={loading}>{loading ? ' Aguarde...' : 'Entrar'}</ButtonForm>
          {error && <Error>{error}</Error>}
        </Form>
      </ContainerForm>
      <div></div>
    </ContainerCenter>
  );
};

export default Index;
