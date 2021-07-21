import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className={props.squareClass} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
      line: []
    };
  }

  continued(i) {
    const { winner, line } = calcWinner(this.state.squares);
    console.log(winner, line);
    if (winner) {
      alert(`${winner} Win!!!!`);
      this.setState({ line });
      return false;
    }

    if (this.state.count === 9) {
      alert('This game is a draw...');
      return false;
    }

    if (this.state.squares[i]) {
      alert('Can not click the same cell');
      return false;
    }

    return true;
  }

  handleClick(i) {
    if (!this.continued(i)) {
      return;
    }

    const squares = this.state.squares.slice();
    squares[i] = getPlayer(this.state.count);
    this.setState({ squares, count: this.state.count + 1 });
  }

  renderSquare(i) {
    const squareClass = this.state.line.includes(i)
      ? 'square winner'
      : 'square';

    return (
      <Square
        value={this.state.squares[i]}
        squareClass={squareClass}
        onClick={() => this.handleClick(i)}
        key={`square_${i}`}
      />
    );
  }

  renderBoardRow() {
    return [...Array(3).keys()].map((i) => (
      <div key={`board_row_${i}`} className="board-row">
        {[...Array(3).keys()].map((j) => this.renderSquare(i * 3 + j))}
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
  const result = { winner: null, line: null };

  for (let i = 0; i < lines.length; i++) {
    const [x, y, z] = lines[i];

    if (
      squares[x] &&
      `${squares[x]}${squares[y]}${squares[z]}` === String(squares[x]).repeat(3)
    ) {
      result.winner = squares[x];
      result.line = lines[i];
      break;
    }
  }
  return result;
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
