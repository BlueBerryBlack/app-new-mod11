import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Container from './components/Container/Container';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import List from './components/List/List'
import PageNotFound from './components/PageNotFound/PageNotFound';

import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <main>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/About" element={<About/>} />
          <Route path = "/Favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;