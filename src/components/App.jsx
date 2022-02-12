import { Component } from "react";
import Header from "./Header";
import Main from "./Main";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isListVisable: false };
  }
  toggleList = () => {
    this.setState({ isListVisable: !this.state.isListVisable });
  };

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
