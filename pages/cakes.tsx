import React from "react";
import { buyCake, addCake } from "../redux";
import { useSelector, useDispatch } from "react-redux";

function CakeContainer(props) {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <br />
      <div> ***Redux without Hoooks***</div>
      <h1>Number of cakes - {numberOfCakes}</h1>
      <button disabled={numberOfCakes <= 0} onClick={() => dispatch(buyCake())}>
        Buy Cake
      </button>
      <button onClick={() => dispatch(addCake())}>Add Cake</button>
      <hr />
    </div>
  );
}

export default CakeContainer;
