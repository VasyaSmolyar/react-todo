import React, { useState } from 'react';
import { postTaskQuery } from 'services/todoServices';
import AddView from './AddView';
import { required, email as isEmail} from 'validators';

export const AddContainer = ({ getTodos }) => {
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {
      username: required(username),
      email: isEmail(email) || required(email),
      text: required(text)
    }
    setErrors(newErrors);
    return !newErrors.username && !newErrors.email && !newErrors.text;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(!validate()) {
      return;
    }

    setLoading(true);
    postTaskQuery({
        username,
        email,
        text
    })
    .then(() => {
        getTodos();
        setLoading(false);
    });
  }

  return (
    <AddView
      errors={errors}
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
