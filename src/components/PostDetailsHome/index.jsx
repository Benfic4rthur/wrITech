import { Link } from 'react-router-dom';
import { Author, ContainerPost, ContainerTag, Image, Tag, Title, Video } from './styled';

const index = ({ post }) => {
  const { title, createdBy, tags, mediaURL, id } = post;

  return (
    <ContainerPost>
      <Link to={`/posts/${id}`}>
        {mediaURL && (mediaURL.includes('.mp4') || mediaURL.includes('.webm')) ? (
          <Video src={mediaURL} alt={title} />
        ) : (
          <Image src={mediaURL} alt={title} />
        )}
      </Link>
      <Title>{title}</Title>
      <Author >Autor: {createdBy}</Author>
      <ContainerTag>
        {tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </ContainerTag>
    </ContainerPost>
  );
};

export default index;
