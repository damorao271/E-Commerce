import React from "react";
import { getUser } from "./services/userService";

class App extends React.Component {
  state = {};

  componentDidMount = async () => {
    const data = await getUser();
    console.log("Data", data);
  };

  render() {
    return <div className="App">Hola</div>;
  }
}

export default App;
