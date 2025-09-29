import { Card, Text, Grid, GridItem, HStack, Icon, Box} from "@chakra-ui/react"
import { LuMessageSquareText } from "react-icons/lu";
import NoticesChart from "./noticechart";  


export default function NoticesCard() {
  return (
    <Card.Root flex={"1"} rounded={"xl"}>
      <Card.Body>
        <Card.Title h={"40px"}>
            <HStack spacing={2} align="center">
                <Icon as={LuMessageSquareText} boxSize={5} color={"fg.muted"} />
                <Text font={"Inter"} fontWeight={"400"} fontStyle={"regular"} fontSize={"16px"} color={"fg.muted"}>New Notices</Text>
            </HStack>
        </Card.Title>
        
        <Grid templateColumns="1fr 1fr" gap={5} alignItems="center">
            <GridItem>
              <Text font={"Inter"} fontWeight="600" fontSize="40px" fontStyle={"semibold"} color="#161819" w={"full"}>2395</Text>
              <Text font={"Inter"} fontWeight="400" fontSize="14px" fontStyle={"regular"} color={"fg.muted"}>October 2023</Text>
            </GridItem>

            {/* Buttons stacked (2/3 width) */}
            <GridItem w="full">
            <Box w="full" h="full">        {/* 👈 set a height */}
              <NoticesChart />
            </Box>
          </GridItem>
        </Grid>

      </Card.Body>
    </Card.Root>
  )
}
