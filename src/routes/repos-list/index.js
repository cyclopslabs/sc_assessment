import React, { PureComponent } from 'react'
import axios from 'axios'

import history from 'history.js'
import Error from 'components/error'
import RepoListItem from 'components/repo-list-item'


class ReposList extends PureComponent {
  state = {
    reposList: [],
    loading: true
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/repositories')
      .then(response => {
        const reposList = response.data

        this.setState({
          reposList,
          loading: false
        })
      })
      .catch(error => {
        this.setState({
          error,
          loading: false
        })
      })
  }

  renderListItem = (repo, idx) => {
    function onClickListItem() {
      const {name, owner: {login}  } = repo
      history.push(`/repo/${login}/${name}`)
    }
    return (
      <RepoListItem key={repo.id} repo={repo} index={idx} onClick={onClickListItem} />
    )
  }

  render() {
    const { error, reposList, loading } = this.state

    if (error) {
      return (
        <Error error={error} />
      )
    }
    return (
      <div className="repos-list">
        {loading ?
          <p>Loading...</p> :
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {reposList.map((repo, idx) => {
                return this.renderListItem(repo, idx)
              })}
            </tbody>

          </table>
        }
      </div>
    )
  }
}

export default ReposList
