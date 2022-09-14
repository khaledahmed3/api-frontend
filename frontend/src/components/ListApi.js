import CardApi from "./CardApi.js";

export const ListApi = ({ response, loading }) => {
  if (loading) {
    return (
      <div className="mt-2 grid md:grid-cols-3 gap-4 animate-pulse">
        {[...Array(3).keys()].map((num) => (
          <div
            key={num}
            className="h-28 w-full bg-gray-300 m-1 rounded-sm"
          ></div>
        ))}
      </div>
    );
  }

  if (!response.tests) {
    return (
      <p className="text-center text-gray-500 text-2xl mt-20">
        Something went wrong :(
      </p>
    );
  }

  return (
    <div className="mx-2 mb-10">
      <h3 className="font-semibold text-xl text-slate-600 text-center my-5">
        List Of Tests
      </h3>
      <div className="grid gap-4 md:grid-cols-3">
        {response.tests &&
          response.tests.map((api, index) => <CardApi api={api} key={index} />)}
      </div>
    </div>
  );
};

export default ListApi;
