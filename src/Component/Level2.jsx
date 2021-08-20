import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const countNumber = (number) => {
    setTimeout(() => {
        console.log('from function count number');
        return number + 1
    }, 2000);
}

const freeze = (ms) => {
    const date = Date.now()
    let currentDate = null
    do {
        currentDate = Date.now()
    } while (currentDate - date < ms)
}

const voidFunction = (number) => console.log('void', number);
const Level2 = ({ updateParentNumber, number, children, cc, setParentCount, user }) => {
    const [count, setCount] = React.useState(0)
    const rnumber = useSelector(state => state.nestedNumber.number1.level2.number)
    const rnumbera = useSelector(state => state.nestedNumber)
    const dispatch = useDispatch()

    const memoizedCount = React.useCallback(_ => setParentCount(), [cc])
    console.log(rnumbera);
    // const { updateParentNumber } = props
    console.log('Level 2:' + count);

    // const total = React.useMemo(_ => countNumber(count), [count, rnumber])
    const total = countNumber(count)
    // freeze(2000)
    React.useMemo(_ => voidFunction(count), [])

    return (
        <div className='Level2 d-flex flex-column' >
            {children}{rnumber}{`count number funcuo ${total}`}
            <table style={{ alignContent: 'start' }}>
                <tr>
                    <td>Hi {user.name}</td>
                </tr>
                <tr>
                    <td><button onClick={() => setCount(count + 1)} >Add Level 2</button></td>
                    <td> <span>{count}</span></td>
                </tr>
                <tr>
                    <td><button onClick={() => memoizedCount()}>Update Level 1 parent</button></td>
                    <td><span>Number from Parent {number}</span></td>
                </tr>
                <tr>
                    <td><button onClick={() => dispatch({ type: 'INC2' })}>Update redux state</button></td>
                    <td>{rnumber}</td>
                </tr>
            </table>
        </div>
    )
}

const areEqual = (next, prev) => {
    console.log(next, prev);
    // if (next.cc !== prev.cc) return false
    return true
}
// export default Level2
export default React.memo(Level2, areEqual)