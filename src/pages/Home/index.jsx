//hooks
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

//components
import { LuPlus, LuSearch } from 'react-icons/lu';
import PostDetailsHome from '../../components/PostDetailsHome';
import { CreatePostButton, PostsNotFoundContainer, PostsNotFoundTitle, SearchButton, SearchForm, SearchInput } from '../../styles/styledGlobal';
import {
  ContainerHome,
  PostsContainer,
} from './styled';

const Index = () => {
  const [query, setQuery] = useState('');
  const { documents: posts, loading } = useFetchDocuments('posts');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <ContainerHome>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type='text'
          aria-label='Digite aqui para pesquisar posts'
          placeholder='Digite aqui para pesquisar'
          onChange={e => setQuery(e.target.value)}
        />
        <SearchButton aria-label='Realizar busca'>
          <LuSearch />
        </SearchButton>
      </SearchForm>

        <h2>Veja todas as postagens mais recentes</h2>
        {loading && <p>Carregando...</p>}
        <PostsContainer>
          {posts && posts.map(post => <PostDetailsHome key={post.id} post={post} />)}
          {posts && posts.length === 0 && (
            <PostsNotFoundContainer>
              <PostsNotFoundTitle>Nenhum post encontrado.</PostsNotFoundTitle>
              <CreatePostButton as={Link} to='/create-post'>
                Criar postagem <LuPlus size={17}/>
              </CreatePostButton>
            </PostsNotFoundContainer>
          )}
        </PostsContainer>
    </ContainerHome>
  );
};

export default Index;
