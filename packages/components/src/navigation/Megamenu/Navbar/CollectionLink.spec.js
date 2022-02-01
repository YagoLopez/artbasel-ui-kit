import React from 'react';
import '@testing-library/jest-dom';
import {
  render, screen,
} from '@testing-library/react';

import CollectionLink from './CollectionLink';

describe('CollectionLink component', () => {
  describe('renderer', () => {
    test('when user is logged in then should render logged collection link', () => {
      const data = {
        isUserLoggedIn: true,
        loggedCollectionUrl: '/collections/my-collections',
        unloggedCollectionUrl: "/auth/login?return='/collections/my-collections'",
      };

      render(<CollectionLink {...data} />);

      expect(screen.getByRole('link')).toHaveAttribute('href', data.loggedCollectionUrl);
    });

    test('when user is logged out then should render unlogged collection link', () => {
      const data = {
        isUserLoggedIn: false,
        loggedCollectionUrl: '/collections/my-collections',
        unloggedCollectionUrl: "/auth/login?return='/collections/my-collections'",
      };

      render(<CollectionLink {...data} />);

      expect(screen.getByRole('link')).toHaveAttribute('href', data.unloggedCollectionUrl);
    });
  });
});
