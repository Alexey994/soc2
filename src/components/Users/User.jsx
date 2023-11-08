import React from 'react'
import s from './users.module.css'
import userPhoto from  "..//../assets/img/dd.png";
import { NavLink } from 'react-router-dom';



 



let User = ({user,  followingInProgress, unfollow, follow, ...props}) => {
    return (
      <div>
          <span>
            <div>
                <NavLink to={'/profile/' + user.id }>
                <img src={user.photos.small != null ? user.photos.small: userPhoto} className={s.userPhoto} alt='img'/>
                </NavLink>
           </div>
           <div>
            {
            user.followed ?  <button disabled={followingInProgress.some(id => id === user.id)}  
            onClick={()=> { unfollow(user.id);
            }
          }>Unfollow</button> :
  
            <button 
            disabled={followingInProgress.some(id => id === user.id)} 
            onClick={() => {  follow(user.id);}}>Follow</button>
            }
            </div>
         </span>
          <span>
            <span>
                <div>{user.id}</div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
                </span>
         </span>
         </div>
     );
} 
  
  
export default User 

