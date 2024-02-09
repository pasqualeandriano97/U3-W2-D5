import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const EmptyComponent = () => {
  return (
    <Container className="vh-100">
      <Row className="w-100 h-100 justify-content-center">
        <Col>
          <h3 className="text-center text-white my-5">
            Cerca nella barra di navigazione la tua città
          </h3>
          <div className="d-flex justify-content-center ">
            <Image
              src="https://images.ctfassets.net/hrltx12pl8hq/4GCENlb1OdADKjbkIhs7XM/dbcf42f42de3782d203a4067a10364ab/shutterstock_1145259947-min.jpg?fit=fill&w=600&h=400"
              className="border-0 border-rounded mx-auto"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default EmptyComponent;
