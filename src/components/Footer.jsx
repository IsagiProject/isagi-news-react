export function Footer() {
  return (
    <footer className='min-h-[50px] h-auto text-xs bg-slate-300 text-slate-800 dark:bg-slate-800 dark:text-slate-300 w-full mt-8'>
      <b>
        <h2 className='text-center'>Sobre nosotros</h2>
      </b>
      <p />
      <div className='flex-auto text-justify w-2/6 m-auto font'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
        posuere mollis. Vivamus mattis non ipsum eu maximus. Quisque fermentum,
        mauris vitae fringilla laoreet, massa orci dapibus libero, nec interdum
        eros justo ornare tortor. Aliquam eget risus eget lectus fringilla
        accumsan quis ac ante. Nullam aliquet turpis vel vehicula elementum.
        Mauris non est a quam commodo viverra. Donec non scelerisque justo.
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
