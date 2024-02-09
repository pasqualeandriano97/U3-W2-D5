import { Container, Row, Col } from "react-bootstrap";

const EmptyComponent = () => {
  return (
    <Container className="vh-100">
      <Row className="w-100 h-100 justify-content-center align-items-center ">
        <Col>
          <h3 className="text-center text-white">
            Cerca nella barra di navigazione la tua città
          </h3>
        </Col>
      </Row>
    </Container>
  );
};
export default EmptyComponent;
