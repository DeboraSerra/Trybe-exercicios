import React from "react";
import PropTypes from 'prop-types';

class PositionField extends React.Component {
  render() {
    const { handleChange, createPositionAlert, value } = this.props
    return (
      <textarea
        className="position"
        maxLength={40}
        name="position"
        onChange={handleChange}  
        onMouseEnter={createPositionAlert}
        placeholder="Position"
        value={value}
        autoComplete='off'    
      ></textarea>
    )
  }
}

PositionField.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  createPositionAlert: PropTypes.func.isRequired,
}

export default PositionField;