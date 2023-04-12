import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import AppTabs from "../components/AppTabs";

export default function index() {
  return (
    <div>
      <section className="first-sec">
        <div className="d-block d-md-flex justify-content-end align-items-center">
          <div className="first__info">
            <h1 className="first__title fw-bold mb-3">
              The Perfect Wedding Invitation Video for you
            </h1>
            <p className="first__text">
              Your wedding is your most important day, we want to make sure so
              is your invitation
            </p>
            <Link href="/">
              <a className="d-inline-flex align-items-center bg-custom-green rounded-pill py-3 px-4 fw-semibold text-white fs-18">
                <span className="d-block me-2">Plan Your Wedding With Us</span>
                <Image
                  src="/icons/arrow-right.svg"
                  alt="arrow icon"
                  width={18}
                  height={12}
                />
              </a>
            </Link>
          </div>
          <div className="d-none d-md-block">
            <Image
              src="/first-img.svg"
              alt="arrow icon"
              width={963}
              height={985}
            />
          </div>
        </div>
      </section>
      <section className="py-4 info-sec">
        <Container>
          <Row className="row-cols-2" sm={3} lg={4}>
            <Col className="text-center">
              <Image
                src="/info-1.svg"
                alt="info items icon"
                width={173}
                height={173}
              />
              <h3 className="info-sec__title fw-semibold mb-2">1000+</h3>
              <p className="fw-medium info-sec__text">Total Items</p>
            </Col>
            <Col className="text-center">
              <Image
                src="/info-2.svg"
                alt="info downloads icon"
                width={173}
                height={173}
              />
              <h3 className="info-sec__title fw-semibold mb-2">300k+</h3>
              <p className="fw-medium info-sec__text">Total Downloads</p>
            </Col>
            <Col className="text-center">
              <Image
                src="/info-3.svg"
                alt="info Customers icon"
                width={173}
                height={173}
              />
              <h3 className="info-sec__title fw-semibold mb-2">28892+</h3>
              <p className="fw-medium info-sec__text">Customers</p>
            </Col>
            <Col className="text-center">
              <Image
                src="/info-4.svg"
                alt="info rating icon"
                width={173}
                height={173}
              />
              <h3 className="info-sec__title fw-semibold mb-2">500+</h3>
              <p className="fw-medium info-sec__text">5* Ratings</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-4 categories-sec">
        <Container fluid className="mx-auto">
          <h2 className="title">Invite Categories</h2>
          <p className="text-styles">
            We have different invites categories help you create the exact
            invitation you want.
          </p>
          <Row className="row-cols-2 justify-content-center" sm={3} lg={"auto"}>
            <Col className="text-center">
              <Image
                src="/categories-1.jpg"
                alt="Beautiful Wedding Invites"
                width={169}
                height={210}
              />
              <p className="fs-18 color-custom-dark">
                Beautiful Wedding Invites
              </p>
            </Col>
            <Col className="text-center">
              <Image
                src="/categories-2.jpg"
                alt="Caricature Invites"
                width={169}
                height={210}
              />
              <p className="fs-18 color-custom-dark">Caricature Invites</p>
            </Col>
            <Col className="text-center">
              <Image
                src="/categories-3.jpg"
                alt="Engagement Invites"
                width={169}
                height={210}
              />
              <p className="fs-18 color-custom-dark">Engagement Invites</p>
            </Col>
            <Col className="text-center">
              <Image
                src="/categories-4.jpg"
                alt="Global Wedding Invitess"
                width={169}
                height={210}
              />
              <p className="fs-18 color-custom-dark">Global Wedding Invites</p>
            </Col>
            <Col className="text-center">
              <Image
                src="/categories-5.jpg"
                alt="Interactive Invites"
                width={169}
                height={210}
              />
              <p className="fs-18 color-custom-dark">Interactive Invites</p>
            </Col>
            <Col className="text-center">
              <Image
                src="/categories-6.jpg"
                alt="Invitekaro App Invites"
                width={169}
                height={210}
              />
              <p className="fs-18 color-custom-dark">Invitekaro App Invites</p>
            </Col>
            <Col className="text-center">
              <Image
                src="/categories-7.jpg"
                alt="Islamic Wedding Invites"
                width={169}
                height={210}
              />
              <p className="fs-18 color-custom-dark">Islamic Wedding Invites</p>
            </Col>
            <Col className="text-center">
              <Image
                src="/categories-8.jpg"
                alt="Islamic Wedding Invites"
                width={169}
                height={210}
              />
              <p className="fs-18 color-custom-dark">Save The Date</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-4">
        <Container>
          <h2 className="title">Lively E-CARD Designs</h2>
          <p className="text-styles mb-lg-5">
            On your special day, you deserve the best. Invitekaro's technology
            works seamlessly to combine multiple layers of animations to bring
            your wedding cards to life.
          </p>
          <Row className="row-cols-1" md={2} lg={3}>
            <Col className="mb-3 mb-lg-5">
              <div className="text-center p-3 bg-custom-lavendar card-sec">
                <div className="card-sec__box custom-imgbox">
                  <Image
                    src="/icons/flowers.svg"
                    alt="flowers icon"
                    className="d-block mx-auto"
                    width={88}
                    height={98}
                  />
                </div>
                <h5 className="fw-medium color-opacity-dark">
                  Personalized Cards
                </h5>
                <p className="mb-0">
                  Your wedding is about you, so everything should be as perfect
                  as the couple you make and so are your wedding invitations
                  video. Invitakaro gives you the ability to choose and create
                  multiple designs and types of invitation cards
                </p>
              </div>
            </Col>
            <Col className="mb-3 mb-lg-5">
              <div className="text-center p-3 bg-custom-green-light card-sec">
                <div className="card-sec__box custom-imgbox">
                  <Image
                    src="/icons/table.svg"
                    alt="table icon"
                    className="d-block mx-auto"
                    width={82}
                    height={97}
                  />
                </div>
                <h5 className="fw-medium color-opacity-dark">
                  Awesome Effects
                </h5>
                <p className="mb-0">
                  Your wedding is about you, so everything should be as perfect
                  as the couple you make and so are your wedding invitations
                  video. Invitakaro gives you the ability to choose and create
                  multiple designs and types of invitation cards
                </p>
              </div>
            </Col>
            <Col className="mb-3 mb-lg-5">
              <div className="text-center p-3 bg-custom-pink card-sec">
                <div className="card-sec__box custom-imgbox">
                  <Image
                    src="/icons/mail.svg"
                    alt="mail icon"
                    className="d-block mx-auto"
                    width={82}
                    height={97}
                  />
                </div>
                <h5 className="fw-medium color-opacity-dark">Wedding Cards</h5>
                <p className="mb-0">
                  Your wedding is about you, so everything should be as perfect
                  as the couple you make and so are your wedding invitations
                  video. Invitakaro gives you the ability to choose and create
                  multiple designs and types of invitation cards
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-4">
        <Container>
          <h2 className="title">Invitations by Category</h2>
          <p className="text-styles mb-lg-5">
            Browse through our extensive Wedding, Engagement, Save the date and
            Birthday Invitations library.
          </p>
          <AppTabs />
          <div className="d-flex justify-content-center mt-3">
            <Link href="/">
              <a className="bg-custom-green-dark py-3 px-5 d-inline-block text-white rounded-pill fs-18 fw-semibold">
                View All Card
              </a>
            </Link>
          </div>
        </Container>
      </section>
      <section className="py-4">
        <Container>
          <h2 className="title">Our Customer Feedback</h2>
          <p className="text-styles mb-lg-5">
            We pride ourselves for the service we provide. It is our endeavour
            to make your Wedding Invitation Video Selection and Creation process
            extremely satisfying
          </p>
        </Container>
        <div className="py-2 bg-custom-green carousel-sec">
          <Carousel
            indicators={false}
            nextIcon={
              <span aria-hidden="true" className="carousel-next-icon">
                <Image
                  src="/icons/next-ic.svg"
                  alt="next icon"
                  width={66}
                  height={66}
                />
              </span>
            }
            prevIcon={
              <span aria-hidden="true" className="carousel-prev-icon">
                <Image
                  src="/icons/prev-ic.svg"
                  alt="prev icon"
                  width={66}
                  height={66}
                />
              </span>
            }
          >
            <Carousel.Item>
              <Container>
                <Row className="row-cols-1" lg={2}>
                  <Col className="mb-2">
                    <div className="bg-white p-3 py-sm-4 px-sm-5 h-100 card-decor">
                      <div className="d-flex flex-column mb-3 flex-sm-row align-items-center justify-content-center">
                        <div className="rounded-pill mb-2 mb-sm-0 me-sm-3 card-img">
                          <Image
                            src="/thumb-1.jpg"
                            alt="Ashita Kumar"
                            className="d-block rounded-pill card-img"
                            width={86}
                            height={86}
                          />
                        </div>
                        <div>
                          <h5 className="fs-6">Ashita Kumar</h5>
                          <ul className="d-flex justify-content-center justify-content-sm-start align-items-center list-stars">
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-center fw-medium">
                        I got my wedding e-invite from Invitekaro and it proved
                        to be the best decision. Invitekaro team is highly
                        professional… read more
                      </p>
                    </div>
                  </Col>
                  <Col className="mb-2">
                    <div className="bg-white p-3 py-sm-4 px-sm-5 h-100 card-decor">
                      <div className="d-flex flex-column mb-3 flex-sm-row align-items-center justify-content-center">
                        <div className="rounded-pill mb-2 mb-sm-0 me-sm-3 card-img">
                          <Image
                            src="/thumb-2.jpg"
                            alt="Dr. Darshna Mishra"
                            className="d-block rounded-pill card-img"
                            width={86}
                            height={86}
                          />
                        </div>
                        <div>
                          <h5 className="fs-6">Dr. Darshna Mishra</h5>
                          <ul className="d-flex justify-content-center justify-content-sm-start align-items-center list-stars">
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto rounded-pill card-img"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-center fw-medium">
                        Wonderful designs on the website. They are very
                        cooperative and understand individual’s taste and
                        requirements. Very
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row className="row-cols-1" lg={2}>
                  <Col className="mb-2">
                    <div className="bg-white p-3 py-sm-4 px-sm-5 h-100 card-decor">
                      <div className="d-flex mb-3 flex-column flex-sm-row align-items-center justify-content-center">
                        <div className="rounded-pill mb-2 mb-sm-0 me-sm-3 card-img">
                          <Image
                            src="/thumb-1.jpg"
                            alt="Ashita Kumar"
                            className="d-block rounded-pill card-img"
                            width={86}
                            height={86}
                          />
                        </div>
                        <div>
                          <h5 className="fs-6">Ashita Kumar</h5>
                          <ul className="d-flex justify-content-center justify-content-sm-start align-items-center list-stars">
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-center fw-medium">
                        I got my wedding e-invite from Invitekaro and it proved
                        to be the best decision. Invitekaro team is highly
                        professional… read more
                      </p>
                    </div>
                  </Col>
                  <Col className="mb-2">
                    <div className="bg-white p-3 py-sm-4 px-sm-5 h-100 card-decor">
                      <div className="d-flex flex-column mb-3 flex-sm-row align-items-center justify-content-center">
                        <div className="rounded-pill mb-2 mb-sm-0 me-sm-3 card-img">
                          <Image
                            src="/thumb-2.jpg"
                            alt="Dr. Darshna Mishra"
                            className="d-block rounded-pill card-img"
                            width={86}
                            height={86}
                          />
                        </div>
                        <div>
                          <h5 className="fs-6">Dr. Darshna Mishra</h5>
                          <ul className="d-flex justify-content-center justify-content-sm-start align-items-center list-stars">
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto rounded-pill card-img"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                            <li className="mr-2">
                              <Image
                                src="/icons/star.svg"
                                alt="star"
                                className="d-block mx-auto"
                                width={25}
                                height={25}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-center fw-medium">
                        Wonderful designs on the website. They are very
                        cooperative and understand individual’s taste and
                        requirements. Very
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </div>
  );
}
