import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <h2>Sam's Club Assessment</h2>
        <p><em>JavaScript Framework Coding:</em></p>
        <ul>
          <li>Show a page to list all the repos from github using the api https://api.github.com/repositories</li>
          <li>This page should contain a list or table with name and url link</li>
          <li>Clicking on the link should take user to another page to show the repo name, repo description, owner name, and owner avatar.</li>
        </ul>
        <h3>Some decisions</h3>
        <p>In a technical assessment I never know how much or how little to do. In a small app like this it could be done without changing anything about the create-react-app structure but I wanted to demonstrate some architecture decisions that would allow a little scaleability. On the other hand I have included a link to the bootstrap cdn in the head of <code>public/index.html</code>. Which saved me some time from writing a bunch of classes for basic formatting of things like <code>.container</code></p>
        <p>The other decision that I made is to have a fresh API fetch on the details page instead of passing data down from the initial fetch. I did this because 1. it's easier in this sample app, and 2. it allows the details page to be refreshed or bookmarked and still work.</p>
        <p>Thank you for the opportunity.</p>
        <h3>Application</h3>
        <p><Link to="/repos-list">View the list of repos</Link></p>
      </div>
    )
  }
}

export default Home
