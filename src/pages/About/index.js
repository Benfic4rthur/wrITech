//css
import styles from './style.module.css';
import arthurImg from '../../assets/arthur.JPG';

const index = () => {
  return (
    <div className={styles.about}>
      <h1>
        Sobre o wr<span>IT</span>ech
      </h1>
      <p>Este projeto consite em um forum para interação da comunidade DEV da twitch.</p>
      <div className={styles.boxperson}>
        <h2>Idealizador:</h2>
        <img src={arthurImg} alt='' />
        <h3>Arthur Graff</h3>
        <div className={styles.bio}>
          <p>
            Desenvolvedor Full Stack com ampla bagagem em JAVA/PHP, Aventurando-se neste mundo do
            front-end e com vontade de unificar a comunidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
