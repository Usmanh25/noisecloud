import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {logout, currentUser} = this.props
        return (
            <div>
              <div className="navbar">
                <div className="nav-holder">
                  <div className="firstbar"></div>
                  <Link className="logo" to="/discover">
                    ☁️
                  </Link>
                  <Link className="header-nav" to="/discover">
                    Home
                  </Link>
                  <a className="header-nav" target='_blank' href="https://github.com/usmanh25">
                    Github
                  </a>
                  <a className="header-nav" target='_blank' href="https://www.linkedin.com/in/usman-hameed-5486b11b0/">
                    LinkedIn
                  </a>
                  <div className="discover-search">
                    <input type="text" placeholder="Search" />
                  </div>
                  <Link className="header-nav" to="/upload">
                    Upload
                  </Link>

                  <Link className="header-nav" to={`/users/${currentUser.id}`}>
                    { currentUser.email.slice(0, currentUser.email.indexOf('@')) }
                  </Link>

                  <Link className="header-nav" to="/">
                      <div onClick={logout}>Logout</div>
                  </Link>

                </div>
              </div>
            </div>
          );
        }
    }
      
export default NavBar;