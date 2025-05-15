import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Action";

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.count)
    return (
        <div>
            <h1>Couter : {count}</h1>
            <button onClick={() => (dispatch(decrement()))} >decrement</button>
            <button onClick={() => (dispatch(increment()))} >increment</button>
        </div>
    )
}

export default Counter;