import React , {useContext} from 'react';
import Header from './Components/Header';
import Home from './pages/Home';
import { Routes,Route, BrowserRouter } from 'react-router-dom';

// import Contact from './pages/Contact';


import Notfound from './pages/Notfound';
import { GlobalProviders } from './GlobalContext/GlobalProvider';
import AddNew from './pages/AddNew';
// import Explore from './pages/Explore';

const App = () => {

  return (
    <>
    <Header />
   
    <GlobalProviders>
<Routes>
 
  <Route  path='/' element = {<Home />}/> 
  <Route  path='/addnew' element = {<AddNew />}/>
  <Route  path='*' element = {<Notfound />}/>

</Routes>

</GlobalProviders>

 

</>
  
  )
}

export default App