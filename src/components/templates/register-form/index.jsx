import React, { useState } from 'react'
import { Formik } from 'formik'
import { app, googleAuthProvider } from '../../../firebase-config';
import { socialLogin } from '../../../helpers/auth-social';

export const RegisterForm = () => {
    const [error, setError] = useState('')
    const handleSubmit = async(values) => {
        const { email, password } = values;

        await app
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                setError(error.message)
            });
    }
    return (
        <Formik
        initialValues={{}}
        validationSchema={{}}
        onSubmit={handleSubmit}>
        {({ isValid, submitForm }) => (
          <>
            <input
              type="email"
              name="email"
              required
              placeholder="pedro"
            />
            <input
              type="password"
              name="password"
              required
              placeholder="*********"
            />
  
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
              }}>
              <button disabled={false} onClick={submitForm}>
                  Registrarse
              </button>
            </div>
           
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                flexDirection: 'column',
              }}>
              <button onClick={async() => await socialLogin(googleAuthProvider, setError)}>
                Registrarse Con Google
              </button>
              
            </div>
          </>
        )}
      </Formik>
    )
}
