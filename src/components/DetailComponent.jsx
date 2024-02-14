import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import searchAPID from "../searchApiByid";
import { useEffect, useState } from "react";
import React from "react";

const DetailComponent = () => {
  const [days, setDays] = useState(null);
  const [isLading, setLanding] = useState(true);

  const params = useParams();
  console.log("params", params);
  const fetchData = async () => {
    setDays(await searchAPID(params.cityID));

    setLanding(!isLading);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("days", days);
  //   let src = `http://openweathermap.org/img/w/${data.data.weather[0].icon}.png`;
  return (
    <Container>
      <h3 className="text-center text-white my-3 ">
        Meteo per {isLading === false ? days.city.name : ""}
      </h3>
      <Row className="g-3 justify-content-center ">
        <Col sm={12} md={4} lg={3}>
          <Card className="overflow-scroll" style={{ height: "45%" }}>
            <Card.Body>
              <Card.Title>
                {isLading === false
                  ? `${days.list[0].dt_txt.split("-")[0]}-${
                      days.list[0].dt_txt.split("-")[1]
                    }-${parseInt(days.list[0].dt_txt.split("-")[2])}`
                  : ""}
              </Card.Title>
              <Card.Text>
                {isLading === false
                  ? days.list.map((array) => {
                      if (
                        parseInt(array.dt_txt.split("-")[2]) ===
                        parseInt(days.list[0].dt_txt.split("-")[2])
                      ) {
                        return (
                          <>
                            <p key={array.dt}>
                              Ore:{array.dt_txt.split(" ")[1].split(":")[0]}
                              <img
                                src={`http://openweathermap.org/img/w/${array.weather[0].icon}.png`}
                                alt="img"
                              ></img>
                            </p>
                            <p>Temperatura Minima:{array.main.temp_min} C</p>
                            <p>Temperatura Massima:{array.main.temp_max} C</p>
                          </>
                        );
                      }
                    })
                  : ""}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={3}>
          <Card className="overflow-scroll" style={{ height: "45%" }}>
            <Card.Body>
              <Card.Title>
                {isLading === false
                  ? `${days.list[0].dt_txt.split("-")[0]}-${
                      days.list[0].dt_txt.split("-")[1]
                    }-${parseInt(days.list[0].dt_txt.split("-")[2]) + 1}`
                  : ""}
              </Card.Title>
              <Card.Text>
                {isLading === false
                  ? days.list.map((array) => {
                      if (
                        parseInt(array.dt_txt.split("-")[2]) ===
                        parseInt(days.list[0].dt_txt.split("-")[2]) + 1
                      ) {
                        return (
                          <>
                            <p key={array.dt} className="mb-1">
                              Ore:{array.dt_txt.split(" ")[1].split(":")[0]}
                              <img
                                src={`http://openweathermap.org/img/w/${array.weather[0].icon}.png`}
                                alt="img"
                              ></img>
                            </p>
                            <p>Temperatura Minima:{array.main.temp_min} C</p>
                            <p>Temperatura Massima:{array.main.temp_max} C</p>
                          </>
                        );
                      }
                    })
                  : ""}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={3}>
          <Card className="overflow-scroll  " style={{ height: "45%" }}>
            <Card.Body>
              <Card.Title>
                {isLading === false
                  ? `${days.list[0].dt_txt.split("-")[0]}-${
                      days.list[0].dt_txt.split("-")[1]
                    }-${parseInt(days.list[0].dt_txt.split("-")[2]) + 2}`
                  : ""}
              </Card.Title>
              <Card.Text>
                {isLading === false
                  ? days.list.map((array) => {
                      if (
                        parseInt(array.dt_txt.split("-")[2]) ===
                        parseInt(days.list[0].dt_txt.split("-")[2]) + 2
                      ) {
                        return (
                          <>
                            <p key={array.dt}>
                              Ore:{array.dt_txt.split(" ")[1].split(":")[0]}
                              <img
                                src={`http://openweathermap.org/img/w/${array.weather[0].icon}.png`}
                                alt="img"
                              ></img>
                            </p>
                            <p>Temperatura Minima:{array.main.temp_min} C</p>
                            <p>Temperatura Massima:{array.main.temp_max} C</p>
                          </>
                        );
                      }
                    })
                  : ""}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailComponent;
