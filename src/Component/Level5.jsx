import React from 'react'
const Level5 = (props) => {
    const [count, setCount] = React.useState(0)
    console.log('Level 5:' + count);
    return (
        <div className='Level5'>
            {props.children}
            <button onClick={() => setCount(count + 1)} >Add Level 5</button>
            <span>{count}</span>
        </div>
    )
}

export default Level5