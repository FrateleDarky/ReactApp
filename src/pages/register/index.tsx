import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import styles from '@/styles/Home.module.css'
import axios from 'axios'

export interface ILoginState {
  username : string,
  password : string
}

export interface ILoginProps {
}

export default class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props : ILoginProps) {
    super(props);

    this.state = {
        username : "",
        password: ""
    };

    this.handleClick = this.handleClick.bind(this); 
}


readonly url = "http://localhost:3000/api/users";
handleClick () {
  console.log("The username is" + this.state.username + " the password is" + this.state.password)
  axios.post(this.url + '/register', {
    username: this.state.username,
    password: this.state.password
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

handleEmail (e:React.ChangeEvent<HTMLInputElement>)
 {
  this.setState({
    username: e.target.value
  }
  )
 }
 handlePassword (e:React.ChangeEvent<HTMLInputElement>)
 {
  this.setState({
    password: e.target.value
  }
  )
 }
 
  public render() {
    return (
      <div className={styles.main}>
      <div className={styles.formLogin}>
        <form>
          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.username} onChange={e => this.handleEmail(e)}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
          <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={e => this.handlePassword(e)}/>
          </div>
          <div className="mb-2 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
              <button type="button" className="btn btn-primary" onClick={this.handleClick}>Sign Up</button>
          </form>
      </div>
      </div>
    );
  }
}
