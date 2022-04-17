import React from "react";
import { Container, Icon, Menu, Table } from 'semantic-ui-react';

const TodoView = ({
  todos,
  getTodos,
  page,
  setPage,
  isPrevious,
  isNext
}) => {
  const list = todos.map((task) => (
    <Table.Row key={task.id}>
      <Table.Cell>{task.username}</Table.Cell>
      <Table.Cell>{task.email}</Table.Cell>
      <Table.Cell>{task.text}</Table.Cell>
    </Table.Row>
  ));

  return (
    <Container>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Text</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {list}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                {isPrevious &&
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                }
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                {isNext &&
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                }
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Container>
  )
}

export default TodoView;