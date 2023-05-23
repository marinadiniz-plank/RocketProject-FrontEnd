import { useEffect, useState } from 'react';
import Table from '../components/Table';

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
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:80/crew');
        if (!response.ok) {
          throw new Error('Error in request');                   // call notification
        }
        const jsonData = await response.json();
        const modifiedData = jsonData.map((item: Data) => {
            const { id, name, crewman } = item;
            const crewmanIds = crewman.map((crew) => crew.id).join(", ");
            return {
                id,
                name,
                crewman_id: crewmanIds
            };
        })
        setData(modifiedData);
      } catch (error) {
        console.error(error);                                // call notification
      }
    };

    fetchData();
    
  }, []);

  return (
    <div>
      {data && data.length > 0 ? (
        <Table entityName="Crew" data={data} />
      ) : (
        <div>No data available</div>          // call notification
      )}
    </div>
     
    
  );
};
