import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CreateInput } from '../../components/CreateInput';
import { Textaria } from '../../components/CreateInput/styled';

import { UseAuthValue } from '../../context/AuthContext';
import { storage } from '../../firebase/config';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';

import { LuTag } from 'react-icons/lu';
import { MdOutlineTextFields } from 'react-icons/md';
import { RxFilePlus } from 'react-icons/rx';

import { ContainerCenter } from '../../styles/styledGlobal';
import { ButtonForm, ContainerForm, Error, Form } from '../../styles/styledsLoaginAndRecord';
import { Progress } from '../CreatePost/styled';

const EditPost = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument('posts', id);

  const [title, setTitle] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  const [mediaURL, setMediaURL] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const [formError, setFormError] = useState('');
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setMediaURL(post.mediaURL);
      setBody(post.body);

      const textTags = post.tags.join(', ');

      setTags(textTags);
    }
  }, [post]);

  const { user } = UseAuthValue();
  const navigate = useNavigate();
  const { updateDocument, response } = useUpdateDocument('posts');

  const handleSubmit = async e => {
    e.preventDefault();
    setFormError('');

    try {
      if (mediaFile) {
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
      } else {
        savePost(mediaURL);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const savePost = async mediaURL => {
    const tagsArray = tags.split(',').map(tag => tag.trim());

    const data = {
      title,
      mediaURL,
      body,
      tags: tagsArray,
    };

    updateDocument(id, data);

    navigate('/dashboard');
  };

  return (
    <ContainerCenter>
      <ContainerForm>
        <h2>Editando post: {post?.title}</h2>
        <Form onSubmit={handleSubmit}>
          <CreateInput
            aria-label='Título'
            Svg={MdOutlineTextFields}
            type='text'
            name='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <CreateInput
            Svg={RxFilePlus}
            aria-label='adicione arquivos de Imagem ou Vídeo'
            type='file'
            accept='image/*, video/*'
            onChange={e => setMediaFile(e.target.files[0])}
          />
          {mediaURL && (
            <div>
              <p>Preview da midia atual:</p>
              {post.mediaURL &&
              (post.mediaURL.includes('.mp4') || post.mediaURL.includes('.webm')) ? (
                <video src={post.mediaURL} alt={post.title} controls style={{ width: 300 }} />
              ) : (
                <img src={post.mediaURL} alt={post.title} style={{ width: 300, maxHeight: 450 }} />
              )}
            </div>
          )}
          <Textaria
            aria-label='Descrição'
            name='body'
            value={body}
            onChange={e => setBody(e.target.value)}
            required
          ></Textaria>
          <CreateInput
            Svg={LuTag}
            aria-label={'Insira suas tags separadas por vírgula'}
            type='text'
            name='tags'
            value={tags}
            onChange={e => setTags(e.target.value)}
            placeholder='Insira as tags separadas por vírgula'
            required
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

export default EditPost;
