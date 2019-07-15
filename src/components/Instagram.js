import React from 'react';
import MaterialIcon, {colorPalette} from 'C:/Users/Abdullah Akbar/Desktop/reactprojects/node_modules/@material/react-material-icon';

const Instagram = (props)=>{
    return(
        // main containder of website or body
        <div id="container">
            {/* nav bar */}
            <header>
                <img  src={props.data.logo} className='logo' alt='logo'/>
                <input type="text" placeholder='Search'/>
                <div className='header_buttons'>
                    <img src={props.data.exploreBtn} className="explore_btn"/>
                    <img src={props.data.activityBtn} className="activity_btn"/>
                    <img src={props.data.profileBtn} className="profile_btn"/>
                </div>
            </header>
           
            {/* post of instagram */}
            <main className='posts_container'>
                {/* post header Dp, name, location */}
                <div className='post_header'>
                    <img  src={props.data.profile} className='profile_pic' alt='main post profile'/>
                    <h2 className='usernamePost'>binary_case_10</h2>
                    <p className='location'>{props.data.location}</p>
                </div> 
               {/* main post */}
                <div className='post_main'>
                    <img  src={props.data.postImage} className='post'  alt='post'/>
                </div>

                <div className='post_footer'>
                    <div className='post_buttons'>
                        <img src={props.data.likeBtn} className="like_btn"/>
                        <img src={props.data.commentBtn} className="comment_btn"/>
                        <img src={props.data.shareBtn} className="share_btn"/>
                    </div>
                    
                    <p className='no_of_likes'> 16,694 likes</p>
                    
                    <div className='post-caption'>
                        <h3 className='username_2'>binary_case_10</h3>
                        <p className='description'>
                        Double tap and share 💪Follow @motivation_mondays for more daily quotes!
                        </p>
                    </div>
                    </div>
                </main>

                {/* post of instagram -2 */}
            <main className='posts_container'>
                {/* post header Dp, name, location */}
                <div className='post_header'>
                    <img  src={props.data.profile} className='profile_pic' alt='main post profile'/>
                    <h2 className='usernamePost'>binary_case_10</h2>
                    <p className='location'>{props.data.location}</p>
                </div> 
               {/* main post */}
                <div className='post_main'>
                    <img  src={props.data.postImage2} className='post'  alt='post'/>
                </div>

                <div className='post_footer'>
                    <div className='post_buttons'>
                        <img src={props.data.likeBtn} className="like_btn"/>
                        <img src={props.data.commentBtn} className="comment_btn"/>
                        <img src={props.data.shareBtn} className="share_btn"/>
                    </div>
                    
                    <p className='no_of_likes'> 16,694 likes</p>
                    
                    <div className='post-caption'>
                        <h3 className='username_2'>binary_case_10</h3>
                        <p className='description'>
                        Double tap and share 💪Follow @motivation_mondays for more daily quotes!
                        </p>
                    </div>
                    </div>
                </main>

                {/* post of instagram */}
            <main className='posts_container'>
                {/* post header Dp, name, location */}
                <div className='post_header'>
                    <img  src={props.data.profile} className='profile_pic' alt='main post profile'/>
                    <h2 className='usernamePost'>binary_case_10</h2>
                    <p className='location'>{props.data.location}</p>
                </div> 
               {/* main post */}
                <div className='post_main'>
                    <img  src={props.data.postImage3} className='post'  alt='post'/>
                </div>

                <div className='post_footer'>
                    <div className='post_buttons'>
                        <img src={props.data.likeBtn} className="like_btn"/>
                        <img src={props.data.commentBtn} className="comment_btn"/>
                        <img src={props.data.shareBtn} className="share_btn"/>
                    </div>
                    
                    <p className='no_of_likes'> 16,694 likes</p>
                    
                    <div className='post-caption'>
                        <h3 className='username_2'>binary_case_10</h3>
                        <p className='description'>
                        Double tap and share 💪Follow @motivation_mondays for more daily quotes!
                        </p>
                    </div>
                    </div>
                </main> 
        </div>
               
                

               
         
    );
}

export default Instagram
