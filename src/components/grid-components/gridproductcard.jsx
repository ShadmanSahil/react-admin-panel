import { Button, Card, Image, Text, Flex, Box, Badge} from "@chakra-ui/react"

const statusBgColors = {
  removed: "#EBFDEF",
  reminder: "#FFEFE7",
  default: "#85858533"
};

const statusColors = {
  removed: "#42AA65",
  reminder: "#FF9600",
  default: "white"
};


export default function GridProductCard(
    {
  imageSrc,
  title,
  url,
  status,
})
    {
  return (
    <Card.Root w="full" overflow="hidden" rounded={"4xl"}>
       <Card.Header p={3}> {/* remove padding so image spans full width */}
            <Box position="relative">
        <Image
          src={imageSrc}
          alt="Green double couch with wooden legs"
          h="300px"
          w="full"
          objectFit="cover"
          rounded={"4xl"}
        />

        <Badge 
          position="absolute"
          top={3}
          left={3}
          fontSize={"14px"} 
          bg={statusBgColors[status] || statusColors.Default}
          color={statusColors[status] || statusColors.Default}
        >
          {status}
        </Badge>
        
      </Box>
        </Card.Header>
      <Card.Body gap="1" py={5}>
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          <Text color={"fg.muted"} fontSize={"12px"}>{url}</Text>
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Flex w="full" align="center">
            <Button w="50%" h="40px" bg="#6F6CF3" _hover={{ bg: "white", color: "#6F6CF3" }}>
            <Text font="Inter" fontWeight="600" fontSize="14px">View Details</Text>
            </Button>

            <Button ml="auto" h="34px" bg="#161819" _hover={{ bg: "white", color: "#6F6CF3" }}>
            <Text font="Inter" fontWeight="600" fontSize="14px">Source</Text>
            </Button>
        </Flex>
        </Card.Footer>
    </Card.Root>
  )
}

