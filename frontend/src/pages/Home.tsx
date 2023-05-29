
import { Outlet } from 'react-router-dom';
import bannerImg from "../assets/header-img.svg";
import Header from "../components/Header";

function Home() {
    return (
        <>
            <Header pageTitle="RocketProject" />
            <div className="banner">
                <h4>
                    Existe uma teoria que diz que, se um dia
                    alguém descobrir exatamente para que serve
                    o Universo e por que ele está aqui, ele
                    desaparecerá instantaneamente e será
                    substituído por algo ainda mais estranho
                    e inexplicável. Existe uma segunda teoria
                    que diz que isso já aconteceu.
                </h4>
                <img className="logo" src={bannerImg} alt="React Logo" />
            </div>
            <Outlet />
        </>
    );
}

export default Home;