import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "child constructor");

    //* This is how we create state variables in class-based components
    this.state = {
      count: 0,
      abcVal: 2,
    };
  }
  componentDidMount() {
    console.log(this.props.name + "child componentDidMount");
  }

  componentDidUpdate(){
    console.log(this.props.name+ "child componentDidUpdate");
  }

  componentWillUnmount(){
    console.log(this.props.name+ "child componentWillUnmount");
  }
  render() {
    console.log(this.props.name + "child render");

    const { name, profile } = this.props;
    const { count, abcVal } = this.state;

    return (
      <div className="user-card">
        <button
          onClick={() => {
            //* This is how to update state variable in class-based components
            this.setState({
              count: this.state.count + 1,
              abcVal: this.state.abcVal + 1,
            });
          }}
        >
          Click to update count & abcVal
        </button>
        {/* <h1>{this.props.name}</h1> */}
        <h1>{name}</h1>
        <h2>{profile}</h2>
        <h3>Class component</h3>
        <h4>state Variable 'count': {count}</h4>
        <h4>another state Variable 'abcVal': {abcVal}</h4>
      </div>
    );
  }
}

export default UserClass;