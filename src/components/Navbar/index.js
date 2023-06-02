import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

const index = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to='/' className={styles.brand}>
                wr<span>IT</span>ech
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to='/' className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/login' className={({isActive}) => isActive ? styles.active : ''}>Entrar</NavLink>
                </li>
                <li>
                    <NavLink to='/register' className={({isActive}) => isActive ? styles.active : ''}>Cadastro</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({isActive}) => isActive ? styles.active : ''}>Sobre</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default index;
