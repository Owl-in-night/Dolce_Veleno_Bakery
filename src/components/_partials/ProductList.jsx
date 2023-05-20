import React from 'react'
import { getProducts } from '../../api/products'
import ProductCard from './ProductCard'


function ProductList() {
 
  const [products, setProducts] = useState([])

  
  useEffect(() => {
   

   
    const getResponse = async () => {
      const response = await getProducts()


      setProducts(response)
    }

    
    getResponse()
  }, []) /* -> [] <- como dependencia significa que lo de dentro del useEffect se va a ejecutar una sola vez al montar el componente / recargar la pagina  */

  return (
    // * retorna un frament -> alternativa a div
    <>
      {/*  lo de dentro del className son clases de Tailwind -> se instala por aparte */}


      <div className='flex flex-wrap justify-center'>
        {/* la forma de ejecutar codigo de JS dentro del return de un componente es con { } */}
        {/* movies contiene los datos de la respuesta de la API */}
        {/* se puede usar map para recorrer los elementos del array de movies, pero se puede usar forEach o for */}

        {products.map((product) => (
          // * movie es cada objeto individual del array de movies
          // * se llama al componente MovieCard y se le pasan props(parametros)
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
          />
        ))}
      </div>
    </>
  )
}
export default ProductList