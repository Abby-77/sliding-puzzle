import React from "react";
import "./styles.css";
import Tile from "./Tile";

class Board extends React.Component {
  state = {
    nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    emptyIndex: 0
  };

  initialConfiguration = () => {
    const newNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    this.setState({ nums: newNums, emptyIndex: 0 });
  };

  onSolveCallback = (clickIndex) => {
    const { nums, emptyIndex } = this.state;
    if (
      emptyIndex + 1 !== clickIndex &&
      emptyIndex - 1 !== clickIndex &&
      emptyIndex + 4 !== clickIndex &&
      emptyIndex - 4 !== clickIndex
    )
      return;
    const newNums = [...nums];
    newNums[emptyIndex] = newNums[clickIndex];
    newNums[clickIndex] = 0;
    this.setState({ nums: newNums, emptyIndex: clickIndex });
  };

  render() {
    return (
      <div>
        <div>
          <Tile
            key={0}
            index={0}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
          <Tile
            key={1}
            index={1}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
          <Tile
            key={2}
            index={2}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
          <Tile
            key={3}
            index={3}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
        </div>

        <div>
          <Tile
            key={4}
            index={4}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
          <Tile
            key={5}
            index={5}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
          <Tile
            key={6}
            index={6}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
          <Tile
            key={7}
            index={7}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
        </div>
        <div>
          <Tile
            key={8}
            index={8}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
          <Tile
            key={9}
            index={9}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
          <Tile
            key={10}
            index={10}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
          <Tile
            key={11}
            index={11}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
        </div>
        <div>
          <Tile
            key={12}
            index={12}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
          <Tile
            key={13}
            index={13}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
          <Tile
            key={14}
            index={14}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
          <Tile
            key={15}
            index={15}
            onSolveCallback={this.onSolveCallback}
            nums={this.state.nums}
          />
        </div>
      </div>
    );
  }
}

export default Board;
