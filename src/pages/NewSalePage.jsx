import {
  Label,
  TextInput,
  Textarea,
  Select,
  FileInput,
  Button
} from 'flowbite-react'
import { useEffect, useRef, useState } from 'react'
import { sendSale, uploadSaleImage } from '../services/sales'
import { useAppSelector } from '../hooks/store'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NewSalePage() {
  const textRef = useRef()
  const [textAreaSize, setTextAreaSize] = useState(0)
  const [showOtherStore, setShowOtherStore] = useState(false)
  const token = useAppSelector((state) => state.token)
  const navigate = useNavigate()

  useEffect(() => {
    setTextAreaSize(textRef.current.scrollHeight)
    console.log(textRef.current.scrollHeight)
    console.log(textAreaSize)
  }, [])
  const handleSelectChange = (e) => {
    if (e.target.value === 'otros') {
      setShowOtherStore(true)
    } else {
      setShowOtherStore(false)
    }
  }
  const OnInput = () => {
    const tx = textRef.current
    if (tx.scrollHeight > textAreaSize) {
      tx.style.height = tx.scrollHeight + 'px'
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const title = formData.get('title')
    const link = formData.get('link')
    const description = formData.get('description')
    const shops =
      formData.get('shops') === 'otros'
        ? formData.get('otherShop')
        : formData.get('shops')
    const oldPrice = formData.get('old_price')
    const newPrice = formData.get('new_price')

    const { images } = await uploadSaleImage({
      token,
      image: formData.get('image')
    })
    const image = images[0]

    sendSale({
      token,
      sale: {
        image,
        title,
        description,
        link,
        shop: shops,
        old_price: oldPrice,
        new_price: newPrice
      }
    }).then((res) => navigate(`/sales/${res.sale_id}`))
  }

  return (
    <div className='max-md:w-full max-md:mx-0 flex flex-col gap-4 bg-slate-300 dark:bg-slate-700 p-8 mx-40 my-8 justify-start rounded-xl object-cover'>
      {!token && <Navigate to='/' />}
      <h2 className='text-2xl font-bold mx-auto'>Nueva Oferta</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-2 block'>
          <Label htmlFor='small' value='Foto' />
        </div>
        <FileInput
          required
          name='image'
          type='file'
          sizing='sm'
          className='mb-4'
          accept='image/*'
        />
        <div className='mb-2 block'>
          <Label htmlFor='small' value='Titulo de la oferta' />
        </div>
        <TextInput
          required
          name='title'
          type='text'
          sizing='sm'
          className='mb-4'
        />
        <div className='mb-2 block'>
          <Label htmlFor='small' value='Descripción' />
        </div>
        <Textarea
          required
          name='description'
          ref={textRef}
          type='text'
          sizing='sm'
          className='resize-none overflow-hidden mb-4'
          onInput={OnInput}
        />
        <div className='mb-2 block'>
          <Label htmlFor='tiendas' value='Tienda' />
        </div>
        <Select
          name='shops'
          className='mb-4'
          onChange={handleSelectChange}
          required
        >
          <option value='Amazon'>Amazon</option>
          <option value='Miravia'>Miravia</option>
          <option value='Epic Games'>Epic Games</option>
          <option value='Pc Componentes'>Pc Componentes</option>
          <option value='Otros'>Otros</option>
        </Select>
        <TextInput
          name='other_shop'
          type='text'
          sizing='sm'
          className={showOtherStore ? 'block' : 'hidden'}
        />
        <div className='mb-2 block'>
          <Label htmlFor='small' value='Enlace' />
        </div>
        <TextInput
          required
          name='link'
          type='text'
          className='mb-4'
          sizing='sm'
        />
        <div className='flex justify-between'>
          <div className='mb-2 block'>
            <Label htmlFor='small' value='Precio Antiguo' />
          </div>
          <TextInput required name='old_price' type='number' sizing='sm' />
          <div className='mb-2 block'>
            <Label htmlFor='small' value='Precio nuevo' />
          </div>
          <TextInput required name='new_price' type='number' sizing='sm' />
        </div>
        <Button type='submit' color='dark' className='ml-auto mt-4'>
          Subir Oferta
        </Button>
      </form>
    </div>
  )
}
