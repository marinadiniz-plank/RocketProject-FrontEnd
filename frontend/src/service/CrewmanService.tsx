import { Data } from "../pages/Crewman/components/CrewmanData";


export const GetCrewman = async () => {
  const response = await fetch('https://rocket-project.vercel.app/crewman');
  if (!response.ok) {
    throw new Error('Error in request');                   // call notification
  }
  const jsonData = await response.json();
  return jsonData;
};

export const SubmitCrewman = async (formData: Partial<Data>) => {
  const response = await fetch('https://rocket-project.vercel.app/crewman', {
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
  const response = await fetch(`https://rocket-project.vercel.app/crewman/${id}`, {
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
  const response = await fetch(`https://rocket-project.vercel.app/crewman/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error in request'); // call notification
  }
};