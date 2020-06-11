import React from "react";
import "./FontAwesome/index";
import { getUser } from "./services/userService";
import Header from "./components/header";
import Footer from "./components/footer";

class App extends React.Component {
  state = {};

  componentDidMount = async () => {
    const data = await getUser();
    console.log("Data", data);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
