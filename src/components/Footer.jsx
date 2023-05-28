export function Footer() {
  return (
    <footer className='min-h-[50px] h-auto text-xs bg-slate-300 text-slate-800 dark:bg-slate-800 dark:text-slate-300 w-full mt-8 f'>
      <b>
        <h2 className='text-center'>Sobre nosotros</h2>
      </b>
      <p />
      <div className='flex-auto text-justify w-2/6 m-auto font'>
        Somos una empresa comprometida con nuestros clientes, ofreciendo
        soluciones innovadoras y de calidad. Nuestro objetivo es brindar un
        servicio excepcional y satisfacer las necesidades de nuestros clientes.
        ¡Gracias por confiar en nosotros!
      </div>
      <p />
      <div className=' '>
        <div className='flex-auto text-justify w-2/6 m-auto'>
          <b>
            <h2 className='text-center'>Contacto</h2>
          </b>
          <p />
          <p className='text-center'>Calle de la piruleta 69</p>
          <p className='text-center'>Teléfono: 666 666 666</p>
          <p className='text-center'>Correo: isagi@gmail.com </p>
          <p />
        </div>
      </div>
      <hr />
      <p className='block text-center'>
        © 2021 IsagiNews. All rights reserved.
      </p>
    </footer>
  )
}
