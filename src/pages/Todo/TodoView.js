import React from "react";
import { Container, Icon, Menu, Table, Button, Checkbox } from 'semantic-ui-react';
import Add from "forms/Add";

const TodoView = ({
  todos,
  getTodos,
  pageIndexes,
  page,
  setPage,
  isPrevious,
  isNext,
  isAuth,
  taskEdit,
  setTaskEdit
}) => {
  const list = todos.map((task) => (
    <Table.Row key={task.id}>
      <Table.Cell>{task.username}</Table.Cell>
      <Table.Cell>{task.email}</Table.Cell>
      <Table.Cell>{task.text}</Table.Cell>
      <Table.Cell>
        <Checkbox value={task.isDone} disabled={!isAuth} />
      </Table.Cell>
      {isAuth &&
        <Table.Cell>
          <Button onClick={() => setTaskEdit(task)}>Edit</Button>
        </Table.Cell>
      }
    </Table.Row>
  ));

  const pagination = pageIndexes.map((index) => (
    <Menu.Item 
      key={index}
      active={index === page}
      onClick={() => setPage(index)} 
      as='a'
    >
      {index}
    </Menu.Item>
  ));

  return (
    <Container>
      <Add getTodos={getTodos} taskEdit={taskEdit} setTaskEdit={setTaskEdit} />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Text</Table.HeaderCell>
            <Table.HeaderCell>Is done</Table.HeaderCell>
            {isAuth &&
              <Table.HeaderCell>Edit</Table.HeaderCell>
            }
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
                  <Menu.Item as='a' icon onClick={() => setPage(page - 1)}>
                    <Icon name='chevron left' />
                  </Menu.Item>
                }
                {pagination}
                {isNext &&
                  <Menu.Item as='a' icon onClick={() => setPage(page + 1)}>
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