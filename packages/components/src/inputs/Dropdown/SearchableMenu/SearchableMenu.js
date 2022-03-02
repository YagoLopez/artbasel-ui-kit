import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';

const SearchableMenu = ({
  options, optionsSelected, onChange, searchText,
}) => {
  const optionSelected = useMemo(() => optionsSelected[0] || {}, [
    optionsSelected,
  ]);

  const handleOnChange = useCallback((e) => {
    if (e?.target?.dataset?.value) {
      const option = options.find((o) => o.value === e.target.dataset.value);
      onChange(option || {});
    }
  }, []);

  return (
    <Dropdown.Menu>
      <div className="dropdown-items is-simple">
        {options.map(({ value: v, label: l }) => {
          // Find ocurrencies of the seached text
          const foundSearchText = l.match(new RegExp(searchText, 'ig'));
          return (
            <Dropdown.Item
              key={v}
              data-value={v}
              active={v === optionSelected.value}
              onClick={handleOnChange}
            >
              {searchText !== ''
                ? l
                  .split(new RegExp(searchText, 'ig'))
                  .reduce((acc, token, index) => {
                    if (index > 0) {
                      return [
                        ...acc,
                          <span
                            key={`span-${searchText}${index}`}
                            className="search-term"
                          >
                            {foundSearchText[index - 1]}
                          </span>,
                          token,
                      ];
                    }

                    return [token];
                  }, [])
                : l}
            </Dropdown.Item>
          );
        })}
      </div>
    </Dropdown.Menu>
  );
};

SearchableMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  optionsSelected: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,

      label: PropTypes.string.isRequired,
    }),
  ),
  onChange: PropTypes.func,
  searchText: PropTypes.string,
};

SearchableMenu.defaultProps = {
  options: [],
  optionsSelected: [],
  onChange: () => null,
  searchText: '',
};

export default SearchableMenu;
