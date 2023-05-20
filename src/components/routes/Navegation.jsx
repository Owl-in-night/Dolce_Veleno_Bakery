import {Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home';
import Catalogo from '../../pages/Catalogo';
import Contacto from '../../pages/Contacto';
import Sobrenosotros from '../../pages/Sobrenosotros';
import { Signin } from '../../pages/Signin';
import { Signup } from '../../pages/Signup';
import Dashboard from '../../pages/Dashboard';
import { AuthProvider } from '../../context/authContext';
import { ProtectedRoute } from '../_partials/Protectedroute';


function Navegation() {
  return (
    <div className='Navegation'> 
    <AuthProvider>
    <Routes> 
     <Route path='/' element={<Home />} />
     <Route path='/catalogo' element={<Catalogo />} /> 
     <Route path='/contacto' element={<Contacto />} />
     <Route path='/sobre-nosotros' element={<Sobrenosotros />} />
     <Route path='/signin' element={<Signin />} />
     <Route path='/signup' element={<Signup />} />
     <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
     </Routes>
     </AuthProvider> 
    </div>
  )
}
export default Navegation