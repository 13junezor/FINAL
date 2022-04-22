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
import { RequireAuth } from './components/Auth/RequireAuth/RequireAuth';
import SignIn from './components/SingIn/SignIn';
import Greeting from './components/Greeting/Greeting';

function App() {

  return (
   <>
   <Container maxWidth="xl">
  <div className="container-xl">
    <BrowserRouter>
            <Head />
                <hr />
           <Routes>
          <Route path="/"
          element={<Greeting />
          } />
          <Route path="/posting"
          element={
            <RequireAuth>
          <Header />
          </RequireAuth>} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/posts" element={
          <RequireAuth>
          <Main />
          </RequireAuth>} />
            <Route path="/posts/:postsId" element={
            <RequireAuth>
            <Detailpost />
            </RequireAuth>} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
  </BrowserRouter>
  </div>
  </Container>
  </>
    
  )
}

export default App;
