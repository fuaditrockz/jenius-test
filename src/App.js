import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setContacts } from "./store/reducers";

import Contact from "./components/Contact";
import Loading from "./components/Loading";

function App() {
  const contacts = useSelector((state) => state.app.value.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contacts.length === 0) {
      fetch("https://contact.herokuapp.com/contact")
        .then((response) => response.json())
        .then((data) => {
          dispatch(setContacts(data.data));
        });
    }
  }, [contacts, dispatch]);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          padding: "20px",
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <Container>
          <Heading as="h4" size="xl" noOfLines={1}>
            Retrieve Contacts by Jenius Test
          </Heading>
        </Container>
      </header>
      <Container style={{ paddingTop: 100 }}>
        <Card>
          <CardHeader>
            <Heading size="md">
              {contacts.length > 0
                ? contacts.length + " Contacts"
                : "Loading Contacts..."}
            </Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <Contact key={contact.id} contactData={contact} />
                ))
              ) : (
                <Loading />
              )}
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default App;
