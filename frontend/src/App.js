import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './App.css';
import LandingPage from './screens/LandingPages/LandingPage';
import MyNotes from './screens/LandingPages/MyNotes/MyNotes';

const App = () => {

  return (
    <>
    <Router> 
   <Header/>
   <main > 
   <Routes> 
   <Route path='/' element ={ <LandingPage/>} exact />
   <Route path='/mynotes' element ={  <MyNotes/> }/>
   </Routes>
   
   </main>
   <Footer/>
   </Router>
    </> // Jsx where html exists in javascript 
  );
}

export default App;
