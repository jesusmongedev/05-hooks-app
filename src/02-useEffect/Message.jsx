import { useEffect } from 'react'

function Message () {
  useEffect(() => {
    console.log('Mounted')

    return () => {
      console.log('UnMounted')
    }
  }, [])

  return (
    <>
      Usuario existente
    </>
  )
}

export default Message
