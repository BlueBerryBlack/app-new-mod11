import { createStore } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';
import { combineReducers } from 'redux';

import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';


//selectors

//export const getColumnsByList = (state, listId) => {
 // const { columns } = state;
 // return columns.filter(column => column.listId === listId);}; 

//export const getAllLists = state => state.lists;

//export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId)

//export const getFilteredCards = ({ cards, search }, columnId) => cards
 // .filter(card => card.columnId === columnId && strContains(card.title, search));

//export const getAllColumns = state => state.columns;



// action creators
//export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

//export const addCard = payload => ({ type: 'ADD_CARD', payload });

//export const searchCard = payload => ({ type: 'SEARCH_CARD', payload });

//export const addList = payload => ({type: 'ADD_LIST', payload});

//export const toggleCardFavorite = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload});


//reducer

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  search: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;