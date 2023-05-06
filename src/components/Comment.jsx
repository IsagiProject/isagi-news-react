import { MdExpandLess, MdExpandMore } from 'react-icons/md'
import { useAppSelector } from '../hooks/store.js'
import { CommentInput } from './CommentInput'
import { CommentsList } from './CommentsList'
import { useState } from 'react'

export function Comment({ comment, updateComments }) {
  const [display, setDisplay] = useState(false)
  const token = useAppSelector((state) => state.token)

  const handleClick = () => {
    setDisplay(!display)
  }
  const handleResponseClick = () => {
    setInputVisible(!inputVisible)
  }
  const [inputVisible, setInputVisible] = useState(false)
  const addResponse = (response) => {
    console.log(response)
    comment.child_comments.push(response)
    updateComments()
  }
  return (
    <div className='my-2'>
      <h4 className='font-bold text-sm'>{comment.username}</h4>
      <p className='text-base break-words'>{comment.text}</p>
      <div className='flex items-center'>
        {token && <button onClick={handleResponseClick} className='text-sm mr-6'>
          Responder
        </button>}
        {comment.child_comments.length !== 0 ? (
          <button className='text-sm' onClick={handleClick}>
            {display ? (
              <div className='flex items-center'>
                <MdExpandLess />
                <span>Ocultar respuestas</span>
              </div>
            ) : (
              <div className='flex items-center'>
                <MdExpandMore />
                <span>Ver Respuestas</span>
              </div>
            )}
          </button>
        ) : null}
      </div>
      <CommentInput
        addResponse={addResponse}
        id={comment.sale_id}
        parentId={comment.comment_id}
        visible={inputVisible}
      />
      <div className='ml-6'>
        <CommentsList
          updateComments={updateComments}
          display={display}
          className='ml-8'
          comments={comment.child_comments}
        />
      </div>
    </div>
  )
}
