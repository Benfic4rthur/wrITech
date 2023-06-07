import { Link } from 'react-router-dom';
import styles from './style.module.css';

const index = ({ post }) => {
  const { title, createdBy, tags, imgURL, id } = post;

  return (
    <div className={styles.post_detail}>
      <img src={imgURL} alt={title} />
      <h2 >{title}</h2>
      <p className={styles.createdby}>{createdBy}</p>
      <div className={styles.tags}>
        {tags.map(tag => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${id}`} className='btn btn-outline'>
        Ler
      </Link>
      <hr></hr>
    </div>
  );
};

export default index;
