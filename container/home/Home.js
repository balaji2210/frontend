import {
  CardContainer,
  Container,
  ImageContainer,
  Wrapper,
} from "./Home.styles";
import { Poster } from "@/components/utils/images";
import LoginCard from "@/components/loginCard/LoginCard";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  const userId =
    typeof window !== "undefined" ? localStorage?.getItem("user_id") : null;

  useEffect(() => {
    if (userId) {
      router?.push("/profile");
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <img src={Poster?.src} />
        </ImageContainer>
      </Container>
      <CardContainer>
        <LoginCard />
      </CardContainer>
    </Wrapper>
  );
};

export default Home;
