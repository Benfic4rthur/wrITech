import styles from './style.module.css';
import logo from '../../assets/logofooter.png';
const date = new Date();
const year = date.getFullYear();
const index = () => {
    return (
        <footer className={styles.footer}>
            <h3>Compartilhe seu conhecimento!</h3>
            <p><img src={logo} alt='logo'/>  &copy; {year}</p>
        </footer>
    );
};

export default index;
