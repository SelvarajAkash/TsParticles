import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const ProtectedRouter = ({ component, ...rest }) => {
  var RenderComponents = component;

  return (
    <Routes>
      <Route
        {...rest}
        render={
        
          (props) => {
                return true ? (
                    <RenderComponents {...props} />
                ) : (
                    <Navigate
                    to='/login'
                    />
                );
        }}
      />
    </Routes>
  );
};

export default ProtectedRouter;
