import { CommentInput } from './CommentInput'
import { CommentsList } from './CommentsList'
import { useState } from 'react'

export function Comment({ comment, updateComments }) {
  const [display, setDisplay] = useState(false)
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
      <h4 className='font-bold text-lg'>{comment.username}</h4>
      <p className='text-sm break-words'>{comment.text}</p>
      <button onClick={handleResponseClick}>Responder</button>
      <CommentInput
        addResponse={addResponse}
        id={comment.sale_id}
        parentId={comment.comment_id}
        visible={inputVisible}
      />
      {comment.child_comments.length !== 0 ? (
        <div>
          <button onClick={handleClick}>
            {display ? (
              <span>
                Ocultar respuestas
                <span className='material-symbols-outlined'>expand_less</span>
              </span>
            ) : (
              <span>
                Ver Respuestas
                <span className='material-symbols-outlined'>expand_more</span>
              </span>
            )}
          </button>
          <div className='ml-6'>
            <CommentsList
              updateComments={updateComments}
              display={display}
              className='ml-8'
              comments={comment.child_comments}
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}
