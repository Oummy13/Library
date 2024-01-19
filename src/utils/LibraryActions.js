import libraryData from './libraryData.json';

export const getAllResources = () => {
  // console.log(libraryData.resources);

  return libraryData.resources;
};

export const getResourceById = (resourceId) => {
  console.log(resourceId);
  return libraryData.resources.find(resource => resource.id === resourceId);
};

export const addResource = (newResource) => {
  libraryData.resources.push(newResource);
  
};

export const deleteResource = (resourceId) => {
  libraryData.resources = libraryData.resources.filter(resource => resource.id !== resourceId);
  
};

export const toggleFavorite = (resourceId) => {
  libraryData.resources = libraryData.resources.map(resource =>
    resource.id === resourceId ? { ...resource, isFavorite: !resource.isFavorite } : resource
  );
  
};


