import React from 'react'
import PropTypes from 'prop-types'

function RepoListItem(props) {

    const { repo, index, onClick } = props
    return (
        <tr className="c:pointer" onClick={onClick}> 
            <td>{index}</td>
            <td>{repo.full_name}</td>
        </tr>
    )
}

RepoListItem.propTypes = {
    index: PropTypes.number,
    full_name: PropTypes.string,
    onClick: PropTypes.func
}

export default RepoListItem