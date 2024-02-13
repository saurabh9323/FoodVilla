import { Component } from "react";
import Profil from "./Profil";

class AboutClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      jsonData: {},
    };
  }
  async componentDidMount() {
    console.log("componene Didmount in About class");
    const data = await fetch(" https://api.github.com/users/saurabh9323");
    const json = await data.json();
    // console.log(json);
    this.setState({
      jsonData: json,
    });
  }
  componentDidUpdate() {
    console.log("componenet update in AboutClass");
  }
  componentWillUnmount() {
    console.log("componenet will unmount in About Class");
  }
  render() {
    console.log("render in aboutClass");
    return (
      <div>
        <img src={this.state.jsonData?.avatar_url} alt="avatar" />
        <h2>{this.state.jsonData.name}</h2>
        <h2>Total repo:{this.state.jsonData.public_repos}</h2>
        <h1>this is About class componenet :child</h1>

        <Profil name={"saurabh"} surname={"pathak"} />
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          click me
        </button>
      </div>
    );
  }
}

export default AboutClass;
