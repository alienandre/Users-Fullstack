import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container, Card, Modal, Form } from 'react-bootstrap';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch('http://localhost:8080/user')
      .then(response => response.json())
      .then(data => setUsers(data));
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  function handleShow(user) {
    setUserUpdate((currentUser) => ({
      ...currentUser, 
      idUpdate: user.id, 
      nameUpdate: user.name, 
      ageUpdate:user.age, 
      imgUrlUpdate: user.imgUrl
    }));
    setShow(true);
  }

  const [userUpdate, setUserUpdate] = useState({ 
    idUpdate: '', nameUpdate: '', ageUpdate: '', imgUrlUpdate: ''
  });

  function handleNameChange(name) {
    setUserUpdate((currentUser) => ({...currentUser, nameUpdate: name}));
  }

  function handleAgeChange(age) {
    setUserUpdate((currentUser) => ({...currentUser, ageUpdate: age}));
  }

  
  function handleImgChange(imgUrl) {
    setUserUpdate((currentUser) => ({...currentUser, imgUrlUpdate: imgUrl}));
  }

  function handleFormChangeName(event) {
    handleNameChange(event.target.value);
  }

  function handleFormChangeAge(event){
   handleAgeChange(event.target.value);
  }

  function handleFormChangeImgUrl(event){
    handleImgChange(event.target.value);
  }

  function handleSaveChanges() {
    console.log(userUpdate);
    handleUpdate(userUpdate.idUpdate, userUpdate.nameUpdate, userUpdate.ageUpdate, userUpdate.imgUrlUpdate);
  }

  function handleUpdate(idUpdate, nameUpdate, ageUpdate, imgUrlUpdate) {
    let userToUpdate = {
      id: idUpdate, name: nameUpdate, age: ageUpdate, imgUrl: imgUrlUpdate
    }
    fetch('http://localhost:8080/user' , {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userToUpdate)
    })
    .then(response => {
      setUsers(users.map(user => {
        if (user.id === userToUpdate.id) {
          return userToUpdate;
        }
        return user;
      }));
      console.log('User updated succesfully', response);
    })
    .catch(error => {
      console.error('Error updating data:', error);
    });
    console.log(userToUpdate);
  }


  function handleDelete(id) {
    fetch(`http://localhost:8080/user/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Data deleted succesfully', response);
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  }

  return (
    <Container>
      <Card className='bg-light'>
        <Table striped bordered hover>
          <thead className='text-white bg-dark bg-gradient'>
            <tr>
              <th>ID</th>
              <th>Profile Pic</th>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className='text-black'>{user.id}</td>
                <td><img src={user.imgUrl} width="70" height="70" alt="Profile Pic"/></td>
                <td className='text-black'>{user.name}</td>
                <td className='text-black'>{user.age}</td>
                <td className='text-black'>
                  <Button variant="light" onClick={() => handleShow(user)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  value={userUpdate.nameUpdate}
                  autoFocus
                  placeholder={userUpdate.nameUpdate}
                  onChange={handleFormChangeName}
                />
              </Form.Group>
              <Form.Group controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type='number'
                  placeholder={userUpdate.ageUpdate}
                  value={userUpdate.ageUpdate}
                  onChange={handleFormChangeAge}
                />
              </Form.Group>
              <Form.Group controlId="formImgUrl">
                <Form.Label>Profile Image URL</Form.Label>
                <Form.Control
                  type='text'
                  placeholder={userUpdate.imgUrlUpdate}
                  value={userUpdate.imgUrlUpdate}
                  onChange={handleFormChangeImgUrl}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </Container>
  );
}