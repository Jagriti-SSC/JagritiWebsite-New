import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element, isAuthenticated, redirectTo = '/signin', ...rest }) => {
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

export default PrivateRoute;