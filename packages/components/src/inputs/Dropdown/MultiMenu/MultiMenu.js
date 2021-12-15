import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { Checkbox } from '../../Checkbox';
import { Button } from '../../../actions';
import { Row, Col } from '../../../structure/Grid';

const mapOptionsSelected = optionsSelected => optionsSelected.map(({ value }) => value);

const MultiMenu = ({
  options, optionsSelected, onChange, isShow, onClose,
}) => {
  const [value, setValue] = useState(optionsSelected);
  const [firstRender, setFirstRender] = useState(true);

  const handleOnChange = useCallback((e) => {
    const { checked, value: valueCheckbox } = e.target;
    const foundOption = options.find(o => o.value === valueCheckbox);
    if (checked) {
      setValue((prevState) => [...prevState, foundOption]);
    } else {
      setValue((prevState) => prevState.filter((v) => v.value !== foundOption.value));
    }
  }, []);

  const handleOnReset = useCallback(() => {
    setValue([]);
  }, [setValue]);

  const handleOnChangeParent = useCallback(() => {
    onChange(value);
    onClose();
  }, [value]);

  useEffect(() => {
    if (!firstRender && !isShow) {
      onChange(value);
    }
    setFirstRender(false);
  }, [isShow]);

  return (
    <Dropdown.Menu>
      <div className="dropdown-items is-multi">
        {options.map(({ value: v, label: l }) => (
          <Dropdown.Item
            as={Checkbox}
            className="d-flex"
            key={v}
            value={v}
            id={v}
            active={mapOptionsSelected(value).includes(v)}
            checked={mapOptionsSelected(value).includes(v)}
            onChange={handleOnChange}
            label={l}
            align="left"
          />
        ))}
      </div>
      <Row className="w-100" gutter="g-0">
        <Col className="d-flex" xs={6}>
          <Button
            variant="secondary"
            size="compact"
            className="w-100 m-5"
            onClick={handleOnReset}
          >
            Reset
          </Button>
        </Col>
        <Col className="d-flex" xs={6}>
          <Button size="compact" className="w-100 m-5" onClick={handleOnChangeParent}>
            Apply
          </Button>
        </Col>
      </Row>
    </Dropdown.Menu>
  );
};

MultiMenu.propTypes = {
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
  isShow: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

MultiMenu.defaultProps = {
  options: [],
  optionsSelected: [],
  onChange: () => null,
  onClose: () => null,
};

export default MultiMenu;
