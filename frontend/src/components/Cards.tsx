import "../../public/CSS/cards.css";

type MyComponentProps = {
    entity: string;
    icon: string;
    qnt: number;
}

const Cards: React.FC<MyComponentProps> = ({ entity, icon, qnt }) => {
    return(
                <div className="card">
                    <div className="card-inner">
                        <p className="text-primary">{entity}</p>
                        <i className={icon}></i>
                    </div>
                    <span className="qnt">{qnt}</span>
                </div>
    )
}

export default Cards;