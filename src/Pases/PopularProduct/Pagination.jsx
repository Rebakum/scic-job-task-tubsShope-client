
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [5];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center py-4 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 bg-red-500 text-white rounded-l-md ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
      >
        <FaChevronLeft />
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 border border-gray-300 ${
            currentPage === page ? 'bg-green-700 text-white' : 'bg-white text-green-400'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 bg-red-500 text-white rounded-r-md ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
      >
        Next
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
