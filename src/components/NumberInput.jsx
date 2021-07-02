import React from 'react'
import PropTypes from 'prop-types'

const NumberInput = ({name}) => {
    return (
        <div>
            <label>
                {name}: <input type="text" name="" id="" />
            </label>
        </div>
    )
}

NumberInput.propTypes = {
    name: PropTypes.string,
};

export default NumberInput
