import { useReducer } from "react";
import { INITIAL_STATE, postReducer } from "./assets/Reducer2";

const State1 = () => {
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

    const handleFetch = () => {
        dispatch({ type: "FETCH_START" });
        
        fetch("https://jsonplaceholder.typicode.com/posts/1/")
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: "FETCH_SUCCESS", payload: data });
            })
            .catch((err) => {
                dispatch({ type: "FETCH_ERROR" });
            });
    };

    return (
        <div>
            <button onClick={handleFetch}>
                {state.loading ? "wait..." : "Fetch the post"}
            </button>
            <p>{state.post?.title}</p>
            <span>{state.error && "something went wrong!"}</span>
        </div>
    );
};

export default State1;
