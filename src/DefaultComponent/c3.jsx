import { useState, memo } from "react"

const C2 = (props) => {
    const [state, setState] = useState(1)

    function addValue() {
        setState(state => state + 1)
    }
    console.log('Child 2 rendered')
    return (
        <>
            <div>Child 2</div>
            <button onClick={props.addParentValue}>add parent value</button>
            <button onClick={addValue}>Add Value</button>
            <div>{'child 2 state:' + state}</div>
        </>
    )
}

export default memo(C2)