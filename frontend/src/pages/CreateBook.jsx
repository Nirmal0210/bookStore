import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateBook = () => {
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  const onChangeData = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setBook({ ...book, [name]: val });
  };

  const sendData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5555/books", book)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="p-2">
      <div className="text-[20px]">CreateBook</div>

      <form className="max-w-sm mx-auto" onSubmit={(e) => sendData(e)}>
        <div className="mb-5">
          <label
            for="book-name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Book Name
          </label>
          <input
            type="text"
            id="book-name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="The History of Tom Jones, a Foundling"
            required
            name="title"
            onChange={onChangeData}
          />
        </div>
        <div className="mb-5">
          <label
            for="author"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Author Name
          </label>
          <input
            type="text"
            id="author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Henry Fielding"
            name="author"
            onChange={onChangeData}
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="publish"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Publish Year
          </label>
          <input
            type="text"
            id="publish"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="E.g. 1749"
            name="publishYear"
            onChange={onChangeData}
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
