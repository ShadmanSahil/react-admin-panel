import { Grid, GridItem, Text, Flex } from "@chakra-ui/react";
import ChooseView from "./chooseview";

export default function ProductListBar() {
  return (
    <Flex
          w="full"
          // minH="72px"
          align="center"
          direction={{ base: "column", md: "column", lg:"row" }} // stack on mobile, row on desktop
          justify="space-between" // space between left/right
          gap={{ base:2, md:2 }}
          bgColor={"gray.50"}
        >
          <Flex display={{base:"none", md:"none", lg:"flex", xl: "flex"}}>
            <Text
              fontFamily="Inter"
              fontWeight="500"
              fontSize="18px"
              lineHeight="tall"
            >
              Product List
            </Text>
          </Flex>

          

          <Flex
            align="center"
            gap={0}
            w={{ base: "full", lg: "auto" }}
            justify={{ base: "center", lg: "flex-end" }}
            direction={{ base: "column", md: "column", lg:"row" }}
          >

            <ChooseView />

          </Flex>


      </Flex>
  );
}
