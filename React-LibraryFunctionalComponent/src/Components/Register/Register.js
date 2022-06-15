import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { firstnameValidation, lastnameValidation, emailValidation, passwordValidation } from '../Validation';
function Register() {

  const navigate = useNavigate();

  const [getForm, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [getValidation, setValidation] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });


  const onChangeHandler = (event) => {
    setForm({
      ...getForm, [event.target.name]: event.target.value
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setValidation({
      getValidation, firstName: !firstnameValidation(getForm.firstName) ? "Please Provide FirstName" : '',
      lastName: !lastnameValidation(getForm.lastName) ? "Please Provide LastName" : '',
      email: !emailValidation(getForm.email) ? "please provide email" : '',
      password: !passwordValidation(getForm.password) ? "Please provide the password" : ''
    });
    if (firstnameValidation(getForm.firstName) && lastnameValidation(getForm.lastName) && emailValidation(getForm.email) && passwordValidation(getForm.password)) {
      alert("success");
      sessionStorage.setItem("firstname", getForm.firstName);
      sessionStorage.setItem("lastname", getForm.lastName);
      sessionStorage.setItem("email", getForm.email);
      sessionStorage.setItem("password", getForm.password);
      navigate('/login');
    }
  }


  return (<div>
    <div className="container">
      <div className="row">
        <div className="col-4">

        </div>
        <div className="col-4">
          <form>
            <h3>Sign Up</h3>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" onChange={onChangeHandler} value={getForm.firstName} className="form-control" id="firstName" name="firstName" placeholder="Enter first name" />
              {getValidation.firstName && <div class="alert alert-danger" role="alert">
                {getValidation.firstName}
              </div>}
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input type="text" onChange={onChangeHandler} value={getForm.lastName} className="form-control" id="lastName" name="lastName" placeholder="Enter last name" />
              {getValidation.lastName && <div class="alert alert-danger" role="alert">
                {getValidation.lastName}
              </div>}

            </div>

            <div className="form-group">
              <label>Email address</label>
              <input type="email" onChange={onChangeHandler} value={getForm.email} className="form-control" id="email" name="email" placeholder="Enter email" />
              {getValidation.email && <div class="alert alert-danger" role="alert">
                {getValidation.email}
              </div>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" onChange={onChangeHandler} value={getForm.password} className="form-control" id="password" name="password" placeholder="Password" />

              {getValidation.password && <div class="alert alert-danger" role="alert">
                {getValidation.password}
              </div>}
            </div>

            <button onClick={onSubmitHandler} type="submit" className="btn btn-warning">Submit</button>
          </form>
        </div>
        <div className="col-4">

        </div>
      </div>

    </div>
  </div>)
}

export default Register;