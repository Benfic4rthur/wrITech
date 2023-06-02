import styles from './style.module.css';
const date = new Date();
const year = date.getFullYear();
const index = () => {
    return (
        <footer className={styles.footer}>
            <h3>Compartilhe seu conhecimento!</h3>
            <p>wrITech &copy; {year}</p>
        </footer>
    );
};

export default index;
