// Libraries
import axios from 'axios'
import React, {Component, Fragment} from 'react'

// Pages
import Post from '../../../component/Post/Post'

// Style
import './BlogPost.css'

// Class Component BlogPost
class BlogPost extends Component{
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate : false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3001/posts?_sort=id&_order=desc')
        .then((result)=>{
            this.setState({
                post : result.data
            })
        })
    }


    onHandleSubmit(e){
        e.preventDefault();
        const data = this.state.formBlogPost;
        this.props.onSearchTermChange(data);
        this.setState({
            id: 1,
            title: '',
            body: '',
            userId: 1
        })
    }


    postDataToAPI = () =>{
        axios.post('http://localhost:3001/posts', this.state.formBlogPost).then((res) =>{
            console.log(res);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost : {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        }, (err) => {
            console.log('error', err);
        })
    }
    
    putDataToAPI = () =>{
        axios.put(`http://localhost:3001/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) =>{
            console.log(res);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost : {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        })
    }


    handleRemove = (data) => {
        console.log(data);
        axios.delete(`http://localhost:3001/posts/${data}`).then((res) => {
            this.getPostAPI();
        })
    }

    handleUpdate = (data) =>{
        console.log(data);
        this.setState({
            formBlogPost : data,
            isUpdate : true
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI();
        }else{
            this.postDataToAPI();
        }
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timeStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost : formBlogPostNew
        })
        
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    componentDidMount(){
        this.getPostAPI();
    }

    render(){
        return(
            <Fragment>
                <p>Halaman Blogpost</p>
                <hr />
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title" >Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" value={this.state.formBlogPost.body} placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit-save" onClick={this.handleSubmit}>Save</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
                    })
                }
            </Fragment>
            
        )
    }
}

export default BlogPost;