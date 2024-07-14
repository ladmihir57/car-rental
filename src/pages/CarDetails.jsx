import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/Bookingform";
import PaymentMethod from "../components/UI/PaymentMethod";
import carData from "../assets/data/carData";
import Helmet from "../components/Helmet/Helmet";

const CarDetails = () => {
  const { slug } = useParams();
  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <Helmet title={singleCarItem ? singleCarItem.carName : "Car Details"}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              {singleCarItem && (
                <img src={singleCarItem.imgUrl} alt={singleCarItem.carName} className="w-100" />
              )}
            </Col>

            <Col lg="6">
              {singleCarItem && (
                <div className="car__info">
                  <h2 className="section__title">{singleCarItem.carName}</h2>
                  <h6 className="rent__price fw-bold fs-4">${singleCarItem.price}.00 / Day</h6>
                  <span className="d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      {Array.from({ length: singleCarItem.rating }, (_, index) => (
                        <i key={index} className="ri-star-s-fill"></i>
                      ))}
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                  <p className="section__description">{singleCarItem.description}</p>
                  <div className="d-flex align-items-center mt-3" style={{ columnGap: "4rem" }}>
                    {/* Render additional details */}
                  </div>
                  <div className="d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                    {/* Render additional details */}
                  </div>
                </div>
              )}
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;