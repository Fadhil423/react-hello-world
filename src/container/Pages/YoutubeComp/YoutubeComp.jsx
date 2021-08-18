// Libraries
import React, {Component, Fragment} from 'react';

// Pages
import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp';

// Class Component YoutubeCompPage
class YoutubeCompPage extends Component{
    render(){
        return (
            <Fragment>
                <p>Youtube Component</p>
                <hr/>
                <YouTubeComp time="7.12" title="Video tutorial memasak 1" desc="15K views . 2 Years Ago"/>
                <YouTubeComp time="5.24" title="Video tutorial memasak 2" desc="10K Views . 2 Years Ago"/>
                <YouTubeComp time="13.25" title="Video tutorial memasak 3" desc="5K Views . 2 Years Ago"/>
                <YouTubeComp time="10.12" title="Video tutorial memasak 4"/>
                <YouTubeComp />
            </Fragment>
            
        )
    }
}

export default YoutubeCompPage;