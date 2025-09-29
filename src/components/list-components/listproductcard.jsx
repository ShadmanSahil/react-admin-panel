import { Flex, VStack, Card, HStack, Stack, Text, Image, Button, Badge} from '@chakra-ui/react';

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


export default function ListProductCard(
    {
    imageSrc,
    title,
    url,
    status,
    }
) {
    return (    
        
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
                        <Flex
                        gap={3}
                        align={{ base: "center", lg: "center" }}
                        flex="1"
                        direction={{ base: "column", lg: "row" }} // 👈 vertical on mobile, horizontal on desktop
                        >

                                <Image
                                src={imageSrc}
                                alt={title}
                                h="68px"
                                w="68px"
                                rounded="md"/>

                            
                            <VStack align={{base:"center", lg:"flex-start"}} spacing={0}>
                                <Card.Title>{title}</Card.Title>
                                <Text color="fg.muted" fontSize="12px">
                                    {url}
                                </Text>
                            </VStack>
                            <Badge
                                fontSize="14px"
                                bg={statusBgColors[status] || statusBgColors.default}
                                color={statusColors[status] || statusColors.default}
                            >
                                {status}
                            </Badge>

                        </Flex>
    
                        {/* </HStack> */}

                        <Flex
                        gap={2}
                        w={{ base: "full", lg: "auto" }}
                        ml={{ lg: "auto" }}
                        justify={{ base: "center", md: "flex-end", lg: "flex-end" }}   // center in column, right on desktop
                        align={{ base: "center", lg: "center" }} 
                        order={{ base: 99, lg: 0 }}
                        direction={{ base: "column", md: "column", lg: "row" }} // 👈 column until lg
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
                                Source
                                </Text>
                            </Button>
    

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

                        </Flex>
    
                    </Flex>

                </Card.Description>
        
            </Card.Body>

        </Card.Root>
        
    )
}