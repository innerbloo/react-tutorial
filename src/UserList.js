import React, {useEffect, useContext, useCallback} from 'react';
import {UserDispatch} from './App';

const User = React.memo(({user}) => {
  const {username, email, id, active} = user;
  const dispatch = useContext(UserDispatch);

  useEffect(() => {
    // console.log('user 마운트');
    return () => {
      // console.log('user 언마운트');
    }
  }, [user])

  return (
    <div>
      <b
        style={{color: active && 'green', cursor: 'pointer'}}
        onClick={() => dispatch({
          type: "TOGGLE_USER",
          id
        })}
      >
        {username}
      </b>
      <span>({email}) </span>
      <strong>ID: {id} </strong>
      <button onClick={() => dispatch({
        type: "REMOVE_USER",
        id
      })}>삭제</button>
    </div>
  )
})

const UserList = ({users}) => {
  return (
    <div>
      {users.map(user => (
        <User key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default React.memo(UserList);