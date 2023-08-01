function Sobrenosotros () {
  return (
    <div className='m-0 dark:bg-slate-800 border-gray-200 dark:text-white'>
      <div className='video-responsive'>
        <video className='w-full' autoPlay loop muted>
          <source src='/video/video_3.mp4' type='video/mp4' />
        </video>
      </div>
      {/* Text */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id='up'>
        <a href='#target' className='lg:ml-[665px] ml-[65px] bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Descrubre más sobre nosotros</a>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Imgs */}
      <div id='target' className='max-w-screen-2xl p-6 bg-white border border-gray-200 rounded-lg shadow lg:mx-[100px] dark:bg-gray-800 dark:border-gray-700'>
        <figure className='md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800'>
          <img className='w-24 h-25 lg:w-[500px] lg:h-[500px] md:w-[355px] md:h-[450px] md:rounded-none rounded-full mx-auto' src='/img/FUNDADORA.jpg' alt='' width='400px' height='512px' />
          <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
            <blockquote>
              <p className='container mx-auto px-4 text-lg text-justify leading-loose font-medium'>
                Iniciamos a elaborar nuestros productos en el año 2002 con recetas familiares, durante esos años no teníamos un horno propio así que durante muchos años horneamos en otro lugar.
                A inicios del 2020 decidimos que los pasteles de cumpleaños ya no se comprarían si no los haríamos nosotros mismos así que desde entonces los hemos elaborado para los cumpleañeros de casa y gracias a  los invitados de nuestras fiestas fue que se dieron a conocer nuestros productos, como nuestro famoso pan de banano o nuestro pastel de cumpleaños. Además de utilizar nuestras plataformas digitales para darlos a conocer.
                <br />
                <br />
                Durante la pandemia descubrimos nuevas recetas que pusimos a prueba , mismas que compartimos con nuestros amigos quienes se convirtieron en nuestros primeros clientes.
                <br />
                <br />
                Cuando compartes un postre, compartes amor.
              </p>
            </blockquote>
            <figcaption className='font-medium'>
              <div className='text-sky-500 dark:text-sky-400'>
                Irene Ana Beatriz Joj Cano
              </div>
              <div className='text-slate-700 dark:text-slate-500'>
                Arquitecta & CEO of Dolce Veleno Bakery, Panajachel
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  )
}
export default Sobrenosotros
