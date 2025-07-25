import { connect } from "react-redux";
import SessionForm from "./session_form"
import React from "react"
import {login, removeSessionErrors} from "../../actions/session_actions"
import { openModal, closeModal } from "../../actions/modal_actions"


const mSTP = ({errors}) => {
    return {
        errors: errors.session,
        formType: "Login"
    }
}

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    otherForm: (
        <button onClick={() => {
            dispatch(openModal('Signup'))
            dispatch(removeSessionErrors()) 
        }}>
          Signup
        </button>
    ),
    closeModal: () => {
        dispatch(closeModal());
        dispatch(removeSessionErrors())
    },
    removeErrors: () => dispatch(removeSessionErrors())
})

export default connect(mSTP, mDTP)(SessionForm)