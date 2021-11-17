import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion component', () => {
  test('Render Accordion component', () => {
    render(<Accordion defaultActiveKey="0" >
    <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
          test
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>);

    const label = screen.queryByText('Accordion Item #1');
    const body = screen.queryByText('test');

    expect(label).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });
  test('check if the Accordion has the L size attribute', () => {
    const container = render(<Accordion defaultActiveKey="0" >
    <Accordion.Item eventKey="0">
    <Accordion.Header size="l">Accordion Item #1</Accordion.Header>
    <Accordion.Body>
          test
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>);
    expect(container.container.querySelector('.size-l')).toBeInTheDocument();
  });
});
