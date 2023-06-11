import { useState } from 'react';
import { LuPlus, LuSearch } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';
import PostDetails from '../../components/PostDetails';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { CreatePostButton, PostsNotFoundContainer, PostsNotFoundTitle, SearchButton, SearchForm, SearchInput } from '../../styles/styledGlobal';
import { CreatePostTitle } from '../Dashboard/styled';
import { Container } from './styled';
import { ContainerHome } from '../Home/styled';

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
      <CreatePostTitle>Catalogo de postagens</CreatePostTitle>
      <Container>
        {loading && <p>Carregando...</p>}
        {posts && posts.map(post => <PostDetails key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <PostsNotFoundContainer>
            <PostsNotFoundTitle>Nenhum post encontrado.</PostsNotFoundTitle>
            <CreatePostButton as={Link} to='/create-post'>
              Criar postagem <LuPlus size={17} />
            </CreatePostButton>
          </PostsNotFoundContainer>
        )}
      </Container>
    </ContainerHome>
  );
};

export default Index;
