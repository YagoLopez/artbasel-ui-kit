import React from 'react';
import PropTypes from 'prop-types';

import { Container, Col, Row } from '../../../structure/Grid';
import { TeaserCard } from '../../../structure/cards/TeaserCard';

const CardSection = ({ cardSection }) => {
  return (
    <Col className="col-auto">
      <Container>
        {cardSection.sectionTitle && (
          <Row gutter="g-0">
            <Col>
              <h5 className="mb-5">{cardSection.sectionTitle}</h5>
            </Col>
          </Row>
        )}
        <Row gutter="g-0">
          {cardSection.cols.map((col, key5) => (
            <Col className="me-7" key={key5}>
              {col.cards.map((card, key6) => (
                <Row gutter="g-0" className="mb-7" key={key6}>
                  <TeaserCard
                    imageUrl={card.imageUrl}
                    title={card.cardTitle}
                    subTitle={card.cardSubtitle}
                    variant={card.cardType.toLowerCase()}
                    link={card.link}
                  />
                </Row>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </Col>
  );
};

CardSection.propTypes = {
  cardSection: PropTypes.object.isRequired,
};

export default CardSection;
