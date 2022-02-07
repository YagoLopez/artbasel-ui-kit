import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from '../../../structure/Grid';
import { TeaserCard } from '../../../structure/cards/TeaserCard';

const CardSectionMobile = ({ cardSection, linkRenderer }) => {
  return (
    <Container className="mt-7">
      {cardSection.sectionTitle && (
        <Row gutter="g-0">
          <Col>
            <h5 className="mb-5">{cardSection.sectionTitle}</h5>
          </Col>
        </Row>
      )}
      {cardSection.cols.map((col) => col.cards.map((card) => (
          <Row gutter="g-0" className="mb-7" key={card.cardTitle}>
            <TeaserCard
              imageUrl={card.imageUrl}
              title={card.cardTitle}
              subTitle={card.cardSubtitle}
              variant={card.cardType.toLowerCase()}
            link={ card.link }
            linkRenderer={ linkRenderer }
            />
          </Row>
      )))}
    </Container>
  );
};

CardSectionMobile.propTypes = {
  cardSection: PropTypes.object.isRequired,
  linkRenderer: PropTypes.func.isRequired,
};

export default CardSectionMobile;
