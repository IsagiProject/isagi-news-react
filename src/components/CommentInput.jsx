import { useEffect, useState, useRef } from 'react'
import { createPicker } from 'picmo'
import { sendComment } from '../services/sales'
import { useAppSelector } from '../hooks/store'
import { useUserData } from '../hooks/useUserData'
import { MdOutlineAddReaction, MdSend } from 'react-icons/md'

export function CommentInput({
  setData,
  data,
  id,
  visible,
  parentId,
  addResponse
}) {
  const token = useAppSelector((state) => state.token)
  const { username } = useUserData(token)
  const emojiRef = useRef()
  const textRef = useRef()
  const OnInput = () => {
    const tx = textRef.current
    tx.style.height = 0
    tx.style.height = tx.scrollHeight + 'px'
  }

  useEffect(() => {
    OnInput()
    const rootElement = emojiRef.current
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
    picker.addEventListener('emoji:select', (event) => {
      textRef.current.value += event.emoji
    })

    textRef.current.setAttribute(
      'style',
      'height:' + textRef.current.scrollHeight + 'px;overflow-y:hidden;'
    )
  }, [])
  useEffect(() => {
    textRef.current.setAttribute(
      'style',
      'height:' + textRef.current.scrollHeight + 'px;overflow-y:hidden;'
    )
  }, [visible])
  const [display, setDisplay] = useState(false)
  const handleEmojiClick = () => {
    setDisplay(!display)
  }
  const handleSubmitComment = async () => {
    console.log('Comentario enviado')
    const comment = textRef.current.value
    textRef.current.value = ''
    const { commentId } = await sendComment({
      saleId: id,
      comment,
      token,
      parentId
    })
    console.log(commentId)
    addResponse({
      username: '@' + username,
      text: comment,
      sale_id: id,
      parent_id: parentId,
      comment_id: commentId,
      child_comments: []
    })
  }
  return (
    <div className={`${visible ? 'block' : 'hidden'} flex flex-row pb-4`}>
      <textarea
        ref={textRef}
        onInput={OnInput}
        placeholder='Escribe tu comentario:'
        className='bg-transparent border-solid border-x-0 border-t-0 p-0 border-white border-b-2 outline-none resize-none focus:border-white focus:ring-0 overflow-hidden h-0 text-sm w-11/12'
      />
      <div className='relative inline'>
        <button id='botonemoji' className='mx-3' onClick={handleEmojiClick}>
          <MdOutlineAddReaction />
        </button>

        <div
          ref={emojiRef}
          className={`absolute z-10 ml-30 h-10 w-10 right-4 ${
            display ? '' : 'hidden'
          }`}
        />
      </div>

      <button onClick={handleSubmitComment}>
        <MdSend />
      </button>
    </div>
  )
}
