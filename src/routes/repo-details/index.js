import React, { PureComponent } from 'react'
import axios from 'axios'

import Error from 'components/error'
import RepoDetail from 'components/repo-detail'


class RepoDetails extends PureComponent {
  state = {
    loading: true,
    repo: {},
    error: null
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/repos/${this.props.match.params.username}/${this.props.match.params.reponame}`)
      .then(response => {
        const repo = response.data

        this.setState({
          repo,
          loading: false
        })
      })
      .catch(error => {
        this.setState({
          error: 'Please check the URL',
          loading: false
        })
      })
  }


  render() {
    const { repo, loading, error } = this.state

    if (error) {
      return (
        <Error error={error} />
      )
    }
    return (
      <div className="repos-list">
        {loading ?
          <p>Loading...</p> :
          <RepoDetail repo={repo} />
        }
      </div>
    )
  }
}

export default RepoDetails
