import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";
import "./App.css";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const test = useSelector((state) => state.contacts.value);

  const [contacts, setContacts] = useState([]);

  console.log("Test Contacts", test);

  useEffect(() => {
    fetch("https://contact.herokuapp.com/contact")
      .then((response) => response.json())
      .then((data) => {
        console.log("Test Data", data);
        setContacts(data.data);
      });
  }, []);

  console.log("Test Contact Get Data", contacts);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Container>
        <Card>
          <CardHeader>
            <Heading size="md">Contacts</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading>
                <Text pt="2" fontSize="sm">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Overview
                </Heading>
                <Text pt="2" fontSize="sm">
                  Check out the overview of your clients.
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Analysis
                </Heading>
                <Text pt="2" fontSize="sm">
                  See a detailed analysis of all your business clients.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default App;
