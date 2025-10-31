import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  render() {
  const {name, profile} = this.props;

    return (
      <div className="user-card">
        {/* <h1>{this.props.name}</h1> */}
        <h1>{name}</h1>
        <h2>{profile}</h2>
        <h3>Class component</h3>
      </div>
    );
  }
}

export default UserClass;