import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, HashRouter } from 'react-router-dom'
import Logo from '../assets/img/advotic-logo.png'
import Dashboard from './Dashboard'

class App extends Component {

  constructor () {
    super()
    this.state = {}
	}

  render () {
    return (
      <HashRouter history={ Router.browserHistory }>
        <div className='app'>
          <div className="app-panel">
            <div className="panel-content">
              <div className="display-flex space-between">
                <div className="app-logo">
                  <img src={Logo} alt="" />
                </div>
                <div className="display-flex">
                  <div className="display-flex align-center" style={{marginRight: 8}}>
                    <div className="content-right" style={{marginRight: 8}}>
                      <div className="txt-site txt-10 txt-main txt-bold">Username</div>
                      <div className="txt-site txt-9 txt-primary">Company Name</div>
                    </div>
                    <button className="btn btn-circle btn-primary">
                      <i className="fa fa-lw fa-user" />
                    </button>
                  </div>
                  <button className="btn btn-circle btn-grey">
                    <i className="fa fa-lw fa-sign-out-alt" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="app-container">
            <div className="app-slide background-white">
              <div className="slide-list">
                <ul className="app-menu">
                  <li className="content">
                    <div className="list">
                      <div className="icn" style={{height: 24}}>
                        <i className="fa fa-lg fa-align-left" />
                      </div>
                      {/* <div className="ttl">Menu</div> */}
                    </div>
                  </li>
                  <NavLink to="/">
                    <li className="content">
                      <div className="list">
                        <div className="icn">
                          <i className="fa fa-lg fa-chart-line" />
                        </div>
                        <div className="ttl">Dashboard</div>
                      </div>
                    </li>
                  </NavLink>
                </ul> 
              </div>
            </div>

            <div className="app-main">
              <div className="app-place">
                <Dashboard />
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;
