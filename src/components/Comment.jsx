export function Comment({ comment }) {
  return (
    <div className='pb-4'>
      <h4 className='font-bold text-lg'>{comment.username}</h4>
      <p className='text-sm break-words'>{comment.text}</p>
    </div>
  )
}
