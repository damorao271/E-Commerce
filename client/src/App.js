import React from "react";
import "./FontAwesome/index";
import { getUser } from "./services/userService";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Switch } from "react-router-dom";
import Collection from "./components/collections";
import Home from "./components/home";
import Gender from "./components/common/gender";

class App extends React.Component {
  state = {
    counter: "0",
  };

  componentDidMount = async () => {
    const data = await getUser();
    console.log("Data", data);
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <Header counter={counter} />
        <Switch>
          <Route path="/collections/:gender" component={Gender} />
          <Route path="/collections" render={() => <Collection />} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
