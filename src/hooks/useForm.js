import { useState } from 'react'

function useForm ({
  defaultValues = {}
}) {
  const [formState, setFormState] = useState(defaultValues)

  const onChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => setFormState(defaultValues)

  return {
    ...formState,
    formState,
    onChange,
    onResetForm
  }
}

export default useForm
