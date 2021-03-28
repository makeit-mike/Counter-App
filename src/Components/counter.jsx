import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  }; //the data the component needs
  render() {
    return (
      <div>
        <label className="itemsInCart" style={{ paddingTop: 2 + "px" }}>
          {this.formatCount()}
        </label>

        <button
          style={{ marginRight: 5 + "px" }}
          className="btn btn-secondary btn-sm "
          onClick={this.increment}
        >
          +
        </button>

        <button
          style={{ marginRight: 10 + "px" }}
          className="btn btn-secondary btn-sm"
          onClick={this.decrement}
        >
          -
        </button>

        <button
          style={{ marginRight: 5 + "px" }}
          className="btn btn-warning btn-sm"
          onClick={this.delete}
        >
          x
        </button>
      </div>
    );
  }
  formatCount = () => {
    return this.state.count == 0 ? "Zero" : this.state.count;
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  delete = () => {
    this.setState({ count: 0 });
  };
}

export default Counter;
