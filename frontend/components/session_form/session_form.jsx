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
        const user2 = Object.assign({}, {
          email: 'Guest@yahoo.com',
          password: '123456'
        })


        if (this.props.formType === 'Login') {
          this.props.processForm(user).then(this.closeModal)
        } else if (this.props.formType === 'Signup') {
          this.props.processLoginForm(user2).then(this.closeModal)
        }

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
                    <input className="modal-button1"
                      type='submit'
                      value='Continue with Demo'
                      onClick={this.handleDemoSubmit}
                    />
                </div>
                <br />
                {this.renderErrors()}
                <div className="or-with-bars">or</div>
                <div className="modal-form">
                  <br/>
                  <label>
                    <input type="text"
                      placeholder="Your email address"
                      value={this.state.email}
                      onChange={this.update('email')}
                      className="modal-input"
                    />
                  </label>
                  <br/>
                  <label>
                    <input type="password"
                      placeholder="Your password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="modal-input"
                    />
                  </label>
                  <br/>
                  <input className="modal-button2" type="submit" value={this.props.formType} />
                  <p className="terms">When registering, you agree that we may use your provided data for the registration and to send you notifications on our products and services. You can unsubscribe from notifications at any time in your settings. For additional info please refer to our Privacy Policy.</p>
                </div>
              </form>
            </div>
          </div>
        );
      }
    }
export default withRouter(SessionForm);
    