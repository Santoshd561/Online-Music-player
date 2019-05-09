import React, { Component } from "react";


  

class ResetPassword extends Component {
  

  render() {
  

    return (
        <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email" style={{paddingTop:"100px"}}>
             
              <input
                
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Send Code
                </button>
           
           
          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
