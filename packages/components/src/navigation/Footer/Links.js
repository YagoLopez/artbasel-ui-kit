import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from '../../structure/Accordion';
import { Col } from '../../structure/Grid';

const Links = (({ cols, linkRenderer }) => {
  const buildLink = ({ link, label, target }) => {
    return <li key={label} className="mt-4 mt-md-3">{linkRenderer(link, label, target)}</li>;
  };

  const buildEntry = ({ title, data }) => {
    return <>
      <h5 className="header-uppercase-2 text-white mt-8 mb-5">{title}</h5>
      <ul className="list-unstyled mb-0">
      {data.map(element => buildLink(element))}
  </ul>
    </>;
  };

  const buildCols = () => {
    return cols.map((col, index) => {
      return <Col key={index} className="mb-4 mb-md-0">
        {col.map(entry => buildEntry(entry))}
      </Col>;
    });
  };

  const buildMobileLinks = () => {
    const mobileRows = [].concat(...cols);

    return <Accordion theme='dark'>
            {mobileRows.map((row, index) => {
              return <Accordion.Item key={index} eventKey={index}>
              <Accordion.Header size='l'>{row.title}</Accordion.Header>
               <Accordion.Body>
                <ul className='list-unstyled pb-5'>
                 {row.data.map(data => buildLink(data))}
                </ul>
                  </Accordion.Body>
                </Accordion.Item>;
            })}

</Accordion>;
  };

  return (<>
    <div className="row d-none d-md-flex mb-md-10 mb-lg-12 mb-xl-14 mb-xxl-16" data-testid="mch-footer-links">
            {buildCols()}
        </div>
        <div className="row d-flex d-md-none" data-testid="mch-footer-mobile-links">
          {buildMobileLinks()}
      </div>
  </>

  );
});

Links.propTypes = {
  cols: [PropTypes.shape({
    entries: [PropTypes.shape({
      title: PropTypes.string,
      data: [PropTypes.shape({
        label: PropTypes.string,
        link: PropTypes.string,
      })],
    })],

  })],
  linkRenderer: PropTypes.func.isRequired,
};

export default Links;
