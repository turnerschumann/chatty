Chatty
=====================

This app was built to replicate modern chat application like Slack and Facebook Messenger. By utilizing websockets, users are able to converse in real-time.

## Getting Started 

1. Clone the repo and run npm install in the root. 
2. Run npm start to start the webserver.
3. Navigate to chatty_server directory and run npm install. 
4. Run npm start to start the websocket server.
5. Browse to http://0.0.0.0:3000/ to access the app.

## Screenshots

!["Screenshot of main page with an open conversation"](https://github.com/turnerschumann/chatty/blob/master/docs/main.png)

## Dependencies

Dependencies:
* "react": "15.4.2",
* "react-dom": "15.4.2"

Dev Dependencies:

* "babel-core": "6.23.1",
* "babel-loader": "6.3.1",
* "babel-preset-es2015": "6.22.0",
* "babel-preset-react": "6.23.0",
* "babel-preset-stage-0": "6.22.0",
* "css-loader": "0.26.1",
* "eslint": "3.15.0",
* "eslint-plugin-react": "6.9.0",
* "node-sass": "4.5.0",
* "sass-loader": "6.0.0",
* "sockjs-client": "^1.1.2",
* "style-loader": "0.13.1",
* "webpack": "2.2.1",
* "webpack-dev-server": "2.3.0"

Server Dependencies: 

* "express": "4.17.1",
* "uuid": "^3.3.2",
* "ws": "7.0.0"
