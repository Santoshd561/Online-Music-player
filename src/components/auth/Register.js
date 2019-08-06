import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
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

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      age:"",
      
      errors: {}
    };
      
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

 

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      age:this.state.age
    };
    
    this.props.registerUser(newUser, this.props.history);
  };
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper" style={{width:"500px",marginTop:"-20px"}}>
              <h1>
                <b>Register</b> below
              </h1>
              <p >
                Already have an account? <Link style={{ textDecoration: 'none', color: 'blue' }} to="/login">Log in</Link>
              </p>
           
            <form noValidate onSubmit={this.onSubmit}>
              <div className="firstName">
              <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  placeholder="Name"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                
                <span className="errorMessage">{errors.name}</span>
              </div>
              <div className="email">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <span className="errorMessage">{errors.email}</span>
              </div>
              <div className="email">
                <input
                  onChange={this.onChange}
                  value={this.state.age}
                  error={errors.age}
                  id="age"
                  type="number"
                  placeholder="Age"
                  className={classnames("", {
                    invalid: errors.age
                  })}
                />
                <span className="errorMessage">{errors.password2}</span>
              </div>
              <div className="password">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <span className="errorMessage">{errors.password}</span>
              </div>
              <div className="password">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  placeholder="Confirm Password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <span className="errorMessage">{errors.password2}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <div className="">
                    <button type="submit" className="deg_btn" style={{marginLeft: "150px"}}>
                        Sign Up
                    </button>

                </div>
              </div>
            </form>
          </div>
       </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
