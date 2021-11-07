import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  render () {
    const { users, isLoadding, isFirst, Error } = this.props
    return (
      isFirst ? <h1>欢迎,点击搜索</h1> :
        isLoadding ? <h1>Loading</h1> :
          Error ? <h1>Error</h1> :
            <div className="row">
              {
                users.map((userObj) => {
                  return (
                    <div key={userObj.id} className="card">
                      <a rel="noreferrer" href={userObj.html_url} target="_blank">
                        <img alt="head_portrait" src={userObj.avatar_url} style={{ width: '100px' }} />
                      </a>
                      <p className="card-text">{userObj.login}</p>
                    </div>
                  )
                })
              }

            </div>
    )
  }
}


