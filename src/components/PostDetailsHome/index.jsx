import { Link } from 'react-router-dom';
import {
  Author,
  ContainerMidia,
  ContainerPost,
  ContainerTag,
  Image,
  Tag,
  Title,
  Video,
} from './styled';

const index = ({ post }) => {
  const { title, createdBy, tags, mediaURL, id } = post;

  return (
    <ContainerPost as={Link} to={`/posts/${id}`}>
      {mediaURL && (mediaURL.includes('.mp4') || mediaURL.includes('.webm')) ? (
        <ContainerMidia>
          <Video src={mediaURL} alt={title} />
        </ContainerMidia>
      ) : (
        <ContainerMidia>
          <Image src={mediaURL} alt={title} />
        </ContainerMidia>
      )}

      <Title aria-label={title} title={title}>
        {title}
      </Title>
      <Author>Autor: {createdBy}</Author>
      <ContainerTag>
        {tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </ContainerTag>
    </ContainerPost>
  );
};

export default index;
