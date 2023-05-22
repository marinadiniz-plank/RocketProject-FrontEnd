import React, { useEffect, useState } from 'react';
import Table from '../components/Table';

type Data = {
  id: number;
  launchCode: string;
  date: Date;
  success: boolean;
  rocket_id: number;
  crew_id: number;
};

export const RenderLaunch: React.FC = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:80/launch');
        if (!response.ok) {
          throw new Error('Erro na solicitação');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    console.log(data);
    
    fetchData();
  }, []);

  return (
    <div>
      <Table entityName={"Launch"} data={data} />
    </div>
  );
};
