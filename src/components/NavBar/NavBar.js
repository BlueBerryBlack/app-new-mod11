import styles from './NavBar.module.scss';

const NavBar = () => {

    return(
        <nav className={styles.navigation}> 
            <div className={styles.container}>
                <span className={styles.icon}><i className="tasks"></i></span>
                <ul>
                    <li>Home</li>
                    <li>Favorite</li>
                    <li>About</li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;