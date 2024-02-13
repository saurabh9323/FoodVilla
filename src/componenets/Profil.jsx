import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    {
      console.log("this is profile componenet");
    }
    return (
      <h1>
        this is contact class componenet:grandChild {this.props.name}{" "}
        {this.props.surname}
      </h1>
    );
  }
}

export default Profile;
