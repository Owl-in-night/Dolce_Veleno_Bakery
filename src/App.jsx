import Navbar from './components/_partials/Navbar'
import Footer from './components/_partials/Footer'
import Navegation from './components/routes/Navegation'

function App () {
  return (
    <div className='dark:bg-slate-800 border-gray-200'>
      <Navbar />

      <Navegation />

      <Footer />
    </div>
  )
}
export default App
