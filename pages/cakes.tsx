import React from "react";
import { buyCake, addCake } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

function CakeContainer(props) {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl my-2 text-center">
          <Link href="/">Home</Link>
        </h1>
        <div className="text-3xl font-semibold">
          {" "}
          Fetched Data with React-redux Hooks
        </div>

        <h1 className="text-2xl">Number of cakes - {numberOfCakes}</h1>
        <div className="flex my-5">
          <button
            className="btn btn-danger"
            disabled={numberOfCakes <= 0}
            onClick={() => dispatch(buyCake())}
          >
            Buy Cake
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(addCake())}
          >
            Add Cake
          </button>
        </div>
      </div>
    </div>
  );
}

export default CakeContainer;
