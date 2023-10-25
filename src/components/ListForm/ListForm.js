import styles from './ListForm.module.scss'
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addList } from '../../redux/store';

const ListForm = ()=>{

    const [description, setDescription] =useState('');
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description}));
        setTitle('');
        setDescription('');
     };

    return(
        <form className={styles.column} onSubmit={handleSubmit}>
            <span className={styles.text}>Title:</span>
            <TextInput value = {title} onChange = {e => setTitle(e.target.value)}/>
            <span className={styles.text}>Description:</span>
            <TextInput value= {description} onChange = {e => setDescription(e.target.value)}/>
            <Button>Add List</Button> 
        </form>
    );
};

export default ListForm;