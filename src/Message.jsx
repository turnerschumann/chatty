import React, {Component} from 'react';

class Message extends Component {

// console.log("The type in message is: " + this.props);


  render() {
    return this.props.type === 'message' ? (
      <main className="messages">
        <div className="message">
          <span className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
      </main>
  ) : (
      <div className="message system">
        {this.props.content}
      </div>
  );
    // return (

    //     <div className="message">
    //       <span className="message-username">{this.props.username}</span>
    //       <span className="message-content">{this.props.type}</span>
    //     </div>

    //   )
  }
}
export default Message;