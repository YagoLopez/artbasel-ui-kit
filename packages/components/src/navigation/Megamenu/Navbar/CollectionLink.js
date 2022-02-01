import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from '../../../actions/ButtonIcon';

const CollectionLink = ({ isUserLoggedIn, loggedCollectionUrl, unloggedCollectionUrl }) => {
  const url = useMemo(() => (isUserLoggedIn ? loggedCollectionUrl : unloggedCollectionUrl),
    [isUserLoggedIn, loggedCollectionUrl, unloggedCollectionUrl]);

  return <div>
        <a href={url}><ButtonIcon icon="collections" /></a>

  </div>;
};

CollectionLink.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
  loggedCollectionUrl: PropTypes.string.isRequired,
  unloggedCollectionUrl: PropTypes.string.isRequired,
};

export default CollectionLink;
