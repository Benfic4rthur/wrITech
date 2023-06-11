//css
import arthurImg from '../../assets/arthur.JPG';
import { Container, Image, Text, Title, Title2 } from './styled';

const index = () => {
  return (
    <Container>
      <Title>
        Sobre o wrITech
      </Title>
      <Text>Este projeto consite em um forum para interação da comunidade DEV da twitch.</Text>

      <Title2>Idealizador:</Title2>
      <Image src={arthurImg} alt='' />
      <h3>Arthur Graff</h3>

      <Text>
        Desenvolvedor Full Stack com ampla bagagem em JAVA/PHP, Aventurando-se neste mundo do
        front-end e com vontade de unificar a comunidade.
      </Text>
    </Container>
  );
};

export default index;
