import React from "react";
import { getTypes } from "../../../services/typeService";
import { getColor } from "../../../services/colorService";
import { Form, Button, Col, InputGroup } from "react-bootstrap";
import Formulario from "./form";
import Input from "./input";
import Joi from "joi";
import _ from "lodash";

class ProductForm extends Formulario {
  state = {
    colors: [],
    types: [],
    sizes: ["x", "s", "m", "l", "xl", "xxl", "xxxl"],
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
    types = _.uniqBy(types, "type");
    colors = _.uniqBy(colors, "name");
    this.setState({ types, colors });
  };

  doSubmit = async () => {
    if (this.validate()) {
      console.log("CANT SUBMIT !! ");

      // Validar que el usuario sea unico en el server
    } else {
      console.log("Submitted", this.state.data);
    }
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
                  <Form.Control as="select" onChange={this.handleChange} custom>
                    {types.map((t) => (
                      <option
                        value={t.type}
                        error={errors.type}
                        key={t.type}
                        className="form-option"
                      >
                        {t.type}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as="select" custom>
                    {gender.map((t) => (
                      <option
                        value={t}
                        onChange={this.handleChange}
                        error={errors.t}
                        key={t}
                        className="form-option"
                      >
                        {t}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Price</Form.Label>
                  <InputGroup>
                    <Input
                      name="price"
                      value={data.price}
                      label="Name"
                      type="text"
                      onChange={this.handleChange}
                      error={errors.price}
                      placeholder="0 $"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Colors</Form.Label>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Control as="select" custom>
                      {colors.map((c) => (
                        <option
                          value={c.name}
                          key={c.name}
                          onChange={this.handleChange}
                          error={errors.name}
                          className="form-option"
                        >
                          {c.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Size</Form.Label>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Control as="select" custom>
                      {sizes.map((s) => (
                        <option
                          value={s}
                          key={s}
                          onChange={this.handleChange}
                          error={errors.s}
                          className="form-option-uppercase"
                        >
                          {s}
                        </option>
                      ))}
                    </Form.Control>
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
