import React from "react";
import "./FontAwesome/index";
import { getUser } from "./services/userService";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductSpecific from "./components/common/productSpecific";
import { Route, Switch } from "react-router-dom";
import Collection from "./components/collections";
import Home from "./components/home";
import Login from "./components/login";
import Gender from "./components/common/gender";
import { getColor } from "./services/colorService";
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
    const data = await getUser();
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
  increaseCounter = (counter) => {
    counter++;
    this.setState({ counter });
  };

  // Disminuye el contador
  decreaseCounter = (counter) => {
    counter <= 0 ? (counter = 0) : counter--;
    this.setState({ counter });
  };

  addToCart = (counter) => {
    console.log("Carrito", counter);
  };

  render() {
    const { products, counter, nav, colors, types } = this.state;

    return (
      <div className="App">
        <Header counter={counter} />
        <Switch>
          <Route
            path={`/collections/:gender/:type/:product`}
            render={(props) => (
              <ProductSpecific
                addToCart={this.addToCart}
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
              path={`/collections/${n}`}
              render={(props) => (
                <Gender
                  key={n}
                  gender={n}
                  colors={colors}
                  types={types}
                  products={products}
                />
              )}
            />
          ))}
          <Route path="/login" component={Login} />

          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
