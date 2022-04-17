import React from 'react';
import { Button, Message, Form, Input } from 'semantic-ui-react';

const AddView = ({
  error,
  loading,
  username,
  setUsername,
  email,
  setEmail,
  text,
  setText,
  onSubmit
}) => (
  <Form error={error.length !== 0}>
    <Message error header="Oops!" content={error} />
    <Form.Field>
      <label>Username</label>
      <Input placeholder='Username' value={username} onChange={(event) => setUsername(event.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <Input type='email' placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />
    </Form.Field>
    <Form.TextArea 
      label='Text' 
      placeholder='More about the task...' 
      value={text} 
      onChange={(event) => setText(event.target.value)}
    />
    <Button loading={loading} type='submit' onClick={onSubmit}>Submit</Button>
  </Form>
);


export default AddView;