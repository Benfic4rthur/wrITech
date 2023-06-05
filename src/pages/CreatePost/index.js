import styles from './style.module.css';
import { useState } from 'react';
import { UseAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/config';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [progressPercent, setProgressPercent] = useState(0);
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');
  const { user } = UseAuthValue();

  const { insertDocument, response } = useInsertDocument('posts');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    // Validar a URL da imagem
    // Criar um array de tags
    // Verificar todos os valores

    const fileInput = document.getElementById('fileInput');
    const file = fileInput?.files[0];

    if (!file) return;

    try {
      const storageRef = ref(storage, `posts/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgressPercent(progress);
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgURL(downloadURL);
            savePost();
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const savePost = () => {
    insertDocument({
      title,
      imgURL,
      body,
      tags: tags.split(',').map((tag) => tag.trim()),
      uid: user.uid,
      createdBy: user.displayName,
    });

    // Redirecionar para a página inicial ou para onde desejar
  };

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
            <span>Imagem:</span>
            <input type="file" id="fileInput" onChange={(e) => setImgURL(e.target.value)} />
          </label>
          {!response.loading && <button className="btn">Postar</button>}
          {response.loading && (
            <button className="btn" disabled type="submit">
              Aguarde...
            </button>
          )}
          {response.successMessage && <p className="success">{response.successMessage}</p>}
          {(response.error || formError) && <p className="error">{response.error || formError}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
