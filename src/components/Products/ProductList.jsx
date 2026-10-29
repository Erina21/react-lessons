import { useState } from 'react'
import './products.css'

function ProductList() {
    const [name, setName] = useState('')
    const [price, setPrice] =useState('')
    const [category, setCategory] =useState('')
    const [quantity, setQuantity] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')
    const [products, setProducts] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        console.log('test')
        if(name.trim() === '' || price.trim() === '' || category.trim() === '' || quantity.trim() === '' || description.trim() === '') {
            setError('Please fill in all fields')
            return
        }
        const newProduct = {
            name,
            price,
            category,
            quantity,
            description
        }
        setProducts([...products, newProduct])
        // Clear the form fields
        setName('')
        setPrice('')
        setCategory('')
        setQuantity('')
        setDescription('')
    }
  return (
      <div className='app'>
          <header className='header'>
              <h1>Manage Products</h1>

          </header>
          <main className="container">
              <div className='stats'>
                  <div className='stats-card'>
                      <p>Total Products</p>
                      <h2>34</h2>
                  </div>
              </div>
          </main>
          <div className='card'>
              <h2>
                  Add New Product
              </h2>
              <form onSubmit={handleSubmit}>
                  <div className='form-grid'>
                      <div className='form-group'>
                          <label htmlFor='name'>ProductName</label>
                          <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                      </div>
                      <div className='form-group'>
                          <label htmlFor='cat'>Category</label>
                          <select name="" id="cat" value={category} onChange={(e) => setCategory(e.target.value)}>
                              <option value="">Select Category</option>
                              <option value="Electronics">Electronics</option>
                              <option value="Clothing">Clothing</option>
                              <option value="Home">Home</option>
                          </select>
                      </div>
                      <div className='form-group'>
                          <label htmlFor='price'>Price</label>
                          <input type='number' id='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                      </div>
                      <div className='form-group'>
                          <label htmlFor='quantity'>Quantity</label>
                          <input type='number' id='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                      </div>
                      <div className='form-group'>
                          <label htmlFor='description'>Description</label>
                          <textarea id='description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                      </div>
                      
                  </div>
                  <button type='submit' className="add-btn">
                      Add Product
                  </button>
              </form>
          </div>
          <div className='card'>
              <div className='products'>
                  {
                      products.map((product) => (
                          <div className='product-card' key={product.id}>
                              <h3>{product.name}</h3>
                              <p>{product.description}</p>
                              <p>Price: ${product.price.toFixed(2)}</p>
                              <p>Quantity: {product.quantity}</p>
                          </div>
                      ))
                  }
                  
              </div>
          </div>
      </div>

  )
}

export default ProductList