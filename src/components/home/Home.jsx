import LeftSide from "../leftside/LeftSide";
import Main from "../main/Main";
import RightSide from "../rightside/RightSide";
import { HomeContainer, Layout, Section } from "./HomeStyle";

function Home() {
  return (
    <HomeContainer>
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </HomeContainer>
  );
}

export default Home;
