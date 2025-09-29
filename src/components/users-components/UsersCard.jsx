import { Flex, VStack, Card, HStack, Stack, Text, Image, Button, Box, Collapsible, Badge, Separator} from '@chakra-ui/react';

const statusBgColors = {
  offline: "gray.100",
  active: "green",
  default: "#85858533"
};

const statusColors = {
  offline: "gray.500",
  active: "white",
  default: "white"
};


export default function UsersCard(
    {
    imageSrc,
    name,
    email,
    status,
    lastActive,
    reviews,
    approved,
    country
    }
) {
    return (
        <Collapsible.Root unmountOnExit>

        

        
            <Card.Root
                rounded="xl"
                w="full"
                h={"full"}   // span whole available width
            >

            <Card.Body gap={3} h="full" minH={0} px={1}>
                
            <Card.Description minH={0} overflowY="auto" pr={1} py={0} px={3}>
                <Flex
                    w="full"
                    direction={{ base: "column", md: "column", lg: "row" }}
                    align={{ base: "center", lg: "center" }}
                    gap={{base: 3, md:3}}
                >
                    {/* LEFT SIDE */}
                    <HStack gap={3} align="center" flex="1">

                    <Image
                        src={imageSrc}
                        alt={name}
                        h="68px"
                        w="68px"
                        rounded="md"
                    />
                    <VStack align="flex-start" spacing={0}>
                        <Card.Title>{name}</Card.Title>
                        <Text color="fg.muted" fontSize="12px">
                            {email}
                        </Text>
                    </VStack>
                    <Badge
                        fontSize="14px"
                        bg={statusBgColors[status] || statusBgColors.default}
                        color={statusColors[status] || statusColors.default}
                    >
                        {status}
                    </Badge>

                    </HStack>

                    {/* RIGHT SIDE (pinned to end on desktop, below on mobile) */}
                    {/* <Flex
                        gap={2}
                        w={{ base: "full", lg: "auto" }}
                        ml={{ lg: "auto" }}                // pushes to end of row on lg+
                        justify={{ base: "stretch", lg: "flex-end" }}
                        order={{ base: 99, lg: 0 }}        // drop below everything on mobile
                    >
                    <Button
                        h="40px"
                        bg="#161819"
                        _hover={{
                        bg: status === "offline" ? "#161819" : "white",
                        color: status === "offline" ? "white" : "black",
                        borderColor: "black",
                        }}
                        w={{ base: "full", lg: "100px" }}
                        cursor={status === "offline" ? "not-allowed" : "pointer"}
                        isDisabled={status === "offline"}
                    >
                        <Text fontFamily="Inter" fontWeight="500" fontSize="14px">Message</Text>
                    </Button>

                    <Collapsible.Trigger asChild>
                        <Button
                        h="40px"
                        bg="#6F6CF3"
                        w={{ base: "full", lg: "150px" }}
                        _hover={{ bg: "white", color: "#6F6CF3" }}
                        >
                        <Text fontFamily="Inter" fontWeight="500" fontSize="14px">View Details</Text>
                        </Button>
                    </Collapsible.Trigger>

                    </Flex> */}
                    <Flex
                    gap={2}
                    w={{ base: "full", lg: "auto" }}
                    ml={{ lg: "auto" }}
                    justify={{ base: "center", md: "flex-end", lg: "flex-end" }}   // center in column, right on desktop
                    align={{ base: "center", lg: "center" }} 
                    order={{ base: 99, lg: 0 }}
                    direction={{ base: "column", md: "row", lg: "row" }} // 👈 column until lg
                    >
                    <Button
                        h="40px"
                        bg="#161819"
                        _hover={{
                        bg: status === "offline" ? "#161819" : "white",
                        color: status === "offline" ? "white" : "black",
                        borderColor: "black",
                        }}
                        w={{ base: "75%", md: "50%", lg: "100px" }}
                        cursor={status === "offline" ? "not-allowed" : "pointer"}
                        isDisabled={status === "offline"}
                    >
                        <Text fontFamily="Inter" fontWeight="500" fontSize="14px">
                        Message
                        </Text>
                    </Button>

                    <Collapsible.Trigger asChild>
                        <Button
                        h="40px"
                        bg="#6F6CF3"
                        _hover={{ bg: "white", color: "#6F6CF3" }}
                        w={{ base: "75%", md: "50%", lg: "100px" }}
                        >
                        <Text fontFamily="Inter" fontWeight="500" fontSize="14px">
                            View Details
                        </Text>
                        </Button>
                    </Collapsible.Trigger>
                    </Flex>

                </Flex>
                </Card.Description>

            </Card.Body>
        </Card.Root>

        <Collapsible.Content>
            <Box padding="4" borderWidth="1px" rounded={"xl"} border={"none"}>
                <VStack>
                    <Text>
                        Last Active: {lastActive}
                    </Text>
                    <Text>
                        Reviews: {reviews}
                    </Text>
                    <Text>
                        Approved Percentage: {approved}%
                    </Text>
                    <Text>
                        Country: {country}
                    </Text>
                </VStack>
            </Box>
            <Separator/>
        </Collapsible.Content>

        </Collapsible.Root>
        
    )
}