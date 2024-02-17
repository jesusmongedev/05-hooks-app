import useForm from '../hooks/useForm'

const defaultValues = {
  username: '',
  email: '',
  password: ''
}

function FormWithHook () {
  const { onChange, username, email, password, onResetForm } = useForm({ defaultValues })
  // const { username, email, password } = formState

  return (
    <form>
      <h3>Form with Custom Hook</h3>
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
      <input
        type='password'
        placeholder='******'
        name='password'
        value={password}
        onChange={onChange}
      />
      <button type='button' className='secondary' onClick={onResetForm} >Reset</button>
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default FormWithHook
