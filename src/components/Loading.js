import { Container } from "@chakra-ui/react";
import HashLoader from "react-spinners/HashLoader";

function Loading() {
  return (
    <Container style={{ marginBottom: 50, marginTop: 20 }}>
      <HashLoader
        color={"#FF8E53"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        cssOverride={{
          display: "block",
          margin: "0 auto",
          borderColor: "red",
        }}
      />
    </Container>
  );
}

export default Loading;
