import styles from './style.module.css';
import { Link } from 'react-router-dom';

const Index = ({ post }) => {
  const limiteCaracteres = 200;
  const limitaTituloPostagem = 55;
  const body =
    post.body.length > limiteCaracteres
      ? `${post.body.substring(0, limiteCaracteres)}...`
      : post.body;
  const title =
    post.title.length > limitaTituloPostagem
      ? `${post.title.substring(0, limitaTituloPostagem)}...`
      : post.title;

  return (
    <div className={styles.postContainer}>
      <Link to={`/posts/${post.id}`} className={styles.postLink}>
        <div className={styles.postBox}>
          {post.mediaURL && (post.mediaURL.includes('.mp4') || post.mediaURL.includes('.webm')) ? (
            <video src={post.mediaURL} alt={post.title}/>
          ) : (
            <img src={post.mediaURL} alt={post.title} />
          )}
          <h2 className={styles.title}>{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Index;
