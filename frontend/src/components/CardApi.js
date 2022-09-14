import { useState, useEffect } from "react";
import moment from "moment";

const CardApi = ({ api }) => {
  const renderDetail = (text, field) => (
    <p>
      {text}: <span className="font-semibold">{api[field] || "-"}</span>
    </p>
  );

  const [postResult, setPostResult] = useState();

  const getRoute = async (urlData) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };

    return fetch(`http://localhost:8001/api/v1/tests${urlData}`, requestOptions)
      .then((response) => response.json())
      .then((data) => data);
  };

  useEffect(() => {}, [postResult]);

  return (
    <a href={api.Link} target="_blank" rel="noreferrer">
      <div className="border-2 p-7 border-pink-500 text-gray-600 rounded-md bg-pink-100 hover:bg-pink-300 cursor-pointer h-full ">
        {renderDetail("Category", "category")}
        {renderDetail("Description", "description")}
        Tests:{" "}
        {api.tests.map((test) => (
          <button
            onClick={async () => {
              const data = await getRoute(test.route);
              setPostResult(data.result);
              const testJson = {
                Result: data.result,
                TimeExecuted: moment().format("DD-MM-YYYY h:mm:ss a"),
              };
              localStorage.setItem(test.name, JSON.stringify(testJson));
            }}
            className="bg-pink-400 block text-white m-1 py-1 px-2 rounded-3xl hover:bg-pink-500"
          >
            - {test.name}
          </button>
        ))}
      </div>
    </a>
  );
};

export default CardApi;
