import { Card, Text, Box, Flex, HStack } from "@chakra-ui/react"
import { IoEllipse } from "react-icons/io5";
import AnalyticsChart from "./analyticschart";

export default function AnalyticsCard() {
    return(
        <>
        <Card.Root rounded={"xl"} h={{base:"auto",lg:"337px"}} flex={{ base: "unset", md: 2 }} w={{ base: "full" }}>
        <Card.Body>
            <Card.Title h={"40px"}>
                <HStack spacing={2} align="center">
                    <Text font={"Inter"} fontWeight={"500"} fontStyle={"medium"} fontSize={"18px"} color={"#161819"}>Analytics</Text>
                    <Flex ml="auto" align="center" gap="10px" display={{base:"none", sm:"none" ,md:"flex", lg:"flex", xl:"flex"}}>
                        <IoEllipse color="#D7F0FC"/>
                        <Text font={"Inter"} fontWeight={"600"} fontStyle={"semibold"} fontSize={"12px"} color={"#161819"} >Listings Removed</Text>
                        <IoEllipse color="#CDEFD9"/>
                        <Text font={"Inter"} fontWeight={"600"} fontStyle={"semibold"} fontSize={"12px"} color={"#161819"}>Notices Sent</Text>
                        <IoEllipse color="#FEA4A3"/>
                        <Text font={"Inter"} fontWeight={"600"} fontStyle={"semibold"} fontSize={"12px"} color={"#161819"}>Notices Rejected</Text>
                    </Flex>
                </HStack>
            </Card.Title>

            <Card.Description>
                <Box w="full" h="250px">   {/* control size here */}
                    <AnalyticsChart />
                </Box>
            </Card.Description>
        </Card.Body>
        </Card.Root>
        </>
    
    )
}