import React from 'react'

const tictactoe = () => {
  const Cell = () => {
    return <td>-</td>
  }
  return (
    
  //<h1>Tic Tac Toe</h1> 
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