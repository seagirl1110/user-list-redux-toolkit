import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

function UserList() {
  const users = useSelector((state) => state.users.data);

  return (
    <div className={styles.users_wrapper}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
