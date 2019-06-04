import React, {Component} from 'react';
import Message from './Message.jsx';

// function MessageList(props) {

//   const messages = props.messages};
//   const messageItems = messages.map((message) =>
//     // return <Message message={message}/>
//   );
// }


// class MessageList extends Component {

//   const messages = {this.props.messages};
//   const messageItems = messages.map((message) =>
//     // return <Message message={message}/>
//   );

//   render() {
//     return (
//       <ul>{messageItems}</ul>
//     );
//   }

// }

class MessageList extends Component {
  render() {
    const messages = this.props.messages.map(message => {
      return <Message
        key={ message.id }
        username={ message.username }
        content={ message.content }
      />
    });

    return (
      <section className="messages">
        { messages }
      </section>
    )
  }
}

export default MessageList;







// state.messages = [
//   {
//     type: "incomingMessage",
//     content: "I won't be impressed with technology until I can download food.",
//     username: "Anonymous1"
//   },
//   {
//     type: "incomingNotification",
//     content: "Anonymous1 changed their name to nomnom",
//   },
//   {
//     type: "incomingMessage",
//     content: "I wouldn't want to download Kraft Dinner. I'd be scared of cheese packet loss.",
//     username: "Anonymous2"
//   },
//   {
//     type: "incomingMessage",
//     content: "...",
//     username: "nomnom"
//   },
//   {
//     type: "incomingMessage",
//     content: "I'd love to download a fried egg, but I'm afraid encryption would scramble it",
//     username: "Anonymous2"
//   },
//   {
//     type: "incomingMessage",
//     content: "This isn't funny. You're not funny",
//     username: "nomnom"
//   },
//   {
//     type: "incomingNotification",
//     content: "Anonymous2 changed their name to NotFunny",
//   },
// ]

