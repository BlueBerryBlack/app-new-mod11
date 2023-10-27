import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { searchCard } from '../../redux/searchStringRedux';

const SearchForm = () => {

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searchCard(search));
        setSearch('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." vallue={search} onChange={(e) => setSearch(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;