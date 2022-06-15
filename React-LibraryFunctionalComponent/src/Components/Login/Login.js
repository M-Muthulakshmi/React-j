import './Login.css';
import book from './book.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { usernameValidation, passwordValidation } from '../Validation';

function Login() {

  const navigate = useNavigate();

  const [getForm, setForm] = useState({
    username: '',
    password: ''
  });

  const [getValidation, setValidation] = useState({
    username: '',
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
      ...getValidation, username: !usernameValidation(getForm.username) ? "Please provide the username" : '',
      password: !passwordValidation(getForm.password) ? "Please provide the password" : ''
    });
    if (usernameValidation(getForm.username) && passwordValidation(getForm.password)) {
      alert("success");
      let username = sessionStorage.getItem('email');
      let password = sessionStorage.getItem('password');
      if (username === getForm.username && password === getForm.password) {
        navigate('/dashboard');
      }
      else {
        setValidation({
          username: 'no match found',
          password: 'no match found'
        });
      }

    }
  }


  return (<div>
    <div className="container pic">
      <div className="row">
        <div className="col-4">
        </div>

        <div className="col-4">
          <form className="heading">
          <h1 className="login-label">LIBRARY</h1>
            <h3 className="login-label"> MANAGEMENT SYSTEM</h3>
            <img className='img-book' src={book} width={50} Height={50} />
            <div className="form-group">
              <br/>
             
              <table>
    
                <tr></tr>
                  <td><label className="login-label">User Name</label></td>
                  <td><input type="text" onChange={onChangeHandler} value={getForm.username} className="form-control" id="UserName" name="username" placeholder="User Name" />   </td>
                  {getValidation.username && <div class="alert alert-danger" role="alert">
                    {getValidation.username}
                  </div>}
                  <br/>
                <br />
                <tr></tr>
                <td><label className="login-label">Password</label></td>
                <td><input type="password" onChange={onChangeHandler} value={getForm.password} className="form-control" id="password" name="password" placeholder="Password" /></td>
                {getValidation.password && <div class="alert alert-danger" role="alert">
                {getValidation.password}
              </div>}
             
             
              </table>
              
              
            </div>
        <br/>
            <br />
            <button onClick={onSubmitHandler} type="submit" class="btn btn-warning">Submit</button>

          </form>
        </div>

        <div className="col-4">

        </div>
      </div>

    </div>

  </div>)
}
export default Login;