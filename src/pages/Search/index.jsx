// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

// components
import PostDetail from "../../components/PostDetails";
import { Link } from "react-router-dom";

const index = () => {
  const query = useQuery();
  const search = query.get("q");
  const { documents: posts } = useFetchDocuments("posts", search);
  return (
    <div >
      <h1>Resultados encontrados para: {search}</h1>
      <div >
        {posts && posts.length === 0 && (
          <div>
            <p>Não foram encontrados resultados a partir da sua busca...</p>
            <Link to="/" >
              Voltar
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default index;
