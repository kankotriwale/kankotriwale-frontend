import Link from "next/link";
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="text-center">
        <div className="footer-wrapper">
          <Row className="mb-4">
            <Col>
              <h5 className="text-transform-uppercase fs-lg-4 fw-bold mb-3">
                Kankotriwale
              </h5>
              <p className="">
                Your wedding deserves the best. We are here to help you create
                the most memorable Wedding Invitation
              </p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <h5 className="fs-lg-4 fw-bold mb-3">Products</h5>
              <Row>
                <Col className="social-link">
                  <Link href="/">Home</Link>
                </Col>
                <Col className="social-link">
                  <Link href="/">Caregories</Link>
                </Col>
                <Col className="social-link">
                  <Link href="/">Invitations</Link>
                </Col>
                <Col className="social-link">
                  <Link href="/">Store</Link>
                </Col>
                <Col className="social-link">
                  <Link href="/">Contact Us</Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 className="fs-lg-4 fw-bold mb-3">Find Us On</h5>
              <div className="footer__box">
                <Row>
                  <Col className="mb-2">
                    <a className="footer__link" href="#">
                      <Image
                        src="/icons/facebook.svg"
                        width={9}
                        height={19}
                        alt="facebook icon"
                      />
                    </a>
                  </Col>
                  <Col className="mb-2">
                    <a className="footer__link" href="#">
                      <Image
                        src="/icons/instagram.svg"
                        width={19}
                        height={19}
                        alt="instagram icon"
                      />
                    </a>
                  </Col>
                  <Col className="mb-2">
                    <a className="footer__link" href="#">
                      <Image
                        src="/icons/pinterest.svg"
                        width={17}
                        height={22}
                        alt="pinterest icon"
                      />
                    </a>
                  </Col>
                  <Col className="mb-2">
                    <a className="footer__link" href="#">
                      <Image
                        src="/icons/linkedin.svg"
                        width={21}
                        height={20}
                        alt="linkedin icon"
                      />
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}
