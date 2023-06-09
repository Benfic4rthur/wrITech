import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { CreateInput } from '../../components/CreateInput';
import { UseAuthentication } from '../../hooks/useAuthentication';
import { HiOutlinePhone } from 'react-icons/hi';
import { RxEnvelopeClosed, RxLockClosed,  RxAvatar, RxPerson } from 'react-icons/rx';

import { ButtonForm, ContainerForm, Error, Form } from '../../styles/styledsLoaginAndRecord';

const Index = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  //const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { createUser, error: authError, loading, successMessage } = UseAuthentication();


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

    //await insertUserInfo(cleanedPhoneNumber, userName, userIdMail);

      await createUser(user)
    
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);



  return (
    <ContainerForm>
      <h1>Cadastre-se</h1>
      <Form onSubmit={handleSubmit}>
        <CreateInput
          Svg={RxPerson}
          aria-label='Nome completo'
          type='text'
          name='displayName'
          required
          placeholder='Nome completo'
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
        />

        <CreateInput
          Svg={RxAvatar}
          aria-label='Nome de usuário'
          type='text'
          name='userName'
          required
          placeholder='Nome de usuário'
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />

        <CreateInput
          Svg={RxEnvelopeClosed}
          aria-label='E-mail do usuário'
          type='email'
          name='email'
          required
          placeholder='E-mail do usuário'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <CreateInput
          Svg={HiOutlinePhone}
          as={InputMask}
          aria-label='Celular do usuário'
          mask='(99) 99999-9999'
          maskPlaceholder={null}
          name='celular'
          required
          placeholder='Celular do usuário'
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />

        <CreateInput
          Svg={RxLockClosed}
          aria-label='Senha do usuário'
          type='password'
          name='password'
          required
          placeholder='Senha do usuário'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <CreateInput
          Svg={RxLockClosed}
          aria-label='Confirmação da senha'
          type='password'
          name='confirmPassword'
          required
          placeholder='Confirmação da senha'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <ButtonForm disabled={loading}>{loading ? ' Aguarde...' : 'Cadastrar'}</ButtonForm>
        {error && <Error>{error}</Error>}
        {successMessage && <p className='success'>{successMessage}</p>}
      </Form>
    </ContainerForm>
  );
};

export default Index;
