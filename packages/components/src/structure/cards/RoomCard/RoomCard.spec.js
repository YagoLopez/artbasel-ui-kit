import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import RoomCard from './RoomCard';
import { example } from './RoomCard.example';

console.error = jest.fn();

describe('Tests for X component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <RoomCard
        title={example.title}
        collaboratedAccounts={example.collaboratedAccounts}
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
        type={example.type}
        imageUrl={example.imageUrl}
        liveChat={example.liveChat}
        openingSoon={example.openingSoon}
        visited={example.visited}
        curator={example.curator}
        show={example.show}
        unavailableToView={example.unavailableToView}
        selectMode={example.selectMode}
        onCollectionAdd={example.onCollectionAdd}
      />,
    );
    expect(screen.queryByText(example.title)).toBeInTheDocument();
  });

  test('Should not render the component without image prop', () => {
    render(
      <RoomCard
        title={example.title}
        collaboratedAccounts={example.collaboratedAccounts}
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
        type={example.type}
        liveChat={example.liveChat}
        openingSoon={example.openingSoon}
        visited={example.visited}
        curator={example.curator}
        show={example.show}
        unavailableToView={example.unavailableToView}
        selectMode={example.selectMode}
        onCollectionAdd={example.onCollectionAdd}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without linkRenderer prop', () => {
    render(
      <RoomCard
        title={example.title}
        collaboratedAccounts={example.collaboratedAccounts}
        ownerAccount={example.ownerAccount}
        theme={example.theme}
        sectorsData={example.sectorsData}
        roomLink={example.roomLink}
        ownerAccountLink={example.ownerAccountLink}
        type={example.type}
        imageUrl={example.imageUrl}
        liveChat={example.liveChat}
        openingSoon={example.openingSoon}
        visited={example.visited}
        curator={example.curator}
        show={example.show}
        unavailableToView={example.unavailableToView}
        selectMode={example.selectMode}
        onCollectionAdd={example.onCollectionAdd}
      />,
    );
    expect(console.error).toBeCalled();
  });

  test('Should not render the component without title prop', () => {
    render(
      <RoomCard
        collaboratedAccounts={example.collaboratedAccounts}
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
        type={example.type}
        imageUrl={example.imageUrl}
        liveChat={example.liveChat}
        openingSoon={example.openingSoon}
        visited={example.visited}
        curator={example.curator}
        show={example.show}
        unavailableToView={example.unavailableToView}
        selectMode={example.selectMode}
        onCollectionAdd={example.onCollectionAdd}
      />,
    );
    expect(console.error).toBeCalled();
  });
});
