import { useEffect, useState } from 'react';
import Table from '../components/Table';

type Data = {
  id: number;
  name: string;
};

export const RenderRocket: React.FC = () => {
  const initialData: Data[] = JSON.parse(localStorage.getItem('myData') || '[]');

  const [data, setData] = useState<Data[]>(initialData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem('myData');
        if (storedData) {
          setData(JSON.parse(storedData));
          // console.log('Dados armazenados:', storedData);
        } else {
          const response = await fetch('http://localhost:80/rocket');
          if (!response.ok) {
            throw new Error('Erro na solicitação');
          }
          const jsonData = await response.json();
          setData(jsonData);
          localStorage.setItem('myData', JSON.stringify(jsonData));
          console.log('Dados armazenados no JSON:', jsonData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Table entityName={"Rocket"} data={data} />
    </div>
  );
};
