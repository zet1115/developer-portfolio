import React, { useEffect } from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';
import { contact } from '../portfolio';

const GithubProfileCard = () => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              {
                contact.image && (
                  <img
                    src={contact.image}
                    alt=""
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
                  />
                )
              }
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">
                DISCUSS A PROJECT OR JUST WANT TO SAY HI?
              </p>
              <p className="lead text-white mt-3">
                MY INBOX IS OPEN FOR ALL
              </p>
              <p className="text-white mt-3">{contact.bio}</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                {contact.location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
