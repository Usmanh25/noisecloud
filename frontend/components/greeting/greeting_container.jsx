import { logout } from "../../actions/session_actions";
import Greeting from "./greeting"
import {connect} from "react-redux";
import {openModal} from "../../actions/modal_actions"

const mSTP = ({ session }) => ({
    currentUser: session.currentUser
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP,mDTP)(Greeting)