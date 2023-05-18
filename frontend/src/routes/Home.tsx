import Cards from "../components/Cards";
import data from "../assets/data";

import { Outlet } from 'react-router-dom';
import Header from "../components/Header";

function Home() {

    const cards = data.map(item => {
        return (
            <Cards 
                entity={item.entity}
                icon={item.icon}
                qnt={item.qnt}
            />
        )
    });

    return (
        <>
          <Header pageTitle="RocketProject"/>
          <div className="main-cards">{cards}</div>
          <Outlet />
        </>
      );
    }
    
    export default Home;