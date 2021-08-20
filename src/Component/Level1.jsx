import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Level2 from './Level2'
const Level1 = React.memo(({ setNumber, number, updateParentNumberFromLevel2, updateParentNumber, children }) => {
    const [count, setCount] = React.useState(0)
    console.log('Level 1:' + count);

    const rnumber = useSelector(state => state.nestedNumber.number1.number)
    const rnumber2 = useSelector(state => state.nestedNumber.number2)
    const dispatch = useDispatch()

    const memoizedCount = React.useCallback(count => setCount(count), [])
    const user = { name: 'brian' }
    console.log(rnumber2);
    return (
        <div className='Level1 d-flex flex-column'>
            {children}
            <table>
                <tr>

                    <td><button onClick={() => setCount(count + 1)} >Add Level 1</button></td>
                    <td><span>{count}</span></td>
                </tr>
                <tr>
                    <td><button onClick={() => updateParentNumber(number, setNumber)}>Update Level 1 parent</button></td>
                    <td><span>Number From parent level 1 {number.level1.number}</span></td>
                </tr>
                <tr>
                    <td><button onClick={() => dispatch({ type: 'INC1' })}>Update redux state</button></td>
                    <td>{rnumber}</td>
                </tr>
            </table>
            <Level2 cc={count} user={user} setParentCount={() => memoizedCount(count + 1)} />
        </div>
    )
})

export default React.memo(Level1, () => { return true })