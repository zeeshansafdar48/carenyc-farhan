import { useState } from 'react'
import ArrowButton from '@/components/ArrowButton/ArrowButton'
import Container from '@/components/Container/Container'
import Divider from '@/components/Divider/Divider'
import PageTitle from '@/components/PageTitle/PageTitle'
import styles from './Contact.module.scss'

const fields = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
  { name: 'company', label: 'Company', type: 'text', autoComplete: 'organization' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', required: true },
  { name: 'message', label: 'Message', multiline: true, required: true },
]

const emptyForm = Object.fromEntries(fields.map((field) => [field.name, '']))

export default function Contact() {
  const [values, setValues] = useState(emptyForm)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: send `values` to the email service / API once it is chosen.
  }

  return (
    <Container className={styles.contact}>
      <div className={styles.grid}>
        <PageTitle className={styles.title}>Say Hi!</PageTitle>
        <div>
          <h2 className={styles.lead}>Take the first step toward a definitive brand identity</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            {fields.map((field) => {
              const id = `contact-${field.name}`
              const Control = field.multiline ? 'textarea' : 'input'

              return (
                <div key={field.name} className={styles.field}>
                  <label htmlFor={id} className={styles.label}>
                    {field.label}
                  </label>
                  <Control
                    id={id}
                    name={field.name}
                    type={field.multiline ? undefined : field.type}
                    autoComplete={field.autoComplete}
                    required={field.required}
                    value={values[field.name]}
                    onChange={handleChange}
                    className={field.multiline ? `${styles.control} ${styles.textarea}` : styles.control}
                  />
                </div>
              )
            })}
            <ArrowButton className={styles.submit}>Submit</ArrowButton>
          </form>
        </div>
      </div>
      <Divider />
    </Container>
  )
}
