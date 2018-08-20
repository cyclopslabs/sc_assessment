import React from 'react'
import PropTypes from 'prop-types'

function Error(props) {

    console.log("error", props.error);
    return <p className="text-danger">An error occured: {props.error}</p>
}

Error.propTypes = {
    error: PropTypes.string
}

export default Error