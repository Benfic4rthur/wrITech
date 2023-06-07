//css
import styles from './style.module.css';

//hooks
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

//components
import PostDetailsHome from '../../components/PostDetailsHome';

const index = () => {
  const [query, setQuery] = useState('');
  const { documents: posts, loading } = useFetchDocuments('posts');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if(query){
      return navigate(`/search?q=${query}`);
    }
  };
  
  return (
    <div className={styles.home}>
      <h1>Veja todas as postagens mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type='text'
          placeholder='Ou busque por tags...'
          onChange={e => setQuery(e.target.value)}
        />
        <button className='btn btn-dark'>Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.map(post => (<PostDetailsHome key={post.id} post={post}/>))}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não existem postagens!</p>
            <Link to='/create-post' className='btn btn-dark'>
              Crie uma postagem!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
