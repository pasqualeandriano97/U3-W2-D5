import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "./CardComponent";
import searchAPI from "../searchApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
const MainComponent = () => {
  const [arrayOfCitys, setArrayOfCitys] = useState(null);
  const [isLading, setLanding] = useState(true);
  const params = useParams();
  console.log("params", params);

  const fetchData = async () => {
    setArrayOfCitys(await searchAPI(params.city));
    setLanding(false);
  };
  useEffect(() => {
    fetchData();
  }, [params.city]);
  console.log("arrayOfCitys", arrayOfCitys);

  return (
    <Container>
      <Row className="g-3 justify-content-center ">
        <h3 className="text-white my-5 ">Città ricercata: {params.city}</h3>
        {isLading === true ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          arrayOfCitys.list.map((city) => {
            return <CardComponent key={city.id} data={city} />;
          })
        )}
      </Row>
    </Container>
  );
};
export default MainComponent;
