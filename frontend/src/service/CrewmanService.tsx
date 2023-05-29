import { Data } from "../pages/Crewman/components/CrewmanData";


export const GetCrewman = async () => {
  const response = await fetch('http://localhost:80/crewman');
  if (!response.ok) {
    throw new Error('Error in request');                   // call notification
  }
  const jsonData = await response.json();
  return jsonData;
};

export const SubmitCrewman = async (formData: Partial<Data>) => {
  const response = await fetch('http://localhost:80/crewman', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Error in request'); // call notification
  }
  const jsonData = await response.json();
  return jsonData;

};

export const UpdateCrewman = async (id: number, formData: Partial<Data>) => {
  const response = await fetch(`http://localhost:80/crewman/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Error in request'); // call notification
  }
  const jsonData = await response.json();
  return jsonData;
};

export const DeleteCrewman = async (id: number) => {
  const response = await fetch(`http://localhost:80/crewman/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error in request'); // call notification
  }
};