import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';
import { Link } from "react-router-dom";
import  './Login.css'


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
         errors: {
                email: "",
                password: ""
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors} = this.state;
        return(
        <div className="wrapper" >
             <div className="form-wrapper" style={{height:"300px",width:"500px",marginTop:"-20px"}}>
            <h1 style={{marginBottom: '40px'}}>Login</h1>
            <p className="grey-text text-darken-1">
                Don't have an account? <Link style={{ textDecoration: 'none', color: 'blue' }} to="/register">SignUp</Link>
              </p>
            <form onSubmit={ this.handleSubmit }>
                <div className="email">
                    <input
                    type="email"
                    placeholder="Email"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.email
                    })}
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                    {errors.email && (<div className="errorMessage">{errors.email}</div>)}
                </div>
                <div className="password">
                    <input
                    type="password"
                    placeholder="Password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password
                    })} 
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                    {errors.password && (<div className="errorMessage">{errors.password}</div>)}
                </div>
                <div className="createAccount" style={{marginLeft:"-200px",marginTop:"10px"}}>
              <p>
                <Link style={{ textDecoration: 'none', color: 'blue' }}to="/resetPassword">Forgot password?</Link>
              </p>
              </div>
              
                <div className="">
                    <button type="submit" className="deg_btn" style={{marginLeft: "150px"}}>
                        Login User
                    </button>

                </div>
            </form>
        </div>
        </div>
        )
    }
}

Login.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Login)