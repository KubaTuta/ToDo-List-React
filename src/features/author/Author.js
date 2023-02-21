import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Description } from "./styled";

const Author = () => (
  <Container>
    <div>
      <Header title="O autorze" />
      <Section
        title="Trochę o mnie"
        body={
          <Description>
            <p>Niespełniony fizjoterapeuta, elektronik,</p>
            <p>żeglarz, milośnik psów i niedługo Frontend.</p>
            <p> Ciekawi mnie przyroda, fizyka,</p>
            <p>sporty kopane i dbanie o zdrowie.</p>
            <p>Jak podróże to bez planu:)</p>
          </Description>
        }
      />
    </div>

  </Container>

);

export default Author;
