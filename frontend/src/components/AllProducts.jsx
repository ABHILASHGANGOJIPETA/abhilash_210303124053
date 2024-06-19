import React, { useEffect, useState } from "react"

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchProducts = async () => {
      try {
        const category = 'Laptop'; 
        const n = 10; 
        const minPrice = 0; 
        const maxPrice = 1000; 
  
        const response = await fetch(`http://localhost:3000/categories/${category}/products?n=${n}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div>
        <h1>Products</h1>
        <div>
          {products.map((product) => {
            // <li key={product.id}>{product.name} - ${product.price}</li>
            const {productName, price, rating, discount, availability} = product;

            <>
            <h1>{productName}</h1>
            <p>{price}</p>
            <p>{rating}</p>
            <p>{discount}</p>
            <p>{availability}</p>
            </>

})}
        </div>
      </div>
    );
  };
  
  export default AllProducts;