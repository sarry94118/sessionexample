import React from 'react';
import RecentReviewsComponent from "./RecentReviewsComponent";
import MemberListComponent from "./MemberListComponent";
import {Link} from "react-router-dom";

class HomePageComponent extends React.Component {
    componentDidMount() {
    }

    state = {
        keyword: '',
        location: ''
    }

    render () {
        return (
            <div>
                <div style={{
                    backgroundImage: `url('https://media.allure.com/photos/5c87fc9fa1ded52cd8d16e0f/16:9/w_1600%2Cc_limit/allure-meal-kits-food-web-lede.jpg')`,
                    height: '500px', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                }}>
                    <div className="d-flex align-items-center justify-content-center" style={{height: '400px'}}>
                        <div className="col-lg-12">
                            <h1 className="text-center"
                                style={{color: 'white', fontFamily: 'Nunito', fontWeight: '800', marginTop: -150}}>My Review</h1>
                            <hr/>
                            <a href="/search" className="btn btn-success pl-2" style={{color: 'white'}}>
                                Find Businesses<i className="fa fa-search ml-2"/></a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1 d-none d-md-block"></div>
                    <div className="col-sm-12 col-md-10">
                        <div className="row" style={{paddingTop: 15}}>
                            <div className="col-md-7 col-lg-8">
                                {
                                    <RecentReviewsComponent
                                        history={this.props.history}
                                        currentUser={this.props.currentUser}/>
                                }
                            </div>
                            <div className="col-md-5 col-lg-3 d-none d-md-block">
                                <MemberListComponent
                                    history={this.props.history}
                                    currentUser={this.props.currentUser}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 d-none d-md-block"></div>
                </div>


                <div style={{
                    backgroundImage: `url('https://wallpaperaccess.com/full/1249336.jpg')`,
                    height: '200px', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                }}>
                    <div className="mx-auto" style={{paddingTop: 30, fontFamily: 'Oswald', fontWeight: '450'}}>
                        <div>Contact us</div>
                        <div>
                            <a href="mailto:zhang.hongmi@northeastern.edu">Hongming Zhang</a>
                            <span className="pl-2"></span>
                            <a href="mailto:zhao.jun@northeastern.edu"> Junming Zhao</a>
                        </div>

                        <div>
                            <a href="mailto:xiao.zi@northeastern.edu">Zihan Xiao</a>
                            <span className="pl-2"></span>
                            <a href="mailto:du.leg@northeastern.edu">Legen Du</a>
                        </div>
                        <div>
                            <a href="mailto:zhao.cheng1@northeastern.edu">Cheng Zhao</a>
                            <span className="pl-2"></span>
                            <a href="mailto:wu.jingj@northeastern.edu">JingJiing Wu</a>
                        </div>
                        <div>
                            <a href="mailto:liao.yi@northeastern.edu">Yixuan Liao</a>
                            <span className="pl-2"></span>
                            <a href="mailto:chao.r@northeastern.edu">Rui Chao</a>
                        </div>
                        Copyright @ My Review Team 2021
                    </div>
                </div>

            </div>
        )
    }
}

export default HomePageComponent
