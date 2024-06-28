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
  Flex,
  Avatar,
  Badge,
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
              {contacts.map((contact) => {
                return (
                  <Flex key={contact.id}>
                    <Avatar src={contact.photo} />
                    <Box ml="3">
                      <Text fontWeight="bold">
                        {contact.firstName} {contact.lastName}
                        <Badge ml="1" colorScheme="green">
                          {contact.age}
                        </Badge>
                      </Text>
                      <Text fontSize="sm">{contact.id}</Text>
                    </Box>
                  </Flex>
                );
              })}
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default App;
