import React, { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from '../../../utils/Icon';
import { Container, Row, Col } from '../../Grid';

const LinkCard = ({
  variant,
  title,
  description,
  showDescription,
  onClick,
}) => {
  const isSecondary = useMemo(() => variant === 'secondary', [variant]);

  return (
    <Container
      data-testid="mch-link-card"
      fluid
      className={classNames('link-card', { secondary: isSecondary })}
      onClick={onClick}
    >
      <Row
        gutter="g-0"
        className={classNames('d-flex', {
          'd-md-none': showDescription,
          'd-md-flex': !showDescription,
        })}
      >
        <Col className="headline" xs={8}>
          <span className="headline-underline">{title}</span>
        </Col>
        <Col className="d-flex justify-content-end">
          <Icon name="chevron-right" size={24} />
        </Col>
      </Row>

      <Row
        gutter="g-0"
        className={classNames('headline', 'd-none', {
          'd-md-flex': showDescription,
          'd-md-none': !showDescription,
        })}
      >
        <span className="headline-underline">{title}</span>
      </Row>
      <Row
        gutter="g-0"
        className={classNames('d-none', 'd-md-flex', {
          'd-md-none': !showDescription,
        })}
      >
        <Col className="description" xs={8}>
          {description}
        </Col>
        <Col
          className={classNames(
            'd-flex',
            'justify-content-end',
            'align-items-center',
          )}
        >
          <Icon name="chevron-right" size={24} />
        </Col>
      </Row>
    </Container>
  );
};

LinkCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  showDescription: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
};

LinkCard.defaultProps = {
  variant: 'primary',
  description: '',
  showDescription: false,
  onClick: () => {},
};

export default LinkCard;
