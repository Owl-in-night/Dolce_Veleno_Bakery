import React from 'react'

function Product3 () {
  return (
    <div className="max-w-sm border border-gray-800 rounded-lg shadow bg-gray-800 dark:bg-stone-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg" src="img/3.png" alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          Budin navideño
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-400">
      Es de origen celta y se hacía a base de leche, cereales y fruta.
      Un budín inglés o plum cake es un bizcocho hecho con frutos secos, frutas confitadas y algún tipo de licor. Algunos incluso añaden especias en el bizcocho. El budín inglés se suele servir durante la Navidad y en algunos lugares, también durante las bodas.
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Añadir al carrito
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>
  )
}
export default Product3