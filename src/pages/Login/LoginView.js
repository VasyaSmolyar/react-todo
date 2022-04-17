import React from "react";
import { Button, Container, Form } from 'semantic-ui-react';

const LoginView = ({
  errors,
  loading,
  email,
  setEmail,
  password,
  setPassword,
  onSubmit
}) => {
  return (
    <Container>
      <Form>
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
        <Form.Field>
          <label>Password</label>
          <Form.Input 
            type='password' 
            placeholder='Password' 
            value={password} 
            onChange={(event) => setPassword(event.target.value)}
            error={errors.password && {
              content: errors.password,
              pointing: 'below',
            }}  
          />
        </Form.Field>
        <Button loading={loading} type='submit' onClick={onSubmit}>Submit</Button>
      </Form>
    </Container>
  )
}

export default LoginView;