import { Link } from 'react-router-dom';

import { LuEdit, LuEye, LuTrash2 } from 'react-icons/lu';
import { UseAuthValue } from '../../context/AuthContext';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { Subtitle, Title } from '../../styles/styledGlobal';
import { ButtonEvent, ContainerButtonEvent, ContainerCreatePost, ContainerPost, CreatePost, CreatePostTitle, Post, TitlePost } from './styled';

const Dashboard = () => {
  const { user } = UseAuthValue();
  const uid = user.uid;

  const { documents: posts } = useFetchDocuments('posts', null, uid);

  const { deleteDocument } = useDeleteDocument('posts');

  console.log(uid);
  console.log(posts);

  return (
    <div>
      <Title>Dashboard</Title>
      <Subtitle>Gerencie os seus posts</Subtitle>
      {posts?.length == 0 && (
        <ContainerCreatePost>
          <CreatePostTitle>Não foram encontrados posts</CreatePostTitle>
          <CreatePost as={Link} to='/create-post' className='btn btn-dark'>
            Criar Primeiro Post
          </CreatePost>
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
