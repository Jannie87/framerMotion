import { Component } from "react";
import "./main.css";
import Card from "./Card";

class Main extends Component {
  constructor(props) {
    super(props);
    //   this.state = { cars: ["Legacy", "Impreza", "Outback", "Forester"] };
    //this state endast i constructor
  }

  render() {
    return (
      <main className="container">
        <div className="round-boxes">
          <div className="one" />
          <div className="two" />
          <div className="three" />
          <div className="four" />
        </div>
        {/* <div className="column">
          {this.props.isListVisable && (
            <ul className="card-container">
              {this.state.cars.map((car) => (
                <Card key={car}>{car}</Card>
              ))}
            </ul>
          )}
        </div> */}
      </main>
    );
  }
}

export default Main;
