import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import config from "../config/axios";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    config.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product)
    return <p className="text-white text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-[1000px] mx-auto py-10 px-4 text-white">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={product.thumbnail} className="rounded-xl w-full" />

        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-400 mt-4">{product.description}</p>

          <p className="text-orange-400 text-2xl font-bold mt-6">
            ${product.price}
          </p>

          <p className="mt-2">⭐ {product.rating}</p>
          <p className="mt-2 text-sm text-gray-400">Brand: {product.brand}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
