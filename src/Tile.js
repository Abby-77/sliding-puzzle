import React from "react";

class Tile extends React.Component {
  render() {
    const handleClick = () => {
      this.props.onSolveCallback(this.props.index);
    };
    return (
      <button
        className="tile"
        onClick={handleClick}
        style={{
          backgroundColor:
            this.props.nums[this.props.index] === 0 ? "white" : "",
          color: this.props.nums[this.props.index] === 0 ? "white" : ""
        }}
      >
        {this.props.nums[this.props.index]}
      </button>
    );
  }
}

export default Tile;
