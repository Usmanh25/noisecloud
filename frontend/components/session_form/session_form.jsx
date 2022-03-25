import React from "react";
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    update(field) {
        return e => {this.setState({[field]: e.currentTarget.value})}
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state)
        this.props.processForm(user).then(this.closeModal)
    }

    handleDemoSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, {
          email: 'Guest@gmail.com',
          password: '123456'
        })
        this.props.processForm(user).then(this.closeModal)
    }

    closeModal() {
      this.props.closeModal()
      this.props.removeErrors()
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }
    
    render() {
        return (
          <div className='login-background'>
            <div className="login-form-container">
              <form onSubmit={this.handleSubmit} className="login-form-box">
                <br/>
                <div modal-social-login>
                    <input className="modal-button"
                      type='submit'
                      value='Demo'
                      onClick={this.handleDemoSubmit}
                    />
                </div>
                <br />
                {this.renderErrors()}
                <div className="modal-divider">
                  <p>or</p>
                </div>
                <div className="modal-form">
                  <br/>
                  <label>
                    <input type="text"
                      placeholder="email"
                      value={this.state.email}
                      onChange={this.update('email')}
                      className="modal-input"
                    />
                  </label>
                  <br/>
                  <label>
                    <input type="password"
                      placeholder="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="modal-input"
                    />
                  </label>
                  <br/>
                  <input className="modal-button" type="submit" value={this.props.formType} />
                  <p>We won't be using your email for anything, except to take up space in our database. You can never unsubscribe - you're here forever!</p>
                  <p>We may use information you provide us to do absolutely nothing.</p>
                </div>
              </form>
            </div>
          </div>
        );
      }
    }
    
    export default withRouter(SessionForm);
    