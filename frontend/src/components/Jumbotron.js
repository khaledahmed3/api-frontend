import { useState } from "react";
import { Link } from "react-router-dom";

const Jumbotron = ({ fetchData }) => {
  const [value, setValue] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      fetchData({ params: { category: value } });
      setValue("");
    }
  };
  const handleButtonSearch = () => {
    if (value.length) {
      fetchData({ params: { category: value } });
      setValue("");
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center py-20 px-2">
      <div>
        <Link to="/history">
          <button className="bg-pink-400 text-white m-1 py-1 px-2 text-xl rounded-full hover:bg-pink-500 text-align-right">
            Go To History Page!
          </button>
        </Link>
      </div>
      <h3 className="text-2xl text-white font-semibold">Search Tests</h3>
      <div className="flex items-center mt-6 max-w-md mx-auto bg-white rounded-md">
        <input
          type="search"
          className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none"
          placeholder="Random test"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleEnter}
        />
        <button
          className="bg-blue-500 w-20 h-12 text-white rounded-r-md flex items-center justify-center"
          onClick={handleButtonSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
