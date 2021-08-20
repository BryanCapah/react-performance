import React from 'react'
const Level3 = (props) => {
    const [count, setCount] = React.useState(0)
    console.log('Level 3:' + count);
    return (
        <div className='Level3'>
            {props.children}
            <button onClick={() => setCount(count + 1)} >Add Level 3</button>
            <span>{count}</span>
        </div>
    )
}

export default Level3