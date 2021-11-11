import { renderHook } from '@testing-library/react-hooks';
import useRefEvents from './useRefEvents';

describe('useRefEvents hook', () => {
  it('should return hasValue true if has value', () => {
    const { result } = renderHook(() => useRefEvents({ current: { value: 'foo', addEventListener: jest.fn } }));

    expect(result.current.hasValue).toBeTruthy();
  });

  it('should return hasValue false if has not value', () => {
    const { result } = renderHook(() => useRefEvents({ current: { value: '', addEventListener: jest.fn } }));

    expect(result.current.hasValue).toBeFalsy();
  });
});
