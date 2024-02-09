import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
const CardComponent = (data) => {
  console.log("data", data);
  let src = `http://openweathermap.org/img/w/${data.data.weather[0].icon}.png`;
  return (
    <Col sm={12} md={3} lg={2} height="500px">
      <Link to={`/detail/${data.data.id}`} className="text-decoration-none">
        <Card className="h-100">
          <Card.Img variant="top" src={src} />
          <Card.Body className="d-flex flex-column justify-content-center">
            <Card.Title className="text-black">
              {data.data.name}-{data.data.sys.country}
            </Card.Title>
            <Card.Text className="d-flex flex-column justify-content-center align-items-center  text-center flex-grow-1">
              <p>Temperatura Massima: {data.data.main.temp_max} °C</p>
              <p>
                Temperatura Minima:
                {data.data.main.temp_min} °C
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default CardComponent;
