import { useEffect, useState } from 'react'

function Message () {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0
  })
  useEffect(() => {
    const mouseMove = (e) => {
      const { x, y } = e
      setCoords({ x, y })
    }
    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      console.log('UnMounted')
    }
  }, [])

  return (
    <>
      Usuario existente
      {
        JSON.stringify(coords, null, 2)
      }
    </>
  )
}

export default Message
