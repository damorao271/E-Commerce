import React, { Component } from "react";
import Card from "./card";
import { NavLink, Route } from "react-router-dom";
import CartButton from "./cartButton";
import _ from "lodash";

class ProductSpecific extends Component {
  getObject = (array) => {
    let result = {};
    for (let i = 0; i < array.length; i++) {
      result = {
        color: array[i].color,
        createdAt: array[i].createdAt,
        gender: array[i].gender,
        name: array[i].name,
        price: array[i].price,
        quantity: array[i].quantity,
        size: array[i].size,
        type: array[i].type,
        updatedAt: array[i].updatedAt,
        __v: array[i].__v,
        _id: array[i]._id,
      };
    }
    return result;
  };

  render() {
    const {
      product,
      products,
      type,
      gender,
      counter,
      increaseCounter,
      decreaseCounter,
      addToCart,
      resetCounter,
    } = this.props;

    let productSpecific = _.filter(products, { name: product });
    productSpecific = this.getObject(productSpecific);
    let relatedProducts = _.filter(products, { type: productSpecific.type });
    let productSizes = _.filter(products, { name: product });

    relatedProducts = _.uniqBy(relatedProducts, "name");
    if (!productSpecific) {
      return <h6>Loading</h6>;
    }

    return (
      <React.Fragment>
        <div className="row">
          <div className="img-container col-sm-12 col-md-6 col-lg-6">
            <img src="https://via.placeholder.com/350x350" alt="First slide" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="product-info">
              <h4>{productSpecific.name}</h4>
              <h6>${productSpecific.price}.00</h6>
              <h5>SIZE</h5>
              <div className="sizes-container">
                {productSizes.map((p) => (
                  <NavLink
                    key={p.size}
                    to={`/collections/${gender}/${type}/${p.name}/${p._id}`}
                  >
                    <div onClick={() => resetCounter(counter)} key={p.size}>
                      {p.size}
                    </div>
                  </NavLink>
                ))}
              </div>

              <Route
                path={`/collections/:gender/:type/:product/:id`}
                render={(props) => (
                  <CartButton
                    getObject={this.getObject}
                    addToCart={addToCart}
                    decreaseCounter={decreaseCounter}
                    increaseCounter={increaseCounter}
                    counter={counter}
                    productSizes={productSizes}
                    id={props.match.params.id}
                    products={products}
                  />
                )}
              />

              {/* <CardButton
                productSizes={productSizes}
                addToCart={addToCart}
                decreaseCounter={decreaseCounter}
                increaseCounter={increaseCounter}
                counter={counter}
              /> */}

              <div>
                <NavLink to={`/collections/${gender}/${type}`}>
                  <h6>Type: {type}</h6>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="related-items-first row">
          <h6>Related Items</h6>
          <div className="related-items-container">
            {relatedProducts.map((rp) => (
              <NavLink
                onClick={() => resetCounter(counter)}
                key={rp.name}
                to={`/collections/${gender}/${type}/${rp.name}/${rp._id}`}
              >
                <Card key={rp.name} name={rp.name} price={rp.price} />
              </NavLink>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductSpecific;
