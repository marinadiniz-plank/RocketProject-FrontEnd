import React, { useEffect, useState } from 'react';
import Table from '../components/Table';

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
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:80/launch');
        if (!response.ok) {
          throw new Error('Error in request');
        }
        const jsonData = await response.json();
        const modifiedData = jsonData.map((item: Data) => {
          const { id, launchCode, date, success, rocket, crew } = item;
          return {
            id,
            launchCode,
            date,
            success,
            rocket_id: rocket.id,
            crew_id: crew.id,
          };
        });
        setData(modifiedData);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div>
      {data && data.length > 0 ? (
        <Table entityName="Launch" data={data} />
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};
