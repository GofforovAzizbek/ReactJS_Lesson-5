// const Card = ({ product }) => {
//   return (
//     <div className="bg-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 p-4">
//       <div className="overflow-hidden rounded-xl">
//         <img
//           src={product.thumbnail}
//           alt={product.title}
//           className="w-full h-[170px] object-cover hover:scale-105 transition"
//         />
//       </div>

//       <h3 className="mt-3 text-sm font-medium line-clamp-2">{product.title}</h3>

//       <div className="flex justify-between items-center mt-3">
//         <span className="text-lg font-bold text-orange-500">
//           ${product.price}
//         </span>
//         <span className="text-xs text-gray-500">⭐ {product.rating}</span>
//       </div>
//     </div>
//   );
// };

// export default Card;

import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div
        className="bg-gray-800 rounded-xl shadow
        hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-44 object-cover rounded-t-xl"
        />

        <div className="p-4">
          <h3 className="text-white font-semibold line-clamp-1">
            {product.title}
          </h3>

          <p className="text-gray-400 text-sm line-clamp-2 mt-1">
            {product.description}
          </p>

          <div className="flex justify-between items-center mt-3">
            <span className="text-orange-400 font-bold">${product.price}</span>
            <span className="text-gray-400 text-sm">⭐ {product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
