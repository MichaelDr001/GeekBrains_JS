import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Count = () => {
    const  count = useSelector(state => state.count)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch({type: 'reset'})}>⟲</button>
            {count}
            <button onClick={() => dispatch({type: 'plus'})}>+</button>
            <button onClick={() => dispatch({type: 'minus'})}>-</button>
        </div>
    )
}

export default Count