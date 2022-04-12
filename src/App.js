import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import About from './components/About/About';
import Head from './components/Head/Head';
import Contacts from './components/Contacts/Contacts';
import Detailpost from './components/Detailpost/Detailpost';
import { Container } from '@mui/material';

function App() {

  return (
   <>
   <Container maxWidth="sm">
  <div className="container py-8">
    <BrowserRouter>
      <Head />
          <hr />
               <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/posting" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/posts" element={<Main />} />
      <Route path="/posts/:postsId" element={<Detailpost />} />
    </Routes>
  </BrowserRouter>
  </div>
  </Container>
  </>
    
  )
}

export default App;
