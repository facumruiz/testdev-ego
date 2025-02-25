import React from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardCarousel.css"; // Asegúrate de que tu archivo de estilos esté importado

// Función para dividir el arreglo en grupos de tamaño especificado
const chunkArray = (array, size) => {
  return array.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size));
    return acc;
  }, []);
};

const CardCarousel = ({ car }) => {


  // Cuadruplicamos el contenido para mostrar más cards
  const quadrupledContent = [
    ...car.model_features,
    ...car.model_features,
    ...car.model_features,
    ...car.model_features,
  ];

  // Agrupamos las cards en grupos de 4 (para la versión de escritorio)
  const groupedCards = chunkArray(quadrupledContent, 4);

  return (
    <>
      {/* 🔹 Versión de escritorio (Muestra 4 cards por slide) */}
      <Container fluid className="carousel-container p-0 d-none d-md-block">
        <Carousel indicators={true} interval={3000} className="w-100">
          {groupedCards.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center align-items-stretch">
                {group.map((card) => (
                  <Col key={card.id} xs={12} sm={6} md={3} lg={3} className="d-flex align-items-stretch">
                    <Card className="carousel-card text-start shadow w-100">
                      <Card.Img variant="top" src={card.image} className="fixed-image" />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>{card.name}</Card.Title>
                        <Card.Text>{card.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* 🔹 Versión móvil (Muestra 1 card por slide) */}
      <Container fluid className="carousel-container p-0 d-md-none carousel-mobile">
        <Carousel indicators={true} controls={false} interval={3000} className="w-100">
          {quadrupledContent.map((card, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center align-items-stretch">
                <Col xs={12} className="d-flex align-items-stretch">
                  <Card className="carousel-card text-start shadow w-100">
                    <Card.Img variant="top" src={card.image} className="fixed-image" />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{card.name}</Card.Title>
                      <Card.Text>{card.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

    </>
  );
};

export default CardCarousel;
