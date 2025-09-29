import { Card, Text, Box, Link, Stack, Separator} from "@chakra-ui/react"
import { Flex, HStack, Icon } from "@chakra-ui/react"

export default function NotificationsCard() {
    return(
        <>
        <Card.Root rounded={"xl"} h={"337px"} flex={{ base: "unset", md: 2 }} w={{ base: "full" }}>
        <Card.Body gap={3} h="full" minH={0}>
            <Card.Title h={"40px"}>
                <HStack spacing={2} align="center">
                    <Text font={"Inter"} fontWeight={"500"} fontStyle={"medium"} fontSize={"18px"} color={"#161819"}>Notifications of Take Downs</Text>
                    <Flex ml="auto" align="right">
                        <Link variant="plain" href="#" color={"#000000"}font={"Inter"} fontWeight={"500"} fontStyle={"medium"} fontSize={"14px"}>
                            View All
                        </Link>
                    </Flex>
                </HStack>
            </Card.Title>

            <Box as={Card.Description} minH={0} overflowY="auto" pr={1} py={0.5}>
                <Stack>
                    <Card.Root variant={"outline"} rounded={"lg"} py={2} px={3} border={"none"}>
                        <HStack>
                        <Text fontSize="sm" fontWeight="medium">
                            Mademoiselle 3.4fl.oz 100 ml perfume, CHANEL
                        </Text>
                        <Flex display={{base:"none", md: "flex", lg:"none", xl:"flex"}}>
                        <Text fontSize="xs" color="gray.500">
                            https://yourproducturlgoeshere1122.com
                        </Text>
                        </Flex>
                        <Flex ml="auto" align="right">
                            <Text fontSize="xs" color="gray.500">
                                1 min ago
                            </Text>
                        </Flex>
                        </HStack>
                    </Card.Root>

                    <Separator/>

                    <Card.Root size="sm" variant={"outline"} rounded={"lg"} py={2} px={3} border={"none"} >
                        <HStack>
                        <Text fontSize="sm" fontWeight="medium">
                            Cigarettes Crush balls Aroma, BLUE 
                        </Text>
                        <Flex display={{base:"none", md: "flex", lg:"none", xl:"flex"}}>
                        <Text fontSize="xs" color="gray.500">
                            https://yourproducturlgoeshere1122.com
                        </Text>
                        </Flex>
                        <Flex ml="auto" align="right">
                            <Text fontSize="xs" color="gray.500">
                                2 min ago
                            </Text>
                        </Flex>
                        </HStack>
                    </Card.Root>

                    <Separator/>

                    <Card.Root size="sm" variant={"outline"} rounded={"lg"} py={2} px={3} border={"none"} >
                        <HStack>
                        <Text fontSize="sm" fontWeight="medium">
                            Pokémon Enamel Pins Lot you can choose from  
                        </Text>
                        <Flex display={{base:"none", md: "flex", lg:"none", xl:"flex"}}>
                        <Text fontSize="xs" color="gray.500">
                            https://yourproducturlgoeshere1122.com
                        </Text>
                        </Flex>
                        <Flex ml="auto" align="right">
                            <Text fontSize="xs" color="gray.500">
                                2 min ago
                            </Text>
                        </Flex>
                        </HStack>
                    </Card.Root>

                    <Separator/>

                    <Card.Root size="sm" variant={"outline"} rounded={"lg"} py={2} px={3}  border={"none"}>
                        <HStack>
                        <Text fontSize="sm" fontWeight="medium">
                            4 PCS Herb Tobacco Spice Grinder, COMBAT
                        </Text>
                        <Flex display={{base:"none", md: "flex", lg:"none", xl:"flex"}}>
                        <Text fontSize="xs" color="gray.500">
                            https://yourproducturlgoeshere1122.com
                        </Text>
                        </Flex>
                        <Flex ml="auto" align="right">
                            <Text fontSize="xs" color="gray.500">
                                2 min ago
                            </Text>
                        </Flex>
                        </HStack>
                    </Card.Root>

                    <Separator/>

                    <Card.Root size="sm" variant={"outline"} rounded={"lg"} py={2} px={3} border={"none"}>
                        <HStack>
                        <Text fontSize="sm" fontWeight="medium">
                            Cute Animal Plushies Lot – Select the Ones You Like
                        </Text>
                        <Flex display={{base:"none", md: "flex", lg:"none", xl:"flex"}}>
                        <Text fontSize="xs" color="gray.500">
                            https://yourproducturlgoeshere1122.com
                        </Text>
                        </Flex>
                        <Flex ml="auto" align="right">
                            <Text fontSize="xs" color="gray.500">
                                4 min ago
                            </Text>
                        </Flex>
                        </HStack>
                    </Card.Root>

                    <Separator/>

                    <Card.Root size="sm" variant={"outline"} rounded={"lg"} py={2} px={3} border={"none"}>
                        <HStack>
                        <Text fontSize="sm" fontWeight="medium">
                            Retro Game Console Stickers Bundle – Choose Your Design
                        </Text>
                        <Flex display={{base:"none", md: "flex", lg:"none", xl:"flex"}}>
                        <Text fontSize="xs" color="gray.500">
                            https://yourproducturlgoeshere1122.com
                        </Text>
                        </Flex>
                        <Flex ml="auto" align="right">
                            <Text fontSize="xs" color="gray.500">
                                5 min ago
                            </Text>
                        </Flex>
                        </HStack>
                    </Card.Root>

                    <Separator/>

                    <Card.Root size="sm" variant={"outline"} rounded={"lg"} py={2} px={3} border={"none"}>
                        <HStack>
                        <Text fontSize="sm" fontWeight="medium">
                            Anime Character Keychains Set – Pick Your Favorite
                        </Text>
                        <Flex display={{base:"none", md: "flex", lg:"none", xl:"flex"}}>
                        <Text fontSize="xs" color="gray.500">
                            https://yourproducturlgoeshere1122.com
                        </Text>
                        </Flex>
                        <Flex ml="auto" align="right">
                            <Text fontSize="xs" color="gray.500">
                                5 min ago
                            </Text>
                        </Flex>
                        </HStack>
                    </Card.Root>
                    </Stack>
            </Box>
        </Card.Body>
        </Card.Root>
        </>
    
    )
}