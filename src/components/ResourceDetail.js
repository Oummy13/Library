// DeleteResource.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getResourceById } from '../utils/LibraryActions';

// ... other imports

const ResourceDetail = () => {
  const { id } = useParams();
  const [resource, setResource] = useState(null);

  useEffect(() => {
    // Retrieve the resource based on the ID
    // console.log(id);
    const singleResource = getResourceById(String(id));

    // Update the state with the retrieved resource
    setResource(singleResource);
  }, [id]);

  if (resource === null) {
    return <div>Loading...</div>; // Loading state
  }
  
  if (!resource) {
    return <div>Resource not found</div>; // Resource not found state
  }

  return (
    <div class="jumbotron">
        <h1 class="display-4">{resource.title}</h1>
        <p class="lead">{resource.description}</p>
        <p> Lorem ipsum dolor sit amet. Sed aperiam dolorem ut possimus quis qui omnis amet a labore similique. A assumenda error vel error maxime ut consequatur numquam et quae nihil.Vel aperiam enim et impedit rerum ut totam commodi cum magni atque non dignissimos illum cum ipsam inventore est galisum soluta. Eum labore optio ut iure obcaecati eos adipisci libero ex eius reprehenderit quo internos nemo sit unde dolore sit consequatur deserunt. Est facere quae ut blanditiis Quis qui voluptatem velit ut voluptatem voluptates. Ab reiciendis esse et animi molestiae hic voluptatibus quae est dolores accusantium et quam repellendus ex deleniti repudiandae et inventore error. </p>
        <p class="lead"></p>
    </div>
  )};

export default ResourceDetail;
