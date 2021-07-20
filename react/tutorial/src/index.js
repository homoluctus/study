import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0
    };
  }

  checkSquares(i) {
    if (this.state.squares[i]) {
      alert('Can not click the same cell');
      return false;
    }

    const winner = calcWinner(this.state.squares);
    if (winner) {
      alert(`${winner} Win!!!!`);
      return false;
    }

    return true;
  }

  handleClick(i) {
    if (!this.checkSquares(i)) {
      return;
    }

    const squares = this.state.squares.slice();
    squares[i] = getPlayer(this.state.count);
    this.setState({ squares, count: this.state.count + 1 });
  }

  renderSquare(row, col) {
    const index = row * 3 + col;
    return (
      <Square
        value={this.state.squares[index]}
        onClick={() => this.handleClick(index)}
        key={`${row}${col}`}
      />
    );
  }

  renderBoardRow() {
    return [...Array(3).keys()].map((i) => (
      <div key={i.toString()} className="board-row">
        {[...Array(3).keys()].map((j) => this.renderSquare(i, j))}
      </div>
    ));
  }

  render() {
    const status = `Next player: ${getPlayer(this.state.count)}`;

    return (
      <div>
        <div className="status">{status}</div>
        {this.renderBoardRow()}
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function getPlayer(count) {
  return count % 2 ? 'X' : 'O';
}

function calcWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [x, y, z] = lines[i];
    if (
      `${squares[x]}${squares[y]}${squares[z]}` === String(squares[x]).repeat(3)
    ) {
      return squares[x];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
