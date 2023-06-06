import styles from './style.module.css';
import { Link } from 'react-router-dom';

const index = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.imgURL} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>{post.createdBy}</p>
      <div className={styles.tags}>
        {post.tags.map(tag => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`}className='btn btn-outline'>Ler</Link>
    </div>
  );
};

export default index;