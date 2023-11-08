import React from 'react'
import User from './User';
import PaginatorTwo from '../common/Paginator/PaginatorTwo'


let Users = ({currentPage, totalUsersCount,  pageSize, onPageChanged, users, ...props}) => {
  
  return (
  
  <div>
    {/*<div>
        {pages.map(p =>{
        return <span className={props.currentPage === p && s.selectedPage}
        onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>
           })}
          </div>*/}
   <PaginatorTwo currentPage={currentPage}
          onPageChanged={onPageChanged}
          totalItemsCount={totalUsersCount}
          pageSize={pageSize} />
      <div>
       {
        users.map(u => <User user={u}
        followingInProgress={props.followingInProgress}
        key={u.id}
        follow={props.follow}
        unfollow={props.unfollow}
        
        />)
}
</div>      
    </div>
  )
}



export default Users