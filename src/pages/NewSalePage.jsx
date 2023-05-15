import {
  Label,
  TextInput,
  Textarea,
  Select,
  FileInput,
  Button
} from 'flowbite-react'
import { useEffect, useRef, useState } from 'react'
import { sendSale } from '../services/sales'
import { useAppSelector } from '../hooks/store'
import { Navigate } from 'react-router-dom'

export default function NewSalePage() {
  const textRef = useRef()
  const [textAreaSize, setTextAreaSize] = useState(0)
  const [showOtherStore, setShowOtherStore] = useState(false)
  const token = useAppSelector((state) => state.token)

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
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const image = formData.get('image')
    const title = formData.get('title')
    const link = formData.get('link')
    const description = formData.get('description')
    const shops =
      formData.get('shops') === 'otros'
        ? formData.get('otherShop')
        : formData.get('shops')
    const oldPrice = formData.get('old_price')
    const newPrice = formData.get('new_price')
    sendSale({
      token,
      sale: {
        image: '',
        title,
        description,
        link,
        shop: shops,
        old_price: oldPrice,
        new_price: newPrice
      }
    })

    console.log(formData.get('title'))
  }

  return (
    <div className='flex flex-col gap-4 bg-slate-300 dark:bg-slate-700 p-8 mx-40 my-8 justify-start rounded-xl object-cover'>
      {!token && <Navigate to='/' />}
      <form onSubmit={handleSubmit}>
        <div className='mb-2 block'>
          <Label htmlFor='small' value='Foto' />
        </div>
        <FileInput
          name='image'
          type='file'
          sizing='sm'
          className='mb-4'
          accept='image/*'
        />
        <div className='mb-2 block'>
          <Label htmlFor='small' value='Titulo de la oferta' />
        </div>
        <TextInput name='title' type='text' sizing='sm' className='mb-4' />
        <div className='mb-2 block'>
          <Label htmlFor='small' value='Descripción' />
        </div>
        <Textarea
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
        <TextInput name='link' type='text' className='mb-4' sizing='sm' />
        <div className='flex justify-between'>
          <div className='mb-2 block'>
            <Label htmlFor='small' value='Precio Antiguo' />
          </div>
          <TextInput name='old_price' type='text' sizing='sm' />
          <div className='mb-2 block'>
            <Label htmlFor='small' value='Precio nuevo' />
          </div>
          <TextInput name='new_price' type='text' sizing='sm' />
        </div>
        <Button type='submit' color='dark'>
          Subir Oferta
        </Button>
      </form>
    </div>
  )
}
