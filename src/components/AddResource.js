// AddResource.js
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { addResource, getAllResources } from '../utils/LibraryActions';

const AddResource = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const [highestId, setHighestId] = useState(0);

  useEffect(() => {
    const allResources = getAllResources();
    const maxId = Math.max(...allResources.map((resource) => resource.id), 0);
    setHighestId(maxId);
  }, []);

  const handleAddResource = () => {
    if (!title || !category) {
      alert('Please fill in all fields.');
      return;
    }

    const newResource = {
      id: highestId + 1,
      title,
      category,
    };

    addResource(newResource);
    navigate('/');
  };

  return (
    <div className="container">
      <h1 className="heading-1">Add Resource</h1>
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>

        <Button className="mt-4" variant="primary" onClick={handleAddResource}>
          Add Resource
        </Button>
      </Form>
    </div>
  );
};

export default AddResource;
