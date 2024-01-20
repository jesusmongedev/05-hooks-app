import { useEffect, useState } from 'react'
import Message from './Message'

const defaultValues = {
  username: 'darkar',
  email: 'test@test.com'
}

function SimpleForm () {
  const [formState, setFormState] = useState(defaultValues)
  const { username, email } = formState
  const onChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  useEffect(() => {
    // console.log('useEffect called')
  }, [])

  useEffect(() => {
    // console.log('formState changed')
  }, [formState])

  useEffect(() => {
    // console.log('email changed')
  }, [email])

  return (
    <form>
      <h3>Form</h3>
      <hr />
      <input
        type='text'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='jmonge@gmail.com'
        name='email'
        value={email}
        onChange={onChange}
      />
      { (username === 'darkar1') && <Message/> }
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default SimpleForm
