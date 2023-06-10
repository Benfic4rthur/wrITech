// CSS

// hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument('posts', id);
  // .mp4, .m4v, .mov .avi 	.mpg  .mpeg .wmv

  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          {post.mediaURL && (post.mediaURL.includes('.mp4') || post.mediaURL.includes('.webm')) ? (
            <video src={post.mediaURL} alt={post.title} controls />
          ) : (
            <img src={post.mediaURL} alt={post.title} />
          )}

          <p >{post.body}</p>
          <h3>tags da postagem:</h3>
          <div >
            {post.tags.map(tag => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
          <p >{post.createdBy}</p>
        </>
      )}
    </div>
  );
};

export default Post;
