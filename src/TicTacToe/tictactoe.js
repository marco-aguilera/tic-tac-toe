import React, { useState } from 'react'
import './tictactoe.css'

const tictactoe = () => {
  const [turn, setTurn] = useState('x');

  const handleClick = (num) => { //adding a click for the individual cells 
    alert(num);
  }

  const Cell = ({num}) => { //num is being passed in a a prop so we need to add brackets
    return <td onClick={() => handleClick (num)}>-</td> //added a onclick func for the cells 
  }

  return (
  //Setting up the table grid for the game 3x3
  <div className='container' > 
    <table> 
      <tbody>
          <tr> 
            <Cell num={0} /> 
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
      </tbody>
    </table>
  </div>
    

  )
}

export default tictactoe