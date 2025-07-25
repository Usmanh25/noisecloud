import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions.js'
import NavBar from './navbar.jsx'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(NavBar)