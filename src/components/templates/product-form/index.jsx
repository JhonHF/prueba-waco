import React from "react";
import { Formik, Form, Field } from "formik";
import { createProduct, editProduct } from "../../../services/products";
import { useHistory } from "react-router-dom";

export const ProductForm = ({ id, initialVal }) => {
  console.log(initialVal);
  const history = useHistory();
  const handleSubmit = async (values) => {
    if (id) {
      await editProduct(id, values);
    } else {
      await createProduct(values);
    }
    history.push("/");
  };

  return (
    <Formik initialValues={initialVal || {}} onSubmit={handleSubmit} enableReinitialize>
      {() => (
        <Form>
          <Field name="name" placeholder="Nombre del producto" />
          <Field name="description" placeholder="Descripcion" type="textarea" />
          <Field name="stock" placeholder="stock" type="number" />
          <Field name="price" placeholder="Precio $" type="number" />
          <button>Guardar</button>
        </Form>
      )}
    </Formik>
  );
};
