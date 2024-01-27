import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mx-auto mt-7 g-12  h-64 w-2/4 
    "
    >
      <h2 className="text-4xl p-4">404 Error !!!</h2>
      <p className="p-2">Page not found....</p>
      <Link to={"/"}>
        {" "}
        <button className="border px-4 py-2 mt-4 hover:bg-gray-200">
          Go to Home
        </button>{" "}
      </Link>
    </div>
  );
};

export default Error;
