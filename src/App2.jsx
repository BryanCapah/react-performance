import { memo, useCallback, useState } from 'react'

const calc = (state) => (state + 1) * 2
const App2 = () => {
    const [parent, setParent] = useState(0)
    const sp = () => setParent(pr => calc(pr))
    const memoizedParent = useCallback(sp, [])

    const [name, setName] = useState('')
    const memoizedName = useCallback((e, val) => setName(nm => nm = nm + val), [])

    console.log('parent');

    return (
        <div>
            <table>
                <tr>
                    <td>Parent</td>
                    <td>{parent}</td>
                </tr>
                <tr>
                    <td>Parent Name</td>
                    <td>{name}</td>
                </tr>
            </table>

            <Child memoizedParent={memoizedParent} memoizedName={memoizedName} />
        </div>
    )
}

export default memo(App2)

const Child = memo(({ memoizedParent, memoizedName }) => {
    console.log('child');
    return (
        <div>
            <table>
                <tr>
                    <td>Update Parent</td>
                    <td><button onClick={memoizedParent}>Update</button></td>
                </tr>
                <tr>
                    <td>Update Parent Name</td>
                    <td><input type='text' onChange={(e) => memoizedName(e, valPlusTwo(3, 2))} /></td>
                </tr>
            </table>

            <Child2 memoizedParent={memoizedParent} memoizedName={memoizedName} />
        </div>
    )
})

const valPlusTwo = (val, two) => val + two

const Child2 = memo(({ memoizedParent, memoizedName }) => {
    const [child2, setChild2] = useState(0)

    const memoizeChild = useCallback(() => setChild2(c => c + 1), [])
    console.log('child 2');
    freeze(2000)
    return (
        <div>
            <table>
                <tr>
                    <td>Update Parent from child 2</td>
                    <td><button onClick={memoizedParent}>Update</button></td>
                </tr>
                <tr>
                    <td>Update Parent Name</td>
                    <td><input type='text' onChange={(e) => memoizedName(e, valPlusTwo(3, 2))} /></td>
                </tr>
                <tr>
                    <td>Update child 2</td>
                    <td><button onClick={memoizeChild}>Update</button></td>
                </tr>
                <tr>
                    <td>Child 2</td>
                    <td>{child2}</td>
                </tr>
            </table>
        </div>
    )
})

const freeze = (ms) => {
    const date = Date.now()
    let currentDate = null
    do {
        currentDate = Date.now()
    } while (currentDate - date < ms)
}