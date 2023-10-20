import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.containerNav}>
            <span className={styles.pictogram + ' fa fa-tasks'} />
            <div className={styles.navigation}>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="/favorite">Favorite</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;

