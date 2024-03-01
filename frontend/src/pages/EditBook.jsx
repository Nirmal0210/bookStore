import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishYear: "",
  });

  const getData = (id) => {
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setBook(res.data.data);
      })
      .catch((error) => console.log(error));
  };
  const sendData = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5555/books/${id}`, book)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const onChangeData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setBook({ ...book, [name]: value });
    console.log(e.target.value, e.target.name);
  };
  useEffect(() => {
    getData(id);
  }, []);

  return (
    <div className="p-2">
      <div className="text-[20px]">Edit Book</div>

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
            value={book.title || ""}
            onChange={(e) => onChangeData(e)}
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
            value={book.author || ""}
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
            value={book.publishYear || ""}
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

export default EditBook;
