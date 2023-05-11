import {Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home';
import Searchpage from '../../pages/Searchpage';

function Navegation() {
  return (
    <div className='Navegation'>  
    <Routes> 
     <Route path='/' element={<Home />} />
     <Route path='/search-page' element={<Searchpage />} /> 
     </Routes>
    </div>
  )
}
export default Navegation