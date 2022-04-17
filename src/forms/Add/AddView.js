import React from 'react';
import { Button, Message, Form, Input } from 'semantic-ui-react';

const AddView = ({
  errors,
  loading,
  username,
  setUsername,
  email,
  setEmail,
  text,
  setText,
  onSubmit
}) => (
  <Form>
    <Form.Field>
      <label>Username</label>
      <Form.Input 
        placeholder='Username' 
        value={username} 
        onChange={(event) => setUsername(event.target.value)}
        error={errors.username && {
          content: errors.username,
          pointing: 'below',
        }} 
      />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <Form.Input 
        type='email' 
        placeholder='Email' 
        value={email} 
        onChange={(event) => setEmail(event.target.value)}
        error={errors.email && {
          content: errors.email,
          pointing: 'below',
        }}  
      />
    </Form.Field>
    <Form.TextArea 
      label='Text' 
      placeholder='More about the task...' 
      value={text} 
      onChange={(event) => setText(event.target.value)}
      error={errors.text && {
        content: errors.text,
        pointing: 'below',
      }} 
    />
    <Button loading={loading} type='submit' onClick={onSubmit}>Submit</Button>
  </Form>
);


export default AddView;