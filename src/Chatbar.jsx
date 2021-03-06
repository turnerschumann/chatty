import React, {Component} from 'react';

class Chatbar extends Component {
  render() {
    return (
      <footer className="chatbar">
          <input
            type="text"
            className="chatbar-username"
            placeholder="Your Name (Optional)"
            value={this.props.value}
            onBlur={this.props.handleChange}
          />
          <input
            type="text"
            className="chatbar-message"
            placeholder="Type a message and hit ENTER"
            onKeyDown={this.props.onCompose}
            />
      </footer>
    );
  }
}
export default Chatbar;