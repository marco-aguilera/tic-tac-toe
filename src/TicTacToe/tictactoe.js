import React, { useState } from 'react'
import './tictactoe.css'

const TicTacToe = () => {  //React component names must start with an uppercase letter.

  const [turn, setTurn] = useState('x'); // tracking alternating turns
  const [cells, setCells] = useState(Array(9).fill('')); //array with the 9 cells for the game 
  const [winner, setWinner] = useState(); //setting the winner 


  const handleClick = (num) => { //adding a click for the individual cells 
   //alert(num); //alerts which number you are on in the cell (Not needed)


    let squares = [...cells];

    const checkForWinner = (squares) => {
      let combos = {
        across: [
          [0,1,2],
          [3,4,5],
          [6,7,8],
        ],
        down: [
          [0,3,6],
          [1,4,7],
          [6,5,8],
        ],
        dialog: [
          [0,4,8],
          [2,4,6],
        ],
      };

       for (let combo in combos) {
        combos[combo].forEach((pattern) => {
          console.log(pattern);
            if(
              squares[pattern[0]] === '' ||
              squares[pattern[1]] === '' ||
              squares[pattern[2]] === ''
            ) {
              //do nothing
            } else if (
              squares[pattern[0]] === squares[pattern[1]] &&
              squares[pattern[1]] === squares[pattern[2]]
            ){
              setWinner(squares[pattern[0]]);
            }
        });
       }

    } 

    if(cells[num] !== '') {  //stops the users from clickinig a cell that is already populated.
      alert('already clicked!');
      return;
    }

    /* alternates turns after the other player has completed move */
    if(turn === 'x') {
      squares[num] = 'x';
      setTurn('o');
    } else {
      squares[num] = 'o';
      setTurn('x');
    }

    checkForWinner(squares);
    setCells(squares); //update the state variable and keep that item o or x inside of the array

  };

  const handleRestart = () => {
    setWinner(null); //reseting game once the game has finished 
    setCells(Array(9).fill('')); //empting the array of cells
  }

  const Cell = ({num}) => { //num is being passed in a a prop so we need to add brackets
    return <td onClick={() => handleClick (num)}>{cells[num]}</td> //added a onclick func for the cells 
  }

  return (
  //Setting up the table grid for the game 3x3
  <div className='container' > 
    <table> 
      Turn: {turn}
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
    {winner && (
      <>
      <p>{winner} is the winner!</p>
      <button onClick={() => handleRestart()}>Play Again!</button>
      </>
    )}
  </div>
    
  )
}

export default TicTacToe