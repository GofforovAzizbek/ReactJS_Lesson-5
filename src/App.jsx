// import React, { useEffect, useState } from "react";
// import api from "./config/axios";
// import Card from "./components/Card";
// import Pagination from "./components/Pagination";

// const LIMIT = 6;

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     async function fetchProducts() {
//       const res = await api.get("/products", {
//         params: {
//           limit: LIMIT,
//           skip: (page - 1) * LIMIT,
//         },
//       });

//       setProducts(res.data.products);
//       setTotal(res.data.total);
//     }

//     fetchProducts();
//   }, [page]);

//   return (
//     <section className="min-h-screen bg-gray-800 py-10">
//       <h1 className="text-3xl font-bold text-center mb-10 text-amber-50">
//         Internet Magazin
//       </h1>

//       <div className="grid grid-cols-3 gap-6 max-w-[1100px] mx-auto">
//         {products.map((product) => (
//           <Card key={product.id} product={product} />
//         ))}
//       </div>

//       <Pagination page={page} setPage={setPage} total={total} limit={LIMIT} />
//     </section>
//   );
// };

// export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:id", element: <Product /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
