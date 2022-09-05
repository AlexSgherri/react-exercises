import { useState } from "react";

export function useClickCounter (initialValue = 0){

    const [count, setCount] = useState(initialValue);
    
    function incrementCounterHandler() {
        setCount((counter) => counter + 1);
    }

    function decrementCounterHandler() {
        setCount((counter) => counter -1);
    }

    function resetCounterHandler(){
        setCount(()=> initialValue)
    }
    
    return {
        count : count,
        incrementValue: incrementCounterHandler,
        decerementValue: decrementCounterHandler,
        reset : resetCounterHandler,
    }
}