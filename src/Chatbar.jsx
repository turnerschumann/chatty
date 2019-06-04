import React, {Component} from 'react';

class Chatbar extends Component {
  render() {
    return (
      <footer className="chatbar">
          <input className="chatbar-username" defaultValue={this.props.currentUser.name} placeholder="Your Name (Optional)" />
          <input
            type="text" className="chatbar-message"
            placeholder="Type a message and hit ENTER"
            onKeyDown={this.props.onCompose}
            />
      </footer>
    );
  }
}
export default Chatbar;