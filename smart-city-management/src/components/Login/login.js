import { useNavigate } from 'react-router-dom';
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
        navigate('/TouristDestination');
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
          <form className="heading">
            <div className="bg-color">
          <nav className="navbar navbar-expand-lg navbar-light ">
  <span className="navbar-brand" href="#">Log In</span>
</nav></div>
            <div className="form-group">
              <br/>
              <table>
              <div className="textbox">
                <tr></tr>
                    <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span  className="input-group-text" id="inputGroup-sizing-default"><i className="fa fa-user" aria-hidden="true"></i></span>
                    </div>
                    <input  type="text" size="55" onChange={onChangeHandler} value={getForm.username} className="form-control" id="UserName" name="username" placeholder="User Name" class="form-control" aria-describedby="inputGroup-sizing-default"/>
                  </div>
                  {getValidation.username && <div class="alert alert-danger" role="alert">
                    {getValidation.username}
                  </div>}
                <tr></tr>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span  className="input-group-text" id="inputGroup-sizing-default"><i className="fa fa-lock" aria-hidden="true"></i>  </span>
                    <input  type="password" size="55" onChange={onChangeHandler} value={getForm.password} className="form-control" id="Password" name="password" placeholder="Password" class="form-control" aria-describedby="inputGroup-sizing-default"/> 
                    </div>  </div>  
                {getValidation.password && <div class="alert alert-danger" role="alert">
                {getValidation.password}
              </div>
               }
               </div>
              </table>
            </div>
            <div className="button"> <button  onClick={onSubmitHandler} type="submit" class="btn btn-info">Login</button></div>
          </form>
        </div>
        <div className="col-4">
        </div>
      </div>
    </div>
)
}
export default Login;