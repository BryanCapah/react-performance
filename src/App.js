import React from 'react'
import Level1 from './Component/Level1'
import Level2 from './Component/Level2'
import Level3 from './Component/Level3'
import Level4 from './Component/Level4'
import Level5 from './Component/Level5'
import './App.css';

function App() {
  const [number, setNumber] = React.useState({
    level1: {
      number: 0,
      level2: {
        number: 0,
        level3: {
          number: 0,
          level4: {
            number: 0,
            level5: {
              number: 0
            }
          }
        }
      }
    }
  })

  const updateParentNumber = (number, setNumber) => {
    number.number = number.number + 1
    setNumber(number)
  }

  const updateParentNumberFromLevel2 = (number, setNumber) => {
    number.level1.level2.number = number.level1.level2.number + 1
    setNumber(number)
  }

  const [parentNum, setParentNum] = React.useState(0)
  console.log('parent');
  return (
    <div className="App">
      <div className=''>
        <button onClick={() => setParentNum(parentNum + 1)}>SetParentNum</button>parent {parentNum}

        <Level1 number={number} setNumber={setNumber} updateParentNumber={updateParentNumber} updateParentNumberFromLevel2={updateParentNumberFromLevel2} />
      </div>
    </div>
  );
}

export default App
