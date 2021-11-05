import { cleanup } from '@testing-library/react';
import { truncateText } from './truncateText';

describe('Test for truncateText util fn', () => {
  afterEach(cleanup);

  test('Should return correct values', () => {
    const text = 'Lorem ipsum dolor sit amet, co';
    const mocked = {
      state: false,
      text,
    };

    expect(truncateText(text, 30)).toEqual(mocked);
  });

  test('Should return correct values', () => {
    const text = 'Lorem ipsum dolor sit amet, cons';
    const truncatedText = 'Lorem ipsum dolor sit amet,';
    const mocked = {
      state: true,
      text: truncatedText,
    };

    expect(truncateText(text, 30)).toEqual(mocked);
  });
});
