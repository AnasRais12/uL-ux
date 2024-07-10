import React, { useState } from 'react'

const Add = () => {
    const [cart, setCart] = useState([]);

    const products = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 15 },
      // Add more products as needed
    ];
  
    const addToCart = (productId) => {
      if (!cart.find(item => item.id === productId)) {
        const productToAdd = products.find(product => product.id === productId);
        if (productToAdd) {
          setCart([...cart, { ...productToAdd, quantity: 1 }]);
        }
      }
    };
  
    const removeFromCart = (productId) => {
      setCart(cart.filter(item => item.id !== productId));
    };
  
    const updateQuantity = (productId, newQuantity) => {
      setCart(cart.map(item => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      }));
    };
  return (
    <>
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
      
      <h2>Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> : (
        <div>
          {cart.map(item => (
            <div key={item.id} style={{ marginBottom: '10px' }}>
              <span>{item.name} - ${item.price} x </span>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                style={{ width: '50px', marginRight: '10px' }}
              />
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
        </div>
      )}
    </div>
    </>
  )
}

export default Add