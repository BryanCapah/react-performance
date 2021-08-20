import { useState, memo } from "react"
import Child3 from './c3'

const C1 = (props) => {
    const [state, setState] = useState(1)

    function addValue() {
        setState(state => state + 1)
    }
    console.log('Child 1 rendered')
    return (
        <>
            <div>Chiild 1</div>
            <button onClick={props.addParentValue}>add parent value</button>
            <button onClick={addValue}>Add Value</button>
            <div>{'Chiild 1 state:' + state}</div>
            <Child3 />
        </>
    )
}

export default memo(C1)