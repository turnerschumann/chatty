import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const messages = this.props.messages.map((message, index) => {
      return <Message
        key={ index }
        username={ message.username }
        content={ message.content }
        type={ message.type}
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