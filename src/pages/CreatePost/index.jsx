import React, { useState } from 'react';
import styles from './style.module.css';
import { UseAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [mediaURL, setMediaURL] = useState('');
  const [progressPercent, setProgressPercent] = useState(0);
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const [formError, setFormError] = useState('');
  const { user } = UseAuthValue();

  const { insertDocument, response } = useInsertDocument('posts');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgressPercent(progress);
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(mediaUploadTask.snapshot.ref).then((downloadURL) => {
            setMediaURL(downloadURL);
            savePost(downloadURL);
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const savePost = (mediaURL) => {
    const post = {
      title,
      mediaURL,
      body,
      tags: tags.split(',').map((tag) => tag.trim()),
      uid: user.uid,
      createdBy: user.displayName,
    };

    insertDocument(post);

    navigate('/');
  };

  if (formError) return null;

  return (
    <div className={styles.create_post}>
      <h2>Criar novo post</h2>
      <div className={styles.boxpost}>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título:</span>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Pense em um título de fácil entendimento..."
              required
            />
          </label>
          <label>
            <span>Conteúdo:</span>
            <textarea
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Compartilhe suas ideias e seu conhecimento aqui..."
              required
            />
          </label>
          <label>
            <span>Tags:</span>
            <input
              type="text"
              name="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Insira suas tags separadas por vírgula..."
              required
            />
          </label>
          <label>
            <span>Mídia (Imagem ou Vídeo):</span>
            <input
              type="file"
              id="mediaFileInput"
              accept="image/*, video/*"
              onChange={(e) => {
                const file = e.target.files[0];
                // setMediaURL(file); // Remova esta linha
              }}
            />
          </label>
          {progressPercent <= 1 ? (
            <button className="btn btn-dark" type="submit">
              Postar
            </button>
          ) : (
            <>
              <button className="btn" disabled>
                Postando...
              </button>
              <br />
              <br />
              <progress value={progressPercent} min="0" max="100" />
            </>
          )}
          {(response.error || formError) && <p className="error">{response.error || formError}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
