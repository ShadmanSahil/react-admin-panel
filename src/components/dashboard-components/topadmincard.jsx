import { Avatar, Button, Card, Text, GridItem, Grid, Flex, HStack, Link, Stack, defineStyle } from "@chakra-ui/react"
import { } from "@chakra-ui/react"

const user = [
  {
    id: "1",
    name: "Carl Meadows",
    position: "Admin",
    reviewed: "2464"
  },
]

const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "#F1F1F1",
  outlineOffset: "2px",
  outlineStyle: "solid",
})

export default function TopAdminCard() {
    return(
        <>
        <Card.Root rounded={"xl"} flex={{ base: "unset", md: 1 }} w={{ base: "full" }} h={"auto"}>
            <Card.Body display="flex" flexDir="column" gap={3} h="full" minH={0}>
                
                <Card.Title h={"40px"}>
                    <HStack spacing={2} align="center">
                        <Text font={"Inter"} fontWeight={"500"} fontStyle={"medium"} fontSize={"18px"} color={"#161819"}>Top Admin</Text>
                        <Flex ml="auto" align="right">
                            <Link variant="plain" href="#" color={"#000000"}font={"Inter"} fontWeight={"500"} fontStyle={"medium"} fontSize={"14px"}>
                                View All
                            </Link>
                        </Flex>
                    </HStack>
                </Card.Title>

                <Grid templateColumns={{ base: "1fr", xl: "1fr 2fr" }}  gap={{base:"3", xl:"5"}} alignItems="center" minW={0}>
                    {/* Avatar (1/3 width) */}
                    <GridItem minW="0">
                        <Stack align="center" gap={3}> {/* spacing controls gap */}
                            <Avatar.Root css={ringCss} colorPalette="#F1F1F1" w="84px" h={"84px"}>
                                <Avatar.Fallback name="Top Admin" />
                                <Avatar.Image src="/images/top-admin.jpg"/>
                            </Avatar.Root>
                            <Stack alignItems={"center"} gap={0}>
                                <Text font={"Inter"} fontWeight={"500"}  fontSize={"12px"} color={"#161819"}>Carl Meadows</Text>
                                <Text font={"Inter"} fontWeight={"400"}fontSize={"10px"} color={"fg.muted"}>Admin</Text>
                            </Stack>
                        </Stack>
                    </GridItem>

                    {/* Buttons stacked (2/3 width) */}
                    <GridItem minW={0}>
                        <Stack spacing={3}>
                        <Button h="50px" w="full" bgColor={"#F4F6F7"} color={"#161819"} _hover={{bg:"#F4F6F7", borderColor:"#EBFDEF"}} cursor={"default"}>
                            <Text font={"Inter"} fontWeight={"500"} fontSize={"12px"} color={"fg.muted"}>Notices Reviewed: </Text><Text font={"Inter"} fontWeight={"600"} fontStyle={"semibold"} fontSize={"16px"} color={"#161819"}>26,534</Text>
                        </Button>
                        <Button h="50px" w="full" bgColor={"#6F6CF3"} _hover={{bg:"white", color:"#6F6CF3"}}>
                            <Text font={"Inter"} fontWeight={"600"} fontSize={"16px"} >View Details</Text>
                        </Button>
                        </Stack>
                    </GridItem>
                </Grid>
                    
                    
            </Card.Body>
        </Card.Root>
        </>
    
    )
}