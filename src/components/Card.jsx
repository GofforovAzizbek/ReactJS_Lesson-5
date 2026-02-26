const Card = ({ product }) => {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 p-4">
      <div className="overflow-hidden rounded-xl">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-[170px] object-cover hover:scale-105 transition"
        />
      </div>

      <h3 className="mt-3 text-sm font-medium line-clamp-2">{product.title}</h3>

      <div className="flex justify-between items-center mt-3">
        <span className="text-lg font-bold text-orange-500">
          ${product.price}
        </span>
        <span className="text-xs text-gray-500">⭐ {product.rating}</span>
      </div>
    </div>
  );
};

export default Card;
