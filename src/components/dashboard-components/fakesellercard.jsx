import { Avatar, Card, Text, Flex, HStack, Icon, Link, Stack, Box} from "@chakra-ui/react"
import { CiUser } from "react-icons/ci";

const users = [
  {
    id: "1",
    name: "John Mason",
    company: "company name",
    avatar: "https://i.pravatar.cc/300?u=iu",
    listing: "2464"
  },
  {
    id: "2",
    name: "Melissa Jones",
    company: "company name",
    avatar: "https://i.pravatar.cc/300?u=po",
    listing: "6345"
  },
  {
    id: "3",
    name: "Jane Doe",
    company: "company name",
    avatar: "https://i.pravatar.cc/300?u=po",
    listing: "3454"
  },
  {
    id: "4",
    name: "Antony Doe",
    company: "company name",
    avatar: "https://i.pravatar.cc/300?u=po",
    listing: "2020"
  },
  {
    id: "5",
    name: "Doe Doe ",
    company: "company name",
    avatar: "https://i.pravatar.cc/300?u=po",
    listing: "1444"
  },
]

const colorPalette = ["red", "blue", "green", "purple", "orange"]
const pickPalette = (id) => {
  const index = id.charCodeAt(0) % colorPalette.length
  return colorPalette[index]
}

export default function FakeSellerCard() {
    return(
        <>
        <Card.Root rounded={"xl"} flex={{ base: "unset", md: 1 }} w={{ base: "full" }} h={"337px"}>
            <Card.Body display="flex" flexDir="column" gap={3} h="full" minH={0}>
                <Card.Title h={"40px"}>
                    <HStack spacing={2} align="center">
                        <Text font={"Inter"} fontWeight={"500"} fontStyle={"medium"} fontSize={"18px"} color={"#161819"}>Top Fake Sellers</Text>
                        <Flex ml="auto" align="right">
                            <Link variant="plain" href="#" color={"#000000"}font={"Inter"} fontWeight={"500"} fontStyle={"medium"} fontSize={"14px"}>
                                View All
                            </Link>
                        </Flex>
                    </HStack>
                </Card.Title>

                 <Box as={Card.Description} flex="1" minH={0} overflowY="auto" pr={1}>
                    <Stack gap="3">
                        {users.map((user) => (
                            <HStack key={user.id} gap="3">
                              <Avatar.Root rounded="sm" colorPalette={pickPalette(user.id)}>
                                  <Icon as={CiUser} color={pickPalette(user.id)} strokeWidth="1" />
                              </Avatar.Root>

                              <Stack gap="0" minW={0}>
                                  <Text font={"Inter"} fontWeight={"500"} fontStyle={"medium"} fontSize={"12px"} color={"#161819"} noOfLines={1}>{user.name}</Text>
                                  <Text color="fg.muted" font={"Inter"} fontWeight={"400"} fontStyle={"medium"} fontSize={"10px"} noOfLines={1}>
                                      {user.company}
                                  </Text>
                              </Stack>

                              <Flex ml="auto">
                              <Text font={"Inter"} fontWeight={"500"} fontStyle={"medium"} fontSize={"14px"} color={"fg.muted"}>Listing #{user.listing}</Text>
                              </Flex>
                            </HStack>
                        ))}
                    </Stack>
                    </Box>
            </Card.Body>
        </Card.Root>
        </>
    
    )
}