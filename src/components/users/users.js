import React from 'react'
import classes from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'


const Users = (props) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }



  return (
    <div>
      <div>
        {
          pages.map(page => {
            return (
              <span
                className={props.currentPage === page ? classes.selectedPage : null}
                onClick={() => props.onPageChanged(page)}
              >
                {page}
              </span>
            )
          })
        }
      </div>
      {
        props.users.map((user) => {
          return (
            <div key={user.id}>
              <span>
                <div>
                  <NavLink to={`/profile/${user.id}`}><img src={user.photos.small !== null ? user.photos.small : userPhoto} className={classes.usersPhoto} alt="" /></NavLink>
                </div>
                <div>
                  {
                    user.followed
                      ? <button
                        disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => props.unfollow(user.id)}
                      >
                        Unfollow
                      </button>
                      : <button
                        disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => props.follow(user.id)}
                      >
                        Follow
                    </button>
                  }
                </div>
              </span>
              <span>
                <span>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
                </span>
                <span>
                  <div>{"user.location.country"}</div>
                  <div>{"user.location.city"}</div>
                </span>
              </span>
            </div>
          )
        })
      }
    </div>
  )
}

export default Users
