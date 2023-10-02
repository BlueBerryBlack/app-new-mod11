import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
    return (
        <div className={styles.list}>
            <heder className={styles.header}>
                <h1 className={styles.title}>Things to do<span>soon</span></h1>
                <p className={styles.description}>Interesting things I want to check out</p>
            </heder>
            <section className={styles.columns}>
                <Column icon="book" title = "Books"/>
                <Column icon="gamepad" title = "Movie"/>
                <Column icon="film" title = "Games"/>
            </section>
        </div>
    );
};

export default List;