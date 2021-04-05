import React, {useEffect} from 'react';

const User = React.memo(({user, onRemove, onToggle}) => {
  const {username, email, id, active} = user;
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
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  )
})

const UserList = ({users, onRemove, onToggle}) => {
  return (
    <div>
      {users.map(user => (
        <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  );
};

export default React.memo(UserList);