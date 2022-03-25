import React from 'react';
import { connect } from "react-redux";
import SessionForm from "./session_form"
import { signup, removeSessionErrors } from "../../actions/session_actions"
import { openModal, closeModal } from "../../actions/modal_actions"


const mSTP = ({errors}) => ({
    errors: errors.session,
    formType: "Signup"
})

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    otherForm: (
        <button onClick={() => {
            dispatch(openModal('Login'))
            dispatch(removeSessionErrors()) 
            
        }}>
          Login
        </button>
    ),
    closeModal: () => {
        dispatch(closeModal());
        dispatch(removeSessionErrors())
    }

})

export default connect(mSTP, mDTP)(SessionForm)