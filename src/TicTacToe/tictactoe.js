import React from 'react'
import './tictactoe.css'
const tictactoe = () => {
  const Cell = () => {
    return <td>-</td> //css: table td will place a box around it.
  }
  return (
      
  //Setting up the table grid for the game 3x3
  <div> 
    <table> 
      <tbody>
          <tr> 
            <Cell/> 
            <Cell/>
            <Cell/>
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
      </tbody>
    </table>
  </div>
    

  )
}

export default tictactoe