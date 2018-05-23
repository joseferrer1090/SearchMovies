import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <br />
      <h1 className="title is-1">404!</h1>
      <h2>Pagina que estas accediendo no existe</h2>
      <Link to="/" className="button is-link">
        {" "}
        Volver al Home{" "}
      </Link>
    </div>
  );
};
