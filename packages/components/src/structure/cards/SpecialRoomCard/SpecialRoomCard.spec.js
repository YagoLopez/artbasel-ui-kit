import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import SpecialRoomCard from './SpecialRoomCard';
import { example } from './SpecialRoomCard.example';

console.error = jest.fn();

describe('Tests for X component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <SpecialRoomCard
        title={example.title}
        artistName={example.artistName}
        sectorsData={example.sectorsData}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
        roomLink={example.roomLink}
        imageUrl={example.imageUrl}
        openingSoon={example.openingSoon}
        visited={example.visited}
        show={example.show}
        unavailableToView={example.unavailableToView}
        selectMode={example.selectMode}
        collection={example.collection}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should not render the component without image prop', () => {
    render(
      <SpecialRoomCard
        title={example.title}
        artistName={example.artistName}
        sectorsData={example.sectorsData}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
        roomLink={example.roomLink}
        openingSoon={example.openingSoon}
        visited={example.visited}
        show={example.show}
        unavailableToView={example.unavailableToView}
        selectMode={example.selectMode}
        collection={example.collection}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without linkRenderer prop', () => {
    render(
      <SpecialRoomCard
        title={example.title}
        artistName={example.artistName}
        sectorsData={example.sectorsData}
        roomLink={example.roomLink}
        imageUrl={example.imageUrl}
        openingSoon={example.openingSoon}
        visited={example.visited}
        show={example.show}
        unavailableToView={example.unavailableToView}
        selectMode={example.selectMode}
        collection={example.collection}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without title prop', () => {
    render(
      <SpecialRoomCard
        artistName={example.artistName}
        ownerAccount={example.ownerAccount}
        theme={example.theme}
        sectorsData={example.sectorsData}
        linkRenderer={(link, children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
        roomLink={example.roomLink}
        ownerAccountLink={example.ownerAccountLink}
        imageUrl={example.imageUrl}
        openingSoon={example.openingSoon}
        visited={example.visited}
        show={example.show}
        unavailableToView={example.unavailableToView}
        selectMode={example.selectMode}
        collection={example.collection}
      />,
    );
    expect(console.error).toBeCalled();
  });
});
