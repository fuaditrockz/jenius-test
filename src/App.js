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
            <Heading size="md">{contacts.length} Contacts</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              {contacts.map((contact) => {
                return (
                  <Flex
                    key={contact.id}
                    style={{
                      cursor: "pointer",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                    _hover={{
                      backgroundColor: "gray.100",
                      transition: "all 0.5s ease-in-out",
                    }}
                  >
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
