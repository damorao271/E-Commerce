import React from "react";
import { getTypes } from "./services/userService";

class App extends React.Component {
  state = {};

  componentDidMount = async () => {
    const { data } = await getTypes();
    console.log(data);
  };

  render() {
    return <div className="App">Hola</div>;
  }
}

export default App;
