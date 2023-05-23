import { useEffect, useState } from 'react';
import Table from '../components/Table';

type Data = {
  id: number;
  name: string;
  patent: string;
};

export const RenderCrewman: React.FC = () => {
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

  return (
    <div>
      {data && data.length > 0 ? (
        <Table entityName="Crewman" data={data} />
      ) : (
        <div>No data available</div>          // call notification
      )}
    </div>
     
    
  );
};
