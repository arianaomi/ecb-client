import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import FormCar from '../../components/FormCar'
import { createCar } from '../../lib/api'

export default function Form () {
  const [hasError, setHasError] = useState(false)
  const [message, setMessage] = useState ('')

  const handleForm = async (data: object) => {
    try {
     const response = await createCar(data)
     if (response) {
      setMessage('Guardado exitosamente') 
     } 
    } catch (error) {
      console.log('Error', error)
      setHasError(true)
    }
  }
  return (
    <>
      <Navbar />
      <h1>Form</h1>
      <FormCar callback={handleForm} />
      {message && <span>{message}</span>}
      {hasError && <span>Verificar datos</span>}

    </>
  )
}
