
import React, { useEffect, useState } from 'react'
import { getCars } from '../../lib/api'
//
import Card from '../../components/Card'
import Navbar from '../../components/Navbar'
//
import  { Car } from '../../models/Car'

export default function Home () {
  const [cars, setCars] = useState<Car[]>([])

  const getAllCars = async () => {
    try {
      const carsData = await getCars()
      setCars(carsData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllCars()
  }, [])

  return (
    <div className='home'>
     <Navbar />
      <div className='container'>
        { cars.map( car => (
          <div 
            key={car._id}
            className='card-home'
          >
            <Card
              _id={car._id}
              description={car.description}
              make={car.make}
              model={car.model}
              km={car.km}
              id={car.id}
              image={car.image}
              estimateDate= {car.estimateDate} 
              estimateDeliveryDate={car.estimateDeliveryDate}
              personName={car.personName}
            />
          </div>
        )) 
        }
      </div>
    </div>
  )
}
