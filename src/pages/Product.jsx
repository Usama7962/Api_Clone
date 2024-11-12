import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]); // To store fetched data
  const [loading, setLoading] = useState(false); // To manage loading state

  // Function to fetch data from API
  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data); // Correct way to access the data
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <button
        onClick={getData}
        className={`button ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Get Data'}
      </button>

      <div className="product-grid">
        {loading ? (
          <p className="loading-text">Loading...</p>
        ) : (
          data.map((product) => (
            <div key={product.id} className="product-card">
              <img
                className="product-image"
                src={product.image}
                alt={product.title}
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;

