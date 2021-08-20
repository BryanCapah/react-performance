import React from 'react'
const Level4 = (props) => {
    const [count, setCount] = React.useState(0)
    console.log('Level 4:' + count);
    return (
        <div className='Level4'>
            {props.children}
            <button onClick={() => setCount(count + 1)} >Add Level 4</button>
            <span>{count}</span>
        </div>
    )
}

export default Level4