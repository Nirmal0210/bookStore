import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  addCircleOutline,
  createOutline,
  informationCircleOutline,
  trashOutline,
} from "ionicons/icons";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books/")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-2">
      {" "}
      <div className="flex justify-between items-center">
        <div className="text-black text-lg">Booklist</div>
        <div>
          <Link className="text-black" to={"/books/create"}>
            <IonIcon size="large" icon={addCircleOutline}></IonIcon>
          </Link>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    No.
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Book Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Author
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Publish Year
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {books &&
                  books.map((item, index) => (
                    <tr
                      key={item._id}
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index + 1}
                      </td>
                      <td class="px-6 py-4">{item ? item.title : "No data"}</td>
                      <td class="px-6 py-4">{item && item.author}</td>
                      <td class="px-6 py-4">{item && item.publishYear}</td>
                      <td class="px-6 py-4">
                        <div className="flex justify-stretch items-center">
                          <Link
                            className="text-black "
                            to={`/books/edit/${item && item._id}`}
                          >
                            <IonIcon
                              size="large"
                              icon={createOutline}
                            ></IonIcon>
                          </Link>
                          <Link
                            className="text-black"
                            to={`/books/details/${item && item._id}`}
                          >
                            <IonIcon
                              size="large"
                              icon={informationCircleOutline}
                            ></IonIcon>
                          </Link>
                          <Link
                            className="text-black"
                            to={`/books/delete/${item && item._id}`}
                          >
                            <IonIcon size="large" icon={trashOutline}></IonIcon>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
