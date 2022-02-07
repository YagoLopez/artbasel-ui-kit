import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from '../../../actions/ButtonIcon';

const CollectionLink = ({
  isUserLoggedIn, loggedCollectionUrl, unloggedCollectionUrl, linkRenderer,
}) => {
  const url = useMemo(() => (isUserLoggedIn ? loggedCollectionUrl : unloggedCollectionUrl),
    [isUserLoggedIn, loggedCollectionUrl, unloggedCollectionUrl]);

  return linkRenderer(url, <ButtonIcon icon="collections" />);
};

CollectionLink.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
  loggedCollectionUrl: PropTypes.string.isRequired,
  unloggedCollectionUrl: PropTypes.string.isRequired,
  linkRenderer: PropTypes.func.isRequired,
};

export default CollectionLink;
