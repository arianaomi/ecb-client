
import { useForm } from "react-hook-form";

interface Inputs {
  description: string
  make: string
  model: string
  estimateDate: string
  id: string
  image: string,
  km: string
  estimateDeliveryDate: string
  personName: string
}

interface Props {
  callback: (data: object) => Promise<void>
}

export default function FormCar ({callback}: Props) {

  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: object) => callback(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form-card'>
      <label className='label'>
        Imagen
      </label>
      <input
        className='input'
        name='image' 
        ref={register({ required: true })} 
      />
      {errors.image && 
        <span className='error'>Este campo es necesario</span>
      }
      <label className='label'>
        Marca
      </label>
      <input
        className='input'
        name="make" 
        ref={register({ required: true })} 
      />
      {errors.make && 
        <span className='error'>Este campo es necesario</span>
      }
      <label className='label'> 
        Submarca
      </label>
      <input
        className='input'
        name="model" 
        ref={register({ required: true })} 
      />
      {errors.model && 
        <span className='error'>Este campo es necesario</span>
      }
      <label className='label'> 
        id
      </label>
      <input
        className='input'
        name="id" 
        type="number" 
        ref={register({ required: true })}
      />
      {errors.id && 
        <span className='error'>Este campo es necesario</span>
      }
      <label className='label'> 
        Kilometraje actual
      </label>
      <input
      className='input'
      name="km" 
      ref={register({ required: true })} 
      />
      {errors.km &&
        <span className='error'>Este campo es necesario</span>
      }
      <label className='label'> Fecha Programada</label>
      <input
        className='input'
        name="estimateDate" 
        ref={register({ required: true })} 
        type='date' />
      {errors.estimateDate && 
        <span className='error'>Este campo es necesario</span>
      }
      <label className='label'>
        Descripción
      </label>
      <input
        className='input'
        name="description"
        ref={register({ required: true })}
      />
      {errors.description && 
        <span className='error'>Este campo es necesario</span>
      }
      <label className='label'> 
        Fecha Estimada de entrega
      </label>
      <input
        className='input'
        name="estimateDeliveryDate" 
        ref={register} type='date' />
      <label className='label'>
        Persona encargada
      </label>
      <input
        className='input'
        name="personName" 
        ref={register} 
      />
      <input
        className='btn'
        type="submit" 
      />
    </form>
  );
}
