import React from 'react';
import ReactDOM from 'react-dom';
import  './components/instagram.css';
import MaterialIcon, {colorPalette} from 'C:/Users/Abdullah Akbar/Desktop/reactprojects/node_modules/@material/react-material-icon';



import * as serviceWorker from './serviceWorker';
import Instagram from './components/Instagram';

// import Instagram from "./components/Instagram";
// var rootNode = document.getElementById("root");
// ReactDOM.render(<TodoListApp/>,rootNode)                  
// import TodoListApp from "./App"


const values = {
     logo: require('./components/images/instagramLogo.png'),
     exploreBtn:  require('./components/images/explore.png'),
     activityBtn: require('./components/images/heart.png'),
     profileBtn: require('C:/Users/Abdullah Akbar/Desktop/reactprojects/src/components/images/pofile.png'),
     profile: require('./components/images/profile.jpg'),
     location: 'Lahore,  Pakistan',
     postImage: require('./components/images/postImage.jpg'),
     postImage2: require('./components/images/postImage2.jpg'),
     postImage3: require('./components/images/postImage3.jpg'),
     likeBtn: require('./components/images/like.png'),
     commentBtn: require('./components/images/comment.png'),
     shareBtn: require('./components/images/share.svg')
};
ReactDOM.render(<Instagram data={values}/>, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
