import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
   
      case 'SEARCH_CARD':
        return { ...state, search: action.payload };
  
  
      case 'ADD_CARD':
      const { title, columnId } = action.payload;
      const newCard = { id: shortid(), title };
      const updatedColumns = state.columns.map(column => {
        if (column.id === columnId) {
          return { ...column, cards: [...column.cards, newCard] };
        }
        return column;
      });
      return { ...state, columns: updatedColumns };
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