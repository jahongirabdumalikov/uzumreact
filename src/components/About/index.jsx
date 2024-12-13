import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../../axios/axios";

const About = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await apiClient.get(`products/${id}`);
      setProduct(res.data.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <div>
      <main className="max-w-[1140px] m-auto">
        {product ? (
          <div className="product-details">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-md mb-4"
            />
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg mt-4">{product.description}</p>
            <p className="text-xl mt-2">Price: ${product.price}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
};

export default About;
