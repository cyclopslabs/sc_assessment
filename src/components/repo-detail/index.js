import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function RepoDetail(props) {

    const { repo: { full_name, description, owner } } = props
    const { login, avatar_url } = owner
    return (
        <div className="card">
            <div className="card-header">
                Repository Details
            </div>
            <div className="card-body">
                <h5 className="card-title">{full_name}</h5>
                <p className="card-text">{description}</p>
                <hr className="my-4" />
                <h5 className="card-title">{login}</h5>
                <img src={avatar_url} alt={login} className="repo-avatar img-thumbnail"  />
            </div>
        </div>
    )
}

RepoDetail.propTypes = {
    repo: PropTypes.shape({
        full_name: PropTypes.string,
        description: PropTypes.string,
        owner: PropTypes.shape({
            login: PropTypes.string,
            avatar_url: PropTypes.string
        })
    })
}

export default RepoDetail