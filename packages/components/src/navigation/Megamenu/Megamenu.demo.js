import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from '../../structure/Grid';
import { ProductTile } from '../../structure';
import Megamenu from './Megamenu';

import buyerAccountData from './buyerAccount.example.json';
import vipBuyerAccountData from './vipBuyerAccount.example.json';
import galleryAccountData from './galleryAccount.example.json';
import vipGalleryAccountData from './vipGalleryAccount.example.json';
import anonymousAccountData from './anonymousAccount.example.json';
import tiles from './ProductTilePage.example.json';

const BUYER_ACCOUNT = 'Buyer Account';
const ANONYMOUS_ACCOUNT = 'Anonymous Account';
const GALLERY_ACCOUNT = 'Gallery Account';

const MegamenuDemo = ({
  profile, menuData, loggedCollectionUrl, unloggedCollectionUrl, userData, welcomeHeader,
}) => {
  const [loginStatus, setLoginStatus] = useState(profile);

  useEffect(() => {
    setLoginStatus(profile);
  }, [profile]);

  const profileData = useMemo(() => {
    const { vipStatus } = userData;

    if (loginStatus === BUYER_ACCOUNT && vipStatus) {
      return vipBuyerAccountData;
    }

    if (loginStatus === BUYER_ACCOUNT && !vipStatus) {
      return buyerAccountData;
    }

    if (loginStatus === GALLERY_ACCOUNT && vipStatus) {
      return vipGalleryAccountData;
    }

    if (loginStatus === GALLERY_ACCOUNT && !vipStatus) {
      return galleryAccountData;
    }

    return anonymousAccountData;
  }, [profile, loginStatus, userData.vipStatus]);

  const isUserLoggedIn = useMemo(() => loginStatus !== ANONYMOUS_ACCOUNT);

  const handleOnLogout = () => setLoginStatus(ANONYMOUS_ACCOUNT);

  return (
    <div>
      <Megamenu
        onLogout={handleOnLogout}
        profileData={profileData}
        menuData={menuData}
        userData={{ ...userData, isUserLoggedIn }}
        loggedCollectionUrl={loggedCollectionUrl}
        unloggedCollectionUrl={unloggedCollectionUrl}
        welcomeHeader={welcomeHeader}
      />
      <Container className="px-5 px-lg-8 px-md-7">
        <Container>
          <Row gutter="gx-lg-8 gx-md-7 mb-xs-8">
            <Col>
              <h1 className="my-lg-13 my-md-12 my-10">Shop Artworks</h1>
            </Col>
          </Row>
          <Row gutter="gx-lg-8 gx-md-7 mb-xs-8">
            <Col></Col>
          </Row>
          <Row>
            {tiles.map((product, i) => {
              return (
                <Col
                  key={`col-${i}`}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={4}
                  xxl={4}
                  className="mb-lg-9 mb-md-9"
                >
                  <ProductTile
                    author={product.author}
                    productName={product.productName}
                    year={product.year}
                    image={product.image}
                    gallery="Gallery Placeholder"
                    price={product.price}
                    offer={product.offer}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    </div>
  );
};

MegamenuDemo.propTypes = {
  menuData: PropTypes.object.isRequired,
  profile: PropTypes.oneOf([BUYER_ACCOUNT, ANONYMOUS_ACCOUNT, GALLERY_ACCOUNT])
    .isRequired,
  loggedCollectionUrl: PropTypes.string.isRequired,
  unloggedCollectionUrl: PropTypes.string.isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vipStatus: PropTypes.bool.isRequired,
  }).isRequired,
  welcomeHeader: PropTypes.string.isRequired,

};

MegamenuDemo.defaultProps = {
  profile: ANONYMOUS_ACCOUNT,
  userData: {
    name: 'Jose Gumpert Ros',
    vipStatus: false,
  },
};

export default MegamenuDemo;
