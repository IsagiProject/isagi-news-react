import { useEffect, useState } from 'react'
import { getFaq } from '../services/faq.js'
import { Accordion } from 'flowbite-react'

export default function Faqs() {
  const [faqs, setFaqs] = useState([])
  useEffect(() => {
    getFaq().then((faqsRes) => {
      setFaqs(faqsRes)
    })
  }, [])
  return (
    <div>
      <h1 className=' text-slate-800 dark:text-slate-300  text-center font-bold my-5 text-4xl'>
        Lista de Preguntas
      </h1>
      <Accordion
        className='w-8/12 mx-auto bg-slate-300 dark:bg-slate-800'
        alwaysOpen
      >
        {faqs.map((faq) => (
          <Accordion.Panel key={faq.question_id}>
            <Accordion.Title>{faq.question}</Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-gray-800 dark:text-gray-400'>
                {faq.answer}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  )
}
