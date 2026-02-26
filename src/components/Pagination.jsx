import right from "../images/right.svg";
import left from "../images/left.svg";

const Pagination = ({ page, setPage, total, limit }) => {
  const totalPages = Math.ceil(total / limit);
  const visiblePages = 5;

  let start = 1;

  if (page > visiblePages) {
    start = page - visiblePages + 1;
  }

  let end = Math.min(start + visiblePages - 1, totalPages);

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      {/* PREV */}
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-300 disabled:opacity-40"
      >
        <img src={right} alt="" />
      </button>

      {/* PAGES */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`w-10 h-10 rounded-full font-medium transition
            ${
              p === page
                ? "bg-gray-600 text-white scale-110 shadow-lg"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          {p}
        </button>
      ))}

      {/* NEXT */}
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-300 disabled:opacity-40"
      >
        <img src={left} alt="" />
        {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}
      </button>
    </div>
  );
};

export default Pagination;
