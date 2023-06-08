import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UseAuthValue } from '../../context/AuthContext';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/config';

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
    <div>
      <h2>Editando post: {post?.title}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type='text'
            name='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Mídia (Imagem ou Vídeo):
          <input
            type='file'
            accept='image/*, video/*'
            onChange={e => setMediaFile(e.target.files[0])}
          />
        </label>
        {mediaURL && (
          <div>
            <p>Preview da imagem atual:</p>
            {post.mediaURL &&
            (post.mediaURL.includes('.mp4') || post.mediaURL.includes('.webm')) ? (
              <video src={post.mediaURL} alt={post.title} controls style={{ width: 300 }} />
            ) : (
              <img src={post.mediaURL} alt={post.title} style={{ width: 300, maxHeight: 450 }} />
            )}
          </div>
        )}
        <label>
          Conteúdo:
          <textarea
            name='body'
            value={body}
            onChange={e => setBody(e.target.value)}
            required
          ></textarea>
        </label>
        <label>
          Tags:
          <input
            type='text'
            name='tags'
            value={tags}
            onChange={e => setTags(e.target.value)}
            placeholder='Insira as tags separadas por vírgula'
            required
          />
        </label>
        {progressPercent <= 1 ? (
          <button className='btn btn-dark' type='submit'>
            Editar
          </button>
        ) : (
          <>
            <button className='btn btn-dark' disabled>
              Postando...
            </button>
            <br />
            <br />
            <progress value={progressPercent} min='0' max='100' />
          </>
        )}
        {(response.error || formError) && <p>{response.error || formError}</p>}
      </form>
    </div>
  );
};

export default EditPost;
