import React from "react";
import { getTypes } from "../../../services/typeService";
import { getColor } from "../../../services/colorService";
import { saveProduct } from "../../../services/productsService";
import { Form, Button, Col, InputGroup } from "react-bootstrap";
import Formulario from "./form";
import Select from "./select";
import Input from "./input";
import Joi from "joi";
import _ from "lodash";

class ProductForm extends Formulario {
  state = {
    colors: [],
    types: [],
    sizes: ["X", "S", "M", "L", "XL", "XXL", "XXXL"],
    gender: ["Men", "Women", "Unisex", "Troops", "Souvenirs", "Sales"],
    data: {
      name: "",
      type: "",
      gender: "",
      quantity: "",
      color: "",
      size: "",
      price: "",
      description: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().trim().label("Name"),
    type: Joi.string().required().label("Type"),
    gender: Joi.string().required().trim().label("Gender"),
    quantity: Joi.number().required().min(0).label("Quantity"),
    color: Joi.string().required().trim().label("Color"),
    size: Joi.string().required().label("Size"),
    price: Joi.number().required().min(0).label("Price"),
    description: Joi.string().required().label("Description"),
  };

  // Esta parte debe ajustarse de a ceurdo a la logica de cada
  // formulario doSu bmit()

  componentDidMount = async () => {
    let types = await getTypes();
    let colors = await getColor();
    types = _.map(_.uniqBy(types, "type"), "type");
    colors = _.map(_.uniqBy(colors, "name"), "name");
    this.setState({ types, colors });
  };

  doSubmit = async () => {
    try {
      await saveProduct(this.state.data);
      window.location = "/productform"; //Hace refresh page
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.name = ex.response.data;
        this.setState({ errors });
      }
    }

    // Validar que el usuario sea unico en el server
  };

  render() {
    const { data, errors, types, gender, colors, sizes } = this.state;

    return (
      <React.Fragment>
        <div className="form-container">
          <h1>Register Product</h1>

          <div className="login-form col-6">
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <InputGroup>
                    <Input
                      name="name"
                      value={data.name}
                      label="Name"
                      type="text"
                      onChange={this.handleChange}
                      error={errors.name}
                      placeholder="Enter Name"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Type</Form.Label>
                  <Select
                    value={types}
                    label="type"
                    options={types}
                    onChange={this.handleChange}
                    error={errors.type}
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Gender</Form.Label>

                  <Select
                    value={gender}
                    label="gender"
                    options={gender}
                    onChange={this.handleChange}
                    error={errors.gender}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridQuantity">
                  <Form.Label>Quantity</Form.Label>
                  <InputGroup>
                    <Input
                      name="quantity"
                      value={data.quantity}
                      label="Name"
                      type="text"
                      onChange={this.handleChange}
                      error={errors.quantity}
                      placeholder="0"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPrice">
                  <Form.Label>Price $</Form.Label>
                  <InputGroup>
                    <Input
                      name="price"
                      value={data.price}
                      label="Price"
                      type="text"
                      onChange={this.handleChange}
                      error={errors.price}
                      placeholder="0"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Colors</Form.Label>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Select
                      value={colors}
                      label="color"
                      options={colors}
                      onChange={this.handleChange}
                      error={errors.color}
                    />
                  </Form.Group>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Size</Form.Label>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Select
                      value={sizes}
                      label="size"
                      options={sizes}
                      onChange={this.handleChange}
                      error={errors.size}
                    />
                  </Form.Group>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress">
                  <Form.Label>Desctiption</Form.Label>
                  <Form.Group>
                    <Input
                      name="description"
                      value={data.description}
                      label="Desctiption"
                      type="text"
                      onChange={this.handleChange}
                      error={errors.description}
                      placeholder="Add Desctiption"
                    />
                  </Form.Group>
                </Form.Group>
              </Form.Row>

              <Button
                // disabled={this.validate()}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductForm;
