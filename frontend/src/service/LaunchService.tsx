import React, { useEffect, useState } from 'react';
import LaunchTable from '../components/Tables/LaunchTable';

type Data = {
  id: number;
  launchCode: string;
  date: Date;
  success: boolean;
  rocket: {
    id: number;
    name: string;
  };
  crew: {
    id: number;
    name: string;
    crewman: [];
  }
};

export const RenderLaunch: React.FC = () => {
  const data = GetLaunch();
  console.log(data);

  return (
    <div>
      {data && data.length > 0 ? (
        <LaunchTable data={data} />
      ) : (
        <div>No data available</div> // call notification
      )}
    </div>
  )
}
export const GetLaunch = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:80/launch');
        if (!response.ok) {
          throw new Error('Error in request');
        }
        const jsonData = await response.json();
        // const modifiedData = jsonData.map((item: Data) => {
        //   const { id, launchCode, date, success, rocket, crew } = item;
        //   return {
        //     id,
        //     launchCode,
        //     date,
        //     success,
        //     rocket_id: rocket.id,
        //     crew_id: crew.id,
        //   };
        // });
        setData(jsonData);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return data;
};

export const SubmitLaunch = async (formData: Partial<Data>) => {
  try {
    console.log(formData);

    const response = await fetch('http://localhost:80/launch', {
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

export const UpdateLaunch = async (id: number, formData: Partial<Data>) => {
  try {
    console.log(id);
    const response = await fetch(`http://localhost:80/launch/${id}`, {
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

export const DeleteLaunch = async (id: number) => {
  try {
    console.log(id);

    const response = await fetch(`http://localhost:80/launch/${id}`, {
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