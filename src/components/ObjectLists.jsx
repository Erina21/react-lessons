import React from 'react'

function ObjectLists() {
    const products = [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Smartphone", price: 800 },
        { id: 3, name: "Tablet", price: 500 }
    ]

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    )
}

export default ObjectLists