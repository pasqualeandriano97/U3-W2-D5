import Form from "react-bootstrap/Form";

import { useState } from "react";
import { Link } from "react-router-dom";

const SearchComponent = () => {
  const [test, setTest] = useState("");

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Inserisci la tua città"
        className="me-2"
        aria-label="Search"
        onChange={(e) => setTest(e.target.value)}
      />
      <Link to={`/${test}`} className="btn btn-outline-success">
        Cerca
      </Link>
    </Form>
  );
};

export default SearchComponent;
