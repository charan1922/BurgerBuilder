import React, { Component } from 'react'
import Photo from './Photo';
import Comments from './Comments';


 class Single extends Component {
  render() {

const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
console.log(i)
const post = this.props.posts[i];
    return (
      <div className="single-photo">
        <photo i={i} post={post} {...this.props} />
       < Comments/>
      </div>
    )
  }
}


export default Single;