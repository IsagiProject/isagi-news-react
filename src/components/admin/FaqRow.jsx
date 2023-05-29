import { Table, TextInput } from 'flowbite-react'
import { useAppSelector } from '../../hooks/store'
import { useState } from 'react'
import { deleteFaq, editFaq } from '../../services/admin'

export default function FaqRow({ item }) {
  const token = useAppSelector((state) => state.token)
  const [edit, setEdit] = useState(false)
  const [question, setQuestion] = useState(item.question)
  const [answer, setAnswer] = useState(item.answer)
  const [questionBack, setQuestionBack] = useState(item.question)
  const [answerBack, setAnswerBack] = useState(item.answer)
  const [deleted, setDeleted] = useState(false)
  const handleEdit = () => {
    editFaq({
      id: item.question_id,
      question,
      answer,
      token
    })
      .then(() => setEdit(false))
      .catch((err) => console.log(err))
  }
  const handleCancel = () => {
    setQuestion(questionBack)
    setAnswer(answerBack)
  }
  const handleEnterEdit = () => {
    setQuestionBack(question)
    setAnswerBack(answer)
  }
  const handleDelete = () => {
    deleteFaq({
      id: item.question_id,
      token
    }).then(() => setDeleted(true))
  }
  const handleEditButton = () => {
    if (edit) {
      handleCancel()
    } else {
      handleEnterEdit()
    }
    setEdit(!edit)
  }
  return (
    <Table.Row
      key={item.id}
      className={`bg-white dark:border-gray-700 dark:bg-gray-800 ${
        deleted ? 'hidden' : ''
      }`}
    >
      <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
        {edit ? (
          <TextInput
            onInput={(e) => setQuestion(e.target.value)}
            value={question}
          />
        ) : (
          question
        )}
      </Table.Cell>
      <Table.Cell>
        {edit ? (
          <TextInput
            onInput={(e) => setAnswer(e.target.value)}
            value={answer}
          />
        ) : (
          answer
        )}
      </Table.Cell>
      <Table.Cell>
        <p
          onClick={handleEditButton}
          className='font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500'
        >
          {edit ? 'Cancel' : 'Edit'}
        </p>
        {edit && (
          <>
            <p
              onClick={handleEdit}
              className='font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500'
            >
              Save
            </p>
            <p
              onClick={handleDelete}
              className='font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500'
            >
              Delete
            </p>
          </>
        )}
      </Table.Cell>
    </Table.Row>
  )
}
