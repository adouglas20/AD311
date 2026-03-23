import React from 'react';

const ProductList = () => {

  const products = [
    { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
    { id: 2, name: "Smartphone", description: "Latest model with a stunning display.", price: 800 },
    { id: 3, name: "Headphones", description: "Noise-canceling over-ear headphones.", price: 250 },
    { id: 4, name: "Monitor", description: "4K Ultra HD monitor for creative work.", price: 450 },
    { id: 5, name: "Keyboard", description: 'Clickity clackotron 9000', price: 5000}
  ];

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    width: '250px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    textAlign: 'left'
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px'
  };

  return (
    <div style={containerStyle}>
      {/* 2. Use map() to iterate over the products array */}
      {products.map((product) => (
        <div key={product.id} style={cardStyle}>
          <h3 style={{ marginTop: 0, color: '#1eff25' }}>{product.name}</h3>
          <p style={{ fontSize: '0.9rem', color: '#00d9ff' }}>{product.description}</p>
          <p style={{ fontWeight: 'bold', color: '#27ae60' }}>
            Price: ${product.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;