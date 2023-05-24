import { useEffect, useState } from 'react';
import CrewmanTable from '../components/Tables/CrewmanTable';

type Data = {
  id: number;
  name: string;
  patent: string;
};

export const RenderCrewman: React.FC = () => {
  const data = GetCrewman();
  return (
    <div>
      {data && data.length > 0 ? (
        <CrewmanTable data={data} />
      ) : (
        <div>No data available</div>          // call notification
      )}
    </div>


  );
}

export const GetCrewman = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:80/crewman');
        if (!response.ok) {
          throw new Error('Error in request');                   // call notification
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);                                // call notification
      }
    };

    fetchData();

  }, []);
  return data;

};

export const SubmitCrewman = async (formData: Partial<Data>) => {
  try {
    console.log(formData);

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
    console.log(jsonData);

    return jsonData;
  } catch (error) {
    console.error(error); // call notification
  }
};

export const UpdateCrewman = async (formData: Partial<Data>) => {
  try {
    console.log(formData.id);
    const response = await fetch(`http://localhost:80/crewman/${formData.id}`, {
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
  } catch (error) {
    console.error(error); // call notification
  }
};

export const DeleteCrewman = async (id: number) => {
  try {

    const response = await fetch(`http://localhost:80/crewman/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error in request'); // call notification
    }

  } catch (error) {
    console.error(error); // call notification
  }
};