// LibraryList.js
import "../styles/LibraryList.css"
import React, { useEffect, useState } from 'react';
import { getAllResources } from '../utils/LibraryActions';
import { deleteResource } from '../utils/LibraryActions';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ResourceDetail from './ResourceDetail';
import { useNavigate } from 'react-router-dom';
import AddResource from "./AddResource";


const LibraryList = () => {
  const [resources, setResources] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const allResources = getAllResources();
    setResources(allResources);
  }, []);

  const handleDetailsClick = (resourceId) => {
    navigate(`/detail/${resourceId}`);
  };
  const handleDeleteClick = (resourceId) => {
    // confirmation avant de supprimer
    const confirmDelete = window.confirm('Are you sure you want to delete this resource?');

    if (confirmDelete) {
      deleteResource(resourceId);
      setResources(resources.filter(resource => resource.id !== resourceId));
    }
  };

  const handleAddResourceClick = () => {
    navigate('/add');
  };
    return(
        <div class="container">
            <h1 class="heading-1">Welcome to my Library List</h1>
            <div class="container-fluid">
            {resources.map(resource => (
                <Card key={resource.id} style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/180/180" alt='picture' />
                    <Card.Body>
                        <Card.Title>{resource.title}</Card.Title>
                        <Card.Text>
                        {resource.category}
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleDetailsClick(resource.id)}>View</Button>
                        <Button variant="danger" className="ms-4" onClick={() => handleDeleteClick(resource.id)}>Delete</Button>

                    </Card.Body>
                </Card>
            ))}
            </div>
            <div className="mt-4">
        <Button className="mt-8" variant="success" onClick={handleAddResourceClick}>Add New Resource</Button>
      </div>
        </div>
    );
};

export default LibraryList;
