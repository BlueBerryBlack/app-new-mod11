import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import CardFavorite from '../CardFavorite/CardFavorite';

const Favorite = () => {
    return (
        <div>
            <PageTitle> Favorite </PageTitle >
            <CardFavorite/>
        </div>
    );
};

export default Favorite;