import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "./Card";

export default function CardItems({ data }) {
  return (
    <div>
      <Row className="row-cols-1" md={2} lg={3}>
        {data.map((card) => (
          <Col key={card.id}>
            <Card imgPath={card.imgPath} sale={card.sale} text={card.text} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
