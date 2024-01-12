import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom"
export const PaymentSuccess = () => {
    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body className="text-center">
              <Card.Title className="text-success">Payment Successful</Card.Title>
              <Card.Text>Thank you for your purchase. Your payment was successful.</Card.Text>
              <img src="success-image.png" className="img-fluid mt-3" alt="SuccessImage" />
              <p className="mt-3">Transaction ID: <strong>{referenceNum}</strong></p>
              <Button href="/" variant="primary">Back to Home</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
