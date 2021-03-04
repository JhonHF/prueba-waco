import React, { useContext } from 'react';
import { Route, Redirect,  } from 'react-router';
import { Auth } from '../../../context/auth-context';

export function PrivateRoute({ authPage, onAuthRoute, ...props }) {
  const { usuario: isAuth } = useContext(Auth);
  const location = props.location;
  if (authPage && !isAuth) {
    return (
      <Redirect
        to={{
          pathname: authPage,
          state: { redirectFrom: location.pathname },
        }}
      />
    );
  }
  if (isAuth && onAuthRoute) {
    return (
      <Redirect
        to={{
          pathname: onAuthRoute,
          state: { redirectFrom: undefined },
        }}
      />
    );
  }

  return <Route {...props} />;
}
