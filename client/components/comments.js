import React from 'react';

const Comment = React.createClass({

    renderComment(comment,i){
      return(
        <div className="comment" key={i}>
          <p>
            <strong>
              {comment.user}
            </strong>
            {comment.text}
            <button className="remove-comment" onClick={this.props.removeComment.bind(null,this.props.params.postId,i)}>&times;</button>
          </p>
        </div>
      )
    },
    handleSubmit(e){
       e.preventDefault();
       console.log('submitting form!');
       const {postId} = this.props.params;
       const author = this.refs.author.value;
       const comment = this.refs.comment.value;
       this.props.addComment(postId,author,comment);
    },

      render(){

        return(
          <div className="comment">
            {this.props.postComments.map(this.renderComment)}
            <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
              <input type="text" ref="author" placeholder="author"/>
              <input type="text" ref="comment" placeholder="comment"/>
              <input type="submit" hidden/>
            </form>
          </div>
        )
      }
});

export default Comment;
