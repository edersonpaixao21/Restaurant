import { StyledEvent, Title } from "./style";
import CardEvent from "../CardEvent";

const Event = () => {
  return (
    <StyledEvent>
      <div className="container">
        <Title>
          <h1>Eventos</h1>
          <div className="wrapper">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
        </Title>
        <div className="flex">
          <CardEvent
            image="./images/events/1.jpg"
            title="Formatura Faculdade"
            desc="Comemore com a Turma de TI - A formatura do curso de Desenvolvimento Web Full Stack. Aproveite a noite para conhecer o melhor da culinária brasileira."
            date="15-12-2022"
            time="20:30"
            location="Good Chef"
          />
          <CardEvent
            image="./images/events/1.jpg"
            title="Dia dos namorados"
            desc="Faça sua reserva para o dia dos namorados e ganhe um brinde especial nesta noite especial. Garanta um preço promocional para você e seu amor curtirem o melhor da gastronomia."
            date="12-06-2023"
            time="19:00"
            location="+Good Chef"
          />
        </div>
      </div>
    </StyledEvent>
  );
};

export default Event;