// Pagination.js


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map(i => i + 1);

    return (
        <div className="flex justify-center mt-6">
            <ul className="flex space-x-2">
                {pages.map(page => (
                    <li key={page}>
                        <button
                            onClick={() => onPageChange(page)}
                            className={`px-4 py-2 ${page === currentPage ? 'bg-green-600 text-white' : 'bg-gray-200'} rounded`}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
