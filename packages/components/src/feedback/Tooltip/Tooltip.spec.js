import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { act } from 'react-dom/test-utils';
import Tooltip from './Tooltip';

const Component = (props) => (
  <Tooltip title='title' content='body' {...props}>
    <button data-testid="trigger-button">Button</button>
  </Tooltip>
);

describe('Tooltip component', () => {
  describe('when no hover or focus', () => {
    it('should not render popover', () => {
      act(() => {
        render(<Component />);
      });
      const popover = screen.queryByTestId('mch-popover');

      expect(popover).not.toBeInTheDocument();
    });
  });

  describe('on hover', () => {
    it('should render popover', () => {
      act(() => {
        render(<Component />);
      });

      const button = screen.getByTestId('trigger-button');
      act(() => {
        fireEvent.mouseOver(button);
      });

      const popover = screen.getByTestId('mch-popover');

      expect(popover).toBeInTheDocument();
    });

    it('popover header should contain the provided title', () => {
      act(() => {
        render(<Component />);
      });

      const button = screen.getByTestId('trigger-button');
      act(() => {
        fireEvent.mouseOver(button);
      });

      const header = screen.getByTestId('mch-popover-header');
      const title = screen.getByTestId('mch-popover-title');

      expect(header).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(header.firstChild).toEqual(title);
      expect(title).toHaveTextContent('title');
    });

    it('popover header should contain the close button', () => {
      act(() => {
        render(<Component />);
      });

      const button = screen.getByTestId('trigger-button');
      act(() => {
        fireEvent.mouseOver(button);
      });

      const header = screen.getByTestId('mch-popover-header');
      const closeButton = screen.getByTestId('mch-button-icon');

      expect(header).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
      expect(header.lastChild).toEqual(closeButton);
      expect(closeButton).toHaveClass('btn-close');
    });

    it('popover body should contain the provided content', () => {
      act(() => {
        render(<Component />);
      });

      const button = screen.getByTestId('trigger-button');
      act(() => {
        fireEvent.mouseOver(button);
      });

      const body = screen.getByTestId('mch-popover-body');

      expect(body).toBeInTheDocument();
      expect(body).toHaveTextContent('body');
    });
  });

  describe('on focus', () => {
    it('should render popover', () => {
      act(() => {
        render(<Component />);
      });

      const button = screen.getByTestId('trigger-button');
      act(() => {
        fireEvent.focus(button);
      });

      const popover = screen.getByTestId('mch-popover');

      expect(popover).toBeInTheDocument();
    });

    it('popover header should contain the provided title', () => {
      act(() => {
        render(<Component />);
      });

      const button = screen.getByTestId('trigger-button');
      act(() => {
        fireEvent.focus(button);
      });

      const header = screen.getByTestId('mch-popover-header');
      const title = screen.getByTestId('mch-popover-title');

      expect(header).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(header.firstChild).toEqual(title);
      expect(title).toHaveTextContent('title');
    });

    it('popover header should contain the close button', () => {
      act(() => {
        render(<Component />);
      });

      const button = screen.getByTestId('trigger-button');
      act(() => {
        fireEvent.mouseOver(button);
      });

      const header = screen.getByTestId('mch-popover-header');
      const closeButton = screen.getByTestId('mch-button-icon');

      expect(header).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
      expect(header.lastChild).toEqual(closeButton);
      expect(closeButton).toHaveClass('btn-close');
    });

    it('popover body should contain the provided content', () => {
      act(() => {
        render(<Component />);
      });

      const button = screen.getByTestId('trigger-button');
      act(() => {
        fireEvent.focus(button);
      });

      const body = screen.getByTestId('mch-popover-body');

      expect(body).toBeInTheDocument();
      expect(body).toHaveTextContent('body');
    });
  });

  describe('when focus out popover', () => {
    it('should not hide popover', () => {
      act(() => {
        render(<Component />);
      });

      const button = screen.getByTestId('trigger-button');
      act(() => {
        fireEvent.focusIn(button);
      });

      let popover = screen.getByTestId('mch-popover');

      expect(popover).toHaveClass('show');

      act(() => {
        fireEvent.focusOut(button);
      });

      popover = screen.getByTestId('mch-popover');

      expect(popover).toHaveClass('show');
    });
  });

  describe('when click on close button', () => {
    it('should hide popover', () => {
      act(() => {
        render(<Component />);
      });

      const button = screen.getByTestId('trigger-button');
      act(() => {
        fireEvent.focusIn(button);
      });

      let popover = screen.getByTestId('mch-popover');

      expect(popover).toHaveClass('show');

      const closeButton = screen.getByTestId('mch-button-icon');
      act(() => {
        fireEvent.click(closeButton);
      });

      popover = screen.getByTestId('mch-popover');

      expect(popover).not.toHaveClass('show');
    });
  });

  describe('when escape pressed', () => {
    it('should hide popover', () => {
      act(() => {
        render(<Component />);
      });

      const button = screen.getByTestId('trigger-button');
      act(() => {
        fireEvent.focusIn(button);
      });

      let popover = screen.getByTestId('mch-popover');

      expect(popover).toHaveClass('show');

      act(() => {
        fireEvent.keyDown(button, {
          key: 'Escape', code: 'Escape', charCode: 27, keyCode: 27,
        });
      });

      popover = screen.getByTestId('mch-popover');

      expect(popover).not.toHaveClass('show');
    });
  });

  describe('when other key (not escape) pressed', () => {
    it('should not hide popover', () => {
      act(() => {
        render(<Component />);
      });

      const button = screen.getByTestId('trigger-button');
      act(() => {
        fireEvent.focusIn(button);
      });

      let popover = screen.getByTestId('mch-popover');

      expect(popover).toHaveClass('show');

      act(() => {
        fireEvent.keyDown(button, {
          key: 'Enter', code: 'Enter', charCode: 13, keyCode: 13,
        });
      });

      popover = screen.getByTestId('mch-popover');

      expect(popover).toHaveClass('show');
    });
  });
});
