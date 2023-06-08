import styles from './style.module.css';

import { Link } from 'react-router-dom';

import { UseAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';

const Dashboard = () => {
  const { user } = UseAuthValue();
  const uid = user.uid;

  const { documents: posts } = useFetchDocuments('posts', null, uid);

  const { deleteDocument } = useDeleteDocument('posts');

  console.log(uid);
  console.log(posts);

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to='/create-post' className='btn btn-dark'>
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div className={styles.post_header}>
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}

      {posts &&
        posts.map(post => (
          <div className={styles.post_row} key={post.id}>
            <p>{post.title}</p>
            <div className={styles.actions}>
              <Link to={`/posts/${post.id}`} className='btn btn-outline'>
                Ver
              </Link>
              <Link to={`/posts/editpost/${post.id}`} className='btn btn-outline'>
                Editar
              </Link>
              <button
                onClick={() =>
                  window.confirm('Tem certeza que deseja excluir?') ? deleteDocument(post.id) : null
                }
                className='btn btn-outline btn-danger'
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
