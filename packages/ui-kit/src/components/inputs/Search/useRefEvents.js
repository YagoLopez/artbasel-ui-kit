import {
  useEffect, useState, useCallback,
} from 'react';

const useRefEvents = (refElem) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleFocusOut = useCallback(() => {
    setIsFocus(false);
  }, []);

  useEffect(() => {
    if (refElem.current) {
      refElem.current.addEventListener('focus', handleFocus);
      refElem.current.addEventListener('focusout', handleFocusOut);
    }

    return () => {
      if (refElem.current) {
        refElem.current.removeEventListener('focus', handleFocus);
        refElem.current.removeEventListener('focusout', handleFocusOut);
      }
    };
  }, [refElem]);

  return {
    isFocus,
    hasValue: Boolean(refElem.current && refElem.current.value),
  };
};

export default useRefEvents;
