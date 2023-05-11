import React from 'react'
import Product1 from '../components/_partials/Product1'
import Product2 from '../components/_partials/Product2'
import Product3 from '../components/_partials/Product3'
import Product4 from '../components/_partials/Product4'

function Home() {
  return (
    <div>
        <main className="w-screen h-full bg-white dark:bg-zinc-950 pt-5">
        <div className="flex flex-col text-center">
        <h1 className="block text-2xl font-bold dark:text-white">Catálogo</h1>
        <p className="block text-xl dark:text-white">Te ofrecemos un postre de calidad</p>
        </div>
        <div className="flex flex-wrap justify-center gap-1 pt-3 pb-3">
        <Product1/> 
        <Product2/>
        <Product3/> 
        <Product4/> 
        </div>
    </main>
    </div>
  )
}
export default Home