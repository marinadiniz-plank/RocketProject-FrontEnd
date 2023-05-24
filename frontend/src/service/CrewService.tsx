import { useEffect, useState } from 'react';
import CrewTable from '../components/Tables/CrewTable';

type Data = {
  id: number;
  name: string;
  crewman: {
    id: number;
    name: string;
    patent: string;
  }[]

};

export const RenderCrew: React.FC = () => {
  const data = GetCrew();
  return (
    <div>
      {data && data.length > 0 ? (
        <CrewTable data={data} />
      ) : (
        <div>No data available</div>          // call notification
      )}
    </div>
  );
}

export const GetCrew = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:80/crew');
        if (!response.ok) {
          throw new Error('Error in request');                   // call notification
        }
        const jsonData = await response.json();
        // const modifiedData = jsonData.map((item: Data) => {
        //   const { id, name, crewman } = item;
        //   const crewmanIds = crewman.map((crew) => crew.id).join(", ");
        //   return {
        //     id,
        //     name,
        //     crewman_id: crewmanIds
        //   };
        // })
        setData(jsonData);
      } catch (error) {
        console.error(error);                                // call notification
      }
    };

    fetchData();

  }, []);
  return data;
};

export const SubmitCrew = async (formData: Partial<Data>) => {
  try {
    console.log(formData);

    const response = await fetch('http://localhost:80/crew', {
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

export const UpdateCrew = async (formData: Partial<Data>) => {
  try {
    console.log(formData.id);
    const response = await fetch(`http://localhost:80/crew/${formData.id}`, {
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

export const DeleteCrew = async (id: number) => {
  try {

    const response = await fetch(`http://localhost:80/crew/${id}`, {
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