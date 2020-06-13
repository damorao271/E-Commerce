import React, { Component } from "react";
import Card from "./card";
import { NavLink } from "react-router-dom";
import CardButton from "./cartButton";
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
    console.log("Result", result);
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
    } = this.props;

    let productSpecific = _.filter(products, { name: product });
    productSpecific = this.getObject(productSpecific);
    let relatedProducts = _.filter(products, { type: productSpecific.type });
    let productSizes = _.filter(products, { name: product });

    relatedProducts = _.uniqBy(relatedProducts, "name");
    if (!productSpecific) {
      return <h6>Loading</h6>;
    }

    console.log("Products", products);
    console.log("Product Sizes", productSizes);
    console.log("Product Specific", productSpecific);
    console.log("Related Products", relatedProducts);

    // products = _.filter(_.uniqBy(products, "name"), { gender: gender });

    return (
      <React.Fragment>
        <div className="row">
          <div className="img-container col-sm-12 col-md-6 col-lg-6">
            <img src="https://via.placeholder.com/350x350" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="product-info">
              <h4>{productSpecific.name}</h4>
              <h6>${productSpecific.price}.00</h6>
              <h5>SIZE</h5>
              <div className="sizes-container">
                {productSizes.map((p) => (
                  <div>{p.size}</div>
                ))}
              </div>
              <CardButton
                addToCart={addToCart}
                decreaseCounter={decreaseCounter}
                increaseCounter={increaseCounter}
                counter={counter}
              />
            </div>
          </div>
        </div>
        <div className="related-items-first row">
          <h6>Related Items</h6>
          <div className="related-items-container">
            {relatedProducts.map((rp) => (
              <NavLink
                key={rp.name}
                to={`/collections/${gender}/${type}/${rp.name}`}
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
