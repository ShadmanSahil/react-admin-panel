import { Button, Card, Text, HStack, Icon} from "@chakra-ui/react"
import { BiBarChartSquare } from "react-icons/bi";


export default function TakedownCard() {
  return (
    <Card.Root flex={"1"} rounded={"xl"}>
      <Card.Body>
        {/* <Avatar.Root size="lg" shape="rounded">
          <Avatar.Image src="https://picsum.photos/200/300" />
          <Avatar.Fallback name="Nue Camp" />
        </Avatar.Root> */}
        <Card.Title h={"40px"}>
            <HStack spacing={2} align="center">
                <Icon as={BiBarChartSquare} boxSize={5} color={"fg.muted"} />
                <Text font={"Inter"} fontWeight={"400"} color={"fg.muted"} fontStyle={"regular"} fontSize={"16px"}>Number of Takedowns</Text>
            </HStack>
        </Card.Title>
        <Card.Description>
          <HStack spacing={2} align="center">
            <Text font={"Inter"} fontWeight="600" fontSize="40px" fontStyle={"semibold"} color="#161819">593568</Text>
            <Button variant="solid" w={"70"} h="25px" bg={"#EBFDEF"} color={"#42AA65"} fontSize={"10px"} _hover={{bg:"#EBFDEF", borderColor:"#EBFDEF"}} rounded={"4xl"} cursor="default">↑ 20.5%</Button>
          </HStack>
            <Text font={"Inter"} fontWeight="400" fontSize="14px" fontStyle={"regular"} color={"fg.muted"}>October 2023</Text>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  )
}
