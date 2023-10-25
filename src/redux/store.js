import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors

export const getColumnsByList = (state, listId) => {
  const { columns } = state;
  return columns.filter(column => column.listId === listId);
};


export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId)

export const getFilteredCards = ({ cards, search }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, search));

export const getAllColumns = state => state.columns;

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const searchCard = payload => ({ type: 'SEARCH_CARD', payload });

//reducer

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
   
      case 'SEARCH_CARD':
        return { ...state, search: action.payload };
  
      case 'ADD_CARD':
      const { title, columnId } = action.payload;
      const newCard = { id: shortid(), title, columnId };
      return { ...state, cards:[...state.cards, newCard] };
      default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;