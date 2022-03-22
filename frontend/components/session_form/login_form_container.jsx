import { connect } from "react-redux";
import SessionForm from "./session_form"
import React from "react"
import {login, removeSessionErrors} from "../../actions/session_actions"
import { openModal, closeModal } from "../../action/modal_actions"


const mSTP = ({errors}) => ({
    errors: errors.session,
    formType: "login"
})

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
          Signup
        </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionForm)