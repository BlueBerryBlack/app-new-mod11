import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.containerNav}>
            <span className={styles.pictogram + ' fa fa-tasks'} />
            <div className={styles.navigation}>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                    to="/">Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined}
                    to="/favorite">Favorite</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined}
                    to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;

