import { Data } from "../pages/Launch/components/LaunchData";

export const GetLaunch = async () => {
  const response = await fetch('https://rocket-project.vercel.app/launch');
  if (!response.ok) {
    throw new Error('Error in request');
  }
  const jsonData = await response.json();
  return jsonData;
};

export const SubmitLaunch = async (formData: Partial<Data>) => {
  console.log(formData);

  const response = await fetch('https://rocket-project.vercel.app/launch', {
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

export const UpdateLaunch = async (id: number, formData: Partial<Data>) => {
  console.log(formData);

  const response = await fetch(`https://rocket-project.vercel.app/launch/${id}`, {
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

export const DeleteLaunch = async (id: number) => {
  const response = await fetch(`https://rocket-project.vercel.app/launch/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error in request'); // call notification
  }
};