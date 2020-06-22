import React from "react";
import "./FontAwesome/index";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductSpecific from "./components/common/productSpecific";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import LoginForm from "./components/common/Forms/loginForm";
import SignUpForm from "./components/common/Forms/signUpForm";
import Logout from "./components/logout";
import ProductForm from "./components/common/Forms/productForm";
import Gender from "./components/common/gender";
import ProtectedRoute from "./components/protectedRoute";
import { getTypes } from "./services/typeService";
import { getProducts } from "./services/productsService";
import {
  saveCart,
  getCartByUserAndId,
  editCart,
  deleteCart,
} from "./services/cartService";
import auth from "./services/authService";
import _ from "lodash";

class App extends React.Component {
  state = {
    user: "",
    colors: [],
    types: [],
    products: [],
    counter: 0,
    nav: ["Men", "Women", "Unisex", "Troops", "Souvenirs", "Sales"],
  };

  componentDidMount = async () => {
    const user = auth.getCurrentUser();
    this.setState({ user });
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

  addToCart = async (products, id, counter) => {
    products = _.filter(products, { _id: id });
    products = { ...products[0] };
    products.user = this.state.user.email;
    products.quantity = counter;
    products.productId = id;
    delete products.description;
    delete products.createdAt;
    delete products.updatedAt;
    delete products.__v;
    delete products._id;

    const existo = await getCartByUserAndId(products.user, products.productId);

    if (existo[0] && counter !== 0) {
      await editCart(products, existo[0]._id);
    }

    if (existo[0] && counter === 0) {
      await deleteCart(existo[0]._id);
    }

    if (!existo[0] && counter !== 0) {
      try {
        await saveCart(products);
      } catch (ex) {
        console.log(ex);
      }
    }
  };

  render() {
    const { products, counter, nav, colors, types, user } = this.state;

    return (
      <div className="App">
        <Header
          user={user}
          counter={counter}
          resetCounter={this.resetCounter}
        />
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
          <Route path="/logout" component={Logout} />
          <Route path="/signup" component={SignUpForm} />
          <ProtectedRoute path="/productform" component={ProductForm} />

          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
