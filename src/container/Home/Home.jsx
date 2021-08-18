// Libraries
import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Pages
import LifeCycleComp from '../Pages/LifeCycleComp/LifeCycleComp';
import Product from '../Pages/Product/Product';
import BlogPost from '../Pages/BlogPost/BlogPost';
import YoutubeCompPage from '../Pages/YoutubeComp/YoutubeComp';
import DetailPost from '../Pages/BlogPost/DetailPost/DetailPost';

// Style
import './Home.css'

// Class Component Home
class Home extends Component{
    state = {
        showComponent: true
    }

    render(){
        return (
            <Router>
            <Fragment>
                <div className="navigation">
                    <Link to="/">BlogPost</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/Lifecycle">Lifecycle</Link>
                    <Link to="/youtube-playlist">Youtube</Link>
                </div>
                <Route path="/" exact component={BlogPost}/>
                <Route path="/detail-post/:postId" component={DetailPost}/>
                <Route path="/product" component={Product}/>
                <Route path="/lifecycle" component={LifeCycleComp}/>
                <Route path="/youtube-playlist" component={YoutubeCompPage}/>
            </Fragment>
            </Router>
        )
    }
}

export default Home;