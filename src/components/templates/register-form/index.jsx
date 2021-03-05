import React from "react";
import { Formik, Form, Field } from "formik";
import { app, googleAuthProvider } from "../../../firebase/firebase-config";
import { socialLogin } from "../../../helpers/auth-social";

export const RegisterForm = () => {
  const handleSubmit = async (values) => {
    const { email, password } = values;

    await app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <Field type="email" name="email" placeholder="email" />
          <Field type="password" name="password" placeholder="password" />

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            <button disabled={false} type="submit">
              Registrarse
            </button>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              flexDirection: "column",
            }}
          >
            <button
              onClick={async () =>
                await socialLogin(googleAuthProvider, (err) => {
                  console.log(err);
                })
              }
            >
              Registrarse Con Google
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
