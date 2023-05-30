import { Data } from '../pages/Crew/components/CrewData';


export const GetCrew = async () => {
  const response = await fetch('https://rocket-project.vercel.app/crew');
  if (!response.ok) {
    throw new Error('Error in request');                   // call notification
  }
  const jsonData = await response.json();

  return jsonData;
};

export const SubmitCrew = async (formData: Partial<Data>) => {
  const response = await fetch('https://rocket-project.vercel.app/crew', {
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
  console.log(jsonData);

  return jsonData;


};

export const UpdateCrew = async (id: number, formData: Partial<Data>) => {
  const response = await fetch(`https://rocket-project.vercel.app/crew/${id}`, {
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

export const DeleteCrew = async (id: number) => {
  const response = await fetch(`https://rocket-project.vercel.app/crew/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error in request'); // call notification
  }

};