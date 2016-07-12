import React from 'react';
import Photo from './photo';
import Comment from './comments';
import {Link} from 'react-router';

const Single = React.createClass({
   render(){
     const {postId} = this.props.params;
     const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
     console.log(i);
     const post = this.props.posts[i];
     console.log(post);
     const postComments = this.props.comments[postId] || [];


     return(
       <div className="single-photo">
          <Photo i={i} post={post} {...this.props}/>
          <Comment i={i} postComments={postComments}  {...this.props}/>
       </div>
     );
   }
});

export default Single;
