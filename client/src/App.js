import React from "react";
import "./FontAwesome/index";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductSpecific from "./components/common/productSpecific";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import LoginForm from "./components/common/Forms/loginForm";
import SignUpForm from "./components/common/Forms/signUpForm";
import Gender from "./components/common/gender";
import { getTypes } from "./services/typeService";
import { getProducts } from "./services/productsService";
import _ from "lodash";

class App extends React.Component {
  state = {
    colors: [],
    types: [],
    products: [],
    counter: 0,
    nav: ["men", "women", "unisex", "troops", "souvenirs", "sales"],
  };

  componentDidMount = async () => {
    const types = await getTypes();
    const products = await getProducts();
    let colors = _.uniqBy(products, "color");
    colors = this.getColors(colors);
    this.setState({ colors, types, products });
  };

  // Funcion que consigue los colores del arreglo filtrado
  getColors = (colors) => {
    let result = [];
    for (let i = 0; i < colors.length; i++) {
      result[i] = colors[i].color;
    }
    return result;
  };

  // Aumenta el contador
  increaseCounter = (products, id, counter) => {
    products = _.filter(products, { _id: id });
    if (counter < products[0].quantity) {
      counter++;
    }

    this.setState({ counter });
  };

  // Disminuye el contador
  decreaseCounter = (counter) => {
    counter <= 0 ? (counter = 0) : counter--;
    this.setState({ counter });
  };

  // Resetea el contador
  resetCounter = (counter) => {
    counter = 0;
    this.setState({ counter });
  };

  addToCart = (products, id, counter) => {
    products = _.filter(products, { _id: id });

    console.log("# a comoprar: ", counter);
    console.log("Producto a comoprar: ", products);
  };

  render() {
    const { products, counter, nav, colors, types } = this.state;

    return (
      <div className="App">
        <Header counter={counter} resetCounter={this.resetCounter} />
        <Switch>
          <Route
            path={`/collections/:gender/:type/:product`}
            render={(props) => (
              <ProductSpecific
                addToCart={this.addToCart}
                resetCounter={this.resetCounter}
                decreaseCounter={this.decreaseCounter}
                increaseCounter={this.increaseCounter}
                counter={counter}
                types={types}
                products={products}
                gender={props.match.params.gender}
                type={props.match.params.type}
                product={props.match.params.product}
              />
            )}
          />

          {nav.map((n) => (
            <Route
              key={n}
              path={`/collections/${n}`}
              render={(props) => (
                <Gender
                  gender={n}
                  colors={colors}
                  types={types}
                  products={products}
                  counter={counter}
                  resetCounter={this.resetCounter}
                />
              )}
            />
          ))}
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />

          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
