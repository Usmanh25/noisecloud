import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {logout} = this.props
        return (
            <div>
              <div className="navbar">
                {/* <div className="holder"></div> */}
                <div className="nav-holder">
                  <Link className="logo" to="/discover">
                    ☁️
                  </Link>
                  <Link className="header-nav" to="/discover">
                    Home
                  </Link>
                  <Link className="header-nav" to="/discover">
                    Stream
                  </Link>
                  <button className="header-nav">Library</button>
                  <div className="discover-search">
                    <input type="text" placeholder="Search" />
                  </div>
                  <Link className="upload-header" to="/upload">
                    Upload
                  </Link>

                  <Link className="profile-header" to="/user/userId">
                    UserXYZ
                  </Link>

                  <Link className="logout-header" to="/">
                      <div onClick={logout}>Logout</div>
                  </Link>

                </div>
              </div>
            </div>
          );
        }
    }
      
export default NavBar;