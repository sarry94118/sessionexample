import React from 'react';
import {login} from "../../service/UserService";


class LoginComponent extends React.Component {
    handleLogin = (user) =>
        login(user)
            .then(currentUser => {
                if (currentUser != null) {
                    this.props.setCurrentUser(currentUser)
                    this.props.history.push("/")
                }
            })

    state = {
        user: {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <div style={{
                    backgroundImage:`url('https://thumbor.mumu.agency/unsafe/1000x562/https://www.theransomnote.com/media/articles/rare-african-music-tops-trendbases-restaurant-background-music-charts/4ca464fe-54ae-457f-8680-702aaa8a13ab.jpg')`,
                    height: '600px', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                }}>
                    <div style={{paddingTop: 100, display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                        <div className="m-4" style={{backgroundColor: "white", height: '250px', width:'60%', alignItems: 'center'}}>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="col-sm-12 col-md-8">
                                    <form>
                                        <div className="form-group row" style={{paddingTop: 30}}>
                                            <label className="col-sm-2 col-form-label">Username:</label>
                                            <div className="col-sm-10" style={{paddingLeft: 30}}  >
                                                <input className="form-control" value={this.state.user.username} placeholder="Username" type="username"
                                                       onChange={(e) => {
                                                           const name = e.target.value;
                                                           this.setState(prevState => ({
                                                               user: {
                                                                   ...prevState.user,
                                                                   username: name
                                                               }
                                                           }))
                                                       }}/>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Password:</label>
                                        <div className="col-sm-10" style={{paddingLeft: 30}}>
                                            <input className="form-control" value={this.state.user.password} placeholder="Password" type="password"
                                                   onChange={(e) => {
                                                       const key = e.target.value;
                                                       this.setState(prevState => ({
                                                           user: {
                                                               ...prevState.user,
                                                               password: key
                                                           }
                                                       }))
                                                   }}/>
                                        </div>
                                    </div>
                                    <div>Don't have an account?<a href={"/register"}> Sign up for free</a></div>
                                    <div className="row m-0 d-flex justify-content-center" style={{paddingTop: 20}}>
                                        <button className="btn btn-success mr-3" onClick={() => this.handleLogin(this.state.user)}>Login</button>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{
                        backgroundImage: `url('https://wallpaperaccess.com/full/1249336.jpg')`,
                        height: '50px', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                    }}>
                        <div style={{paddingTop: 10}}>Copyright @ My Review Team 2021</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent;
