import { useCallback, useState } from "react";

export function useClickCounter (initialValue = 0){

    const [count, setCount] = useState(initialValue);
    
    const incrementCounterHandler = useCallback(function incrementCounterHandler() {
        setCount((counter) => counter + 1);
    }, [])

    const decrementCounterHandler = useCallback(function decrementCounterHandler() {
        setCount((counter) => counter -1);
    }, [])

    const resetCounterHandler = useCallback(function resetCounterHandler(){
        setCount(()=> initialValue)
    }, [initialValue])
    
    return {
        count : count,
        incrementValue: incrementCounterHandler,
        decerementValue: decrementCounterHandler,
        reset : resetCounterHandler,
    }
}