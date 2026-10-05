import React from 'react'
import Property from './Property'

function Properties() {
    const properties = [
        { id: 1, name: "House",  sold: false },
        { id: 2, name: "Apartment", sold: true },
        { id: 3, name: "Office", sold: false }
    ]
  return (
      <div>
          {properties.map((property) => (
              <Property key={property.id} name={property.name} sold={property.sold} />
          ))}
    </div>
  )
}

export default Properties