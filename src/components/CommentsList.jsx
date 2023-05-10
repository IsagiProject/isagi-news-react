import { Comment } from './Comment'
export function CommentsList({ comments, display = true, updateComments }) {
  return (
    <div className={`my-2 ${display ? 'block' : 'hidden'} `}>
      {comments &&
        comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <Comment updateComments={updateComments} comment={comment} />
            </div>
          )
        })}
    </div>
  )
}
