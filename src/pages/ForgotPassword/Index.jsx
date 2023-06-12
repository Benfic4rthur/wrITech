import { RiMailLine } from 'react-icons/ri';
import { CreateInput } from '../../components/CreateInput';
import { ButtonForm, ContainerForm, Form } from '../../styles/styledsLoaginAndRecord';
import { ContainerCenter } from '../../styles/styledGlobal';
import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const Index = () => {
  const [email, setEmail] = useState('');
  const auth = getAuth(); // Obtenha a instância do objeto auth do Firebase

  const passwordRecovery = e => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email) // Use o objeto auth para chamar a função sendPasswordResetEmail
      .then(() => {
        window.alert('E-mail de redefinição de senha enviado com sucesso!');
      })
      .catch(error => {
        window.alert('Ocorreu um erro ao enviar o e-mail de redefinição de senha:', error);
      });
  };

  return (
    <ContainerCenter>
      <ContainerForm>
        <h1>Resetar senha</h1>
        <Form onSubmit={passwordRecovery}>
          <CreateInput
            Svg={RiMailLine}
            aria-label='Email'
            type='email'
            name='email'
            required
            value={email}
            placeholder='E-mail do usuário'
            onChange={e => setEmail(e.target.value)}
          />
          <ButtonForm type='submit' value={'Resetar'}>
            Resetar
          </ButtonForm>
          <h4>
            Resetou sua senha?
            <a href='/login' style={{ textDecoration: 'none' }}>
              {' '}
              Faça login!
            </a>
          </h4>
        </Form>
      </ContainerForm>
      <div></div>
    </ContainerCenter>
  );
};

export default Index;
