import { useCallback, useState, useEffect } from "react"
import Child1 from './c2'

const P1 = () => {
    const [state, setState] = useState(1)
    const [state2, setState2] = useState(1)

    useEffect(_ => {
        console.log('rendered many time');
    }, [state])

    useEffect(_ => {
        console.log('rendered once');
    }, [])

    function addValue() {
        setState(state => state + 1)
        setState2(state => state + 1)

    }

    function addValue2() {
        setState2(state => state + 1)
    }

    const memoizedAddValue = useCallback(_ => addValue(), [])
    const memoizedAddValue2 = useCallback(_ => addValue2(), [])
    console.log('parent rendered')

    return (
        <>
            <div>Parent</div>
            <button onClick={addValue}>Add Value</button>
            <button onClick={addValue2}>Add Value 2</button>
            <div>{'parent state:' + state}</div>
            <div>{'parent state2:' + state2}</div>

            <Child1 addParentValue={memoizedAddValue} addParentValue2={memoizedAddValue2} />
        </>
    )
}

export default P1