import { Link } from 'react-router-dom';

import { LuEdit, LuEye, LuPlus, LuTrash2 } from 'react-icons/lu';
import { UseAuthValue } from '../../context/AuthContext';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { CreatePostButton, Subtitle } from '../../styles/styledGlobal';
import {
  ButtonEvent,
  ContainerButtonEvent,
  ContainerCreatePost,
  ContainerHeader,
  ContainerPost,
  CreatePostTitle,
  Post,
  TitlePost,
} from './styled';

const Dashboard = () => {
  const { user } = UseAuthValue();
  const uid = user.uid;

  const { documents: posts } = useFetchDocuments('posts', null, uid);

  const { deleteDocument } = useDeleteDocument('posts');

  return (
    <div>
      <ContainerHeader>
        <Subtitle>Gerencie os seus posts</Subtitle>
        <CreatePostButton as={Link} to='/create-post' className='btn btn-dark'>
          Criar Post <LuPlus size={17}/>
        </CreatePostButton>
      </ContainerHeader>
      {posts?.length == 0 && (
        <ContainerCreatePost>
          <CreatePostTitle>Não foram encontrados posts</CreatePostTitle>
        </ContainerCreatePost>
      )}

      {posts?.length > 0 && (
        <ContainerPost>
          {posts.map(post => (
            <Post key={post.id}>
              <TitlePost>Title: {post.title}</TitlePost>
              <ContainerButtonEvent>
                <ButtonEvent as={Link} to={`/posts/${post.id}`}>
                  <LuEye />
                </ButtonEvent>
                <ButtonEvent as={Link} to={`/posts/editpost/${post.id}`}>
                  <LuEdit />
                </ButtonEvent>
                <ButtonEvent
                  className='delete'
                  onClick={() =>
                    window.confirm('Tem certeza que deseja excluir?')
                      ? deleteDocument(post.id)
                      : null
                  }
                >
                  <LuTrash2 />
                </ButtonEvent>
              </ContainerButtonEvent>
            </Post>
          ))}
        </ContainerPost>
      )}
    </div>
  );
};

export default Dashboard;
