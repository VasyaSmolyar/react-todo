import React, { useState } from 'react';
import { postTaskQuery } from 'services/todoServices';
import AddView from './AddView';

export const AddContainer = ({ getTodos }) => {
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      postTaskQuery({
        username,
        email,
        text
      })
      .then((res) => res.json())
      .then(() => {
        getTodos();
        setLoading(false);
        setError('');
      });
    } catch(err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AddView
      error={error}
      loading={loading}
      username={username}
      setUsername={setUsername}
      email={email}
      setEmail={setEmail}
      text={text}
      setText={setText}
      onSubmit={onSubmit}
    />
  );
};
