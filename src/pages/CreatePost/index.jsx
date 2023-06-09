import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateInput, Textaria } from '../../components/CreateInput';
import { UseAuthValue } from '../../context/AuthContext';
import { Progress } from './styled.js';

import { LuTag } from 'react-icons/lu';
import { MdOutlineTextFields } from 'react-icons/md';
import { RxFilePlus } from 'react-icons/rx';
import { storage } from '../../firebase/config';
import { useInsertDocument } from '../../hooks/useInsertDocument';

import { ButtonForm, ContainerForm, Error, Form } from '../../styles/styledsLoaginAndRecord';
import { ContainerCenter } from '../../styles/styledGlobal';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [, setMediaURL] = useState('');
  const [progressPercent, setProgressPercent] = useState(0);
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const [formError, setFormError] = useState('');
  const { user } = UseAuthValue();

  const { insertDocument, response } = useInsertDocument('posts');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setFormError('');

    const mediaFileInput = document.getElementById('mediaFileInput');
    const mediaFile = mediaFileInput?.files[0];

    if (!mediaFile) {
      setFormError('Selecione uma imagem ou vídeo.');
      return;
    }

    try {
      const mediaStorageRef = ref(storage, `posts/${mediaFile.name}`);
      const mediaUploadTask = uploadBytesResumable(mediaStorageRef, mediaFile);

      mediaUploadTask.on(
        'state_changed',
        snapshot => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgressPercent(progress);
        },
        error => {
          console.error(error);
        },
        () => {
          getDownloadURL(mediaUploadTask.snapshot.ref).then(downloadURL => {
            setMediaURL(downloadURL);
            savePost(downloadURL);
          });
        },
      );
    } catch (error) {
      console.error(error);
    }
  };

  const savePost = mediaURL => {
    const post = {
      title,
      mediaURL,
      body,
      tags: tags.split(',').map(tag => tag.trim()),
      uid: user.uid,
      createdBy: user.displayName,
    };

    insertDocument(post);

    navigate('/');
  };

  if (formError) return null;

  return (
    <ContainerCenter>
      <ContainerForm>
        <h2>Criar novo post</h2>
        <Form onSubmit={handleSubmit}>
          <CreateInput
            Svg={MdOutlineTextFields}
            aria-label='Título'
            type='text'
            name='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='Pense em um título de fácil entendimento...'
            required
          />
          <Textaria
            aria-label='Descrição'
            name='body'
            value={body}
            onChange={e => setBody(e.target.value)}
            placeholder='Compartilhe seu conhecimento aqui...'
            required
          />
          <CreateInput
            Svg={LuTag}
            aria-label={'Insira suas tags separadas por vírgula'}
            type='text'
            name='tags'
            value={tags}
            onChange={e => setTags(e.target.value)}
            placeholder='Insira suas tags separadas por vírgula...'
            required
          />
          <CreateInput
            Svg={RxFilePlus}
            type='file'
            aria-label='adicione arquivos de Imagem ou Vídeo'
            id='mediaFileInput'
            accept='image/*, video/*'
          />

          <ButtonForm>{progressPercent < 1 ? 'Postar' : 'Postando...'}</ButtonForm>

          {progressPercent >= 1 && <Progress value={progressPercent} min='0' max='100' />}

          {(response.error || formError) && <Error>{response.error || formError}</Error>}
        </Form>
      </ContainerForm>
      <div></div>
    </ContainerCenter>
  );
};

export default CreatePost;
