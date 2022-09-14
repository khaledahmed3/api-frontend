import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import moment from "moment";
import _ from "lodash";

function History() {
  let items = [];

  function getData() {
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(localStorage.key(i)));
      items.push({
        Test: key,
        Result: value,
      });
      items = _.orderBy(
        items,
        (o) => {
          return moment(o.Result.TimeExecuted, "DD-MM-YYYY h:mm:ss a").format(
            "DD-MM-YYYY h:mm:ss a"
          );
        },
        ["desc"]
      );
      console.log(items);
    }
  }

  return (
    <div className="container bg-white mx-auto w-full h-full">
      <div className="text-center m-5 text-xl">
        <Link to="/">
          <button className="bg-pink-400 text-white py-1 px-2 rounded-full hover:bg-pink-500 text-align-right">
            Go To Main Page!
          </button>
        </Link>
      </div>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-neutral-900 h-full border"
          style={{ left: 0 + "%" }}
        ></div>

        <div className="mb-8  justify-between items-center w-full right-timeline m-1 py-1 px-2">
          <div className="text-xl leading-snug tracking-wide text-gray-900 text-opacity-100 justify-between items-center">
            <h1 className="mx-auto text-xl text-gray-900 text-center font-bold justify-between items-center">
              Test Results {getData()}
            </h1>
          </div>
          {items.map((item) => (
            <div className="border-2 p-7 border-pink-500 text-gray-600 rounded-md bg-pink-100 hover:bg-pink-300 cursor-pointer h-full m-1 py-1 px-2">
              <h3 className="mb-3 font-bold text-gray-800 text-xl text-center">
                Test Name: {item.Test}
              </h3>
              <div className="block">
                <p className="capitalize text-lg leading-snug tracking-wide text-gray-900 text-opacity-100 m-1 px-9 text-center font-semibold">
                  Result: {item.Result.Result}
                </p>
                <p className="capitalize text-lg leading-snug tracking-wide text-gray-900 text-opacity-100 py-3 px-9 text-center font-semibold">
                  Time Executed:{" "}
                  {moment(
                    item.Result.TimeExecuted,
                    "DD-MM-YYYY h:mm:ss a"
                  ).format("DD-MM-YYYY h:mm:ss a")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
