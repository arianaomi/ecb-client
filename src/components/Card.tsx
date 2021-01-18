
import {useState} from 'react'
import { useForm } from "react-hook-form";
import classNames from 'classnames'
import {updateCar} from '../lib/api'

interface Inputs {
  estimateDeliveryDate: string
  personName: string
}

export interface Props {
  description: string
  make: string
  model: string
  estimateDate: string
  id: string
  image: string,
  km: string
  estimateDeliveryDate?: string
  personName?: string
  _id: string
}

export default function Card ({
  _id, 
  description,
  make,
  model,
  estimateDate,
  image = '',
  id,
  km,
  estimateDeliveryDate,
  personName
} : Props) {

  const [isUnderMaintenance, setIsUnderMaintenance] = useState(false)
  const [showForm, setShowForm] = useState (false)

  const { register, handleSubmit, errors } = useForm<Inputs>();

  const onSubmit = async (data: object) => {
    try {
      const response = await updateCar(_id, data)
      if(response){
        setShowForm(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = () => {
    setIsUnderMaintenance(!isUnderMaintenance)
    setShowForm(true)
    if(isUnderMaintenance){
      setShowForm(false)
    }
  }

  const cardClass = classNames({
    'card-car': description,
    'card-active': isUnderMaintenance
  })

  return (
    <div className={cardClass} >
      <img
        src={image}
        alt='car'
        className='img-card'
      />
      <h1>{make}</h1>
      <h2>{model}</h2>
      <p> Descripción: <span>{description}</span></p>
      <p>Km: <span>{km}</span> </p>
      <p>Id: <span>{id}</span> </p>
      <p>Fecha programada: <span>{estimateDate}</span> </p>

      { estimateDeliveryDate &&
        <p>Fecha estimada de entrega: 
          <span>
            {estimateDeliveryDate}
          </span> 
        </p>
      }
      { personName && 
        <p>Encargado:
           <span>
             {personName}
          </span>
        </p>
      }

      {showForm &&
       <form 
          onSubmit={handleSubmit(onSubmit)} 
          className='form-card'
        >
        <label className='label'> 
          Fecha Estimada de entrega 
        </label>
        <input 
          name="estimateDeliveryDate"
          ref={register({ required: true })} 
          type='date' 
          className='input'
        />
        { errors.estimateDeliveryDate && 
          <span className='error'>
            Este campo es necesario
          </span>}
        <label className='label'>
          Persona encargada
        </label>
        <input
          name="personName" 
          ref={register({ required: true })}   
          className='input'
        />
        { errors.personName && 
          <span className='error'>
            Este campo es necesario
          </span>
        }
        <input 
          type="submit"
          value='Guardar' 
          className='btn'/>
       </form>
      }
      <a 
        onClick={handleClick}
        className='btn-card'
      >
        { isUnderMaintenance
          ? 'Quitar mantenimiento' 
          :' Agregar a mantenimiento'
        }
      </a>
    </div>
  )
}
