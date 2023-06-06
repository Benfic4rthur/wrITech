// CSS
import styles from './style.module.css';

// hooks
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument('posts', id);

  return (
    <div className={styles.post_container}>
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.imgURL} alt={post.title} />
          <p className={`${styles.body} ${styles.paragraph}`}>{post.body}</p>
          <h3>tags da postagem:</h3>
          <div className={styles.tags}>
            {post.tags.map(tag => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
          <p className={styles.createdby}>{post.createdBy}</p>
        </>
      )}
    </div>
  );
};

export default Post;
