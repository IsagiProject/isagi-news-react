import { useEffect, useState } from 'react'
import { createPicker } from 'picmo'
import { Comment } from './Comment'
import { Spinner } from 'flowbite-react'
import { useParams } from 'react-router-dom'
import { sendComment, getComments } from '../services/sales'

export function NewsComments() {
  const { id } = useParams()
  const [data, setData] = useState()
  const [spinner, setSpinner] = useState(true)
  useEffect(() => {
    getComments({ newsId: id }).then((comments) => {
      setData(comments)
      setSpinner(false)
    })
  }, [])
  const OnInput = () => {
    const tx = document.getElementsByTagName('textarea')[0]
    tx.style.height = 0
    tx.style.height = tx.scrollHeight + 'px'
  }

  useEffect(() => {
    OnInput()
    const rootElement = document.querySelector('#pickerContainer')
    function showPicker() {
      document.querySelector('#pickerContainer').classList.toggle('visible')
    }
    // Create the picker
    const picker = createPicker({
      rootElement,
      showPreview: false,
      emojisPerRow: 7,
      visibleRows: 3,
      categories: [
        'custom',
        'smileys-emotion',
        'people-body',
        'animals-nature',
        'food-drink',
        'travel-places',
        'activities',
        'objects',
        'symbols'
      ]
    })

    // The picker emits an event when an emoji is selected. Do with it as you will!
    const textArea = document.querySelector('textarea')
    picker.addEventListener('emoji:select', (event) => {
      console.log('Emoji selected:', event.emoji)
      textArea.value += event.emoji
    })
    document.getElementById('botonemoji').addEventListener('click', showPicker)
    const tx = document.getElementsByTagName('textarea')
    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute(
        'style',
        'height:' + tx[i].scrollHeight + 'px;overflow-y:hidden;'
      )
      tx[i].addEventListener('input', OnInput, false)
    }
  }, [])
  const handleEmojiClick = () => {
    setDisplay(!display)
  }
  const handleSubmitComment = () => {
    console.log('Comentario enviado')
    const comment = document.getElementsByTagName('textarea')[0].value
    document.getElementsByTagName('textarea')[0].value = ''
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJuYW1lIjoiVEVTVCIsImVtYWlsIjoidGVzdEBnYWxkZXIzMTUuZ2EiLCJpYXQiOjE2ODAwMjIzMTEsImV4cCI6MTcxMTU3OTkxMX0.Uhm6gER92EWcgqbY-OE1GnEZnhkz5D48ilJN_RoGGI8'
    sendComment({ newsId: id, comment, token })
    setData([{ username: '@imanol', text: comment }, ...data])
  }
  const [display, setDisplay] = useState(false)

  return (
    <div className='bg-slate-300 dark:bg-slate-800 p-8 mx-auto mb-12 min-h-[5rem] w-5/6  justify-start rounded-md flex object-cover text-slate-800 dark:text-slate-300 text-xl flex-col'>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'
      />
      <h2 className='pb-6 font-bold'>Comentarios:</h2>
      <div className='flex flex-row pb-4'>
        <textarea
          onInput={OnInput}
          placeholder='Escribe tu comentario:'
          className='bg-transparent border-solid border-white border-b-2 outline-none resize-none overflow-hidden h-0 text-sm w-11/12'
        />
        <div className='relative inline'>
          <button id='botonemoji' onClick={handleEmojiClick}>
            <span className='material-symbols-outlined px-4'>add_reaction</span>
          </button>

          <div
            id='pickerContainer'
            className={`absolute z-10 ml-30 h-10 w-10 right-4 ${
              display ? '' : 'hidden'
            }`}
          />
        </div>
        <button onClick={handleSubmitComment}>
          <span className='material-symbols-outlined'>send</span>
        </button>
      </div>
      <div>
        {spinner && <Spinner aria-label='Default status example' />}
        {data &&
          data.map((item) => <Comment comment={item} key={item.comment_id} />)}
      </div>
    </div>
  )
}
