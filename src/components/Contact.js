import { Box, Text, Flex, Avatar, Badge } from "@chakra-ui/react";

function Contact({ contactData }) {
  const { id, firstName, lastName, age, photo } = contactData;

  return (
    <Flex
      key={id}
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
      <Avatar src={photo} />
      <Box ml="3">
        <Text fontWeight="bold">
          {firstName} {lastName}
          <Badge ml="1" colorScheme="green">
            {age}
          </Badge>
        </Text>
        <Text fontSize="sm">{id}</Text>
      </Box>
    </Flex>
  );
}

export default Contact;
