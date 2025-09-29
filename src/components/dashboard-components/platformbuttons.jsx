import { useState } from "react";
import { Button, HStack, Text, Flex} from "@chakra-ui/react";

export default function PlatformButtons() {
  const [active, setActive] = useState("AliBaba");
  const platforms = ["AliBaba", "AliExpress", "All"];

  return (
    <HStack w="full" spacing={0}>
      <Flex display={{base:"none", lg:"flex"}}>
        <Text fontFamily="Inter"
          fontWeight="500"
          fontSize="12px"
          lineHeight="tall"
          color="fg.muted">
          Choose Platform:
        </Text> 
      </Flex>
      
      {platforms.map((platform) => (
        <Button
          key={platform}
          onClick={() => setActive(platform)}
          flex="1"
          bg={active === platform ? "#6F6CF3" : "white"}
          color={active === platform ? "white" : "#161819"}
          borderColor={active === platform ? "#6F6CF3" : "white"}
          _hover={{
            bg: active === platform ? "#6F6CF3" : "gray.50",
          }}
          fontSize="14px"
          fontWeight="500"
          fontFamily="Inter"
        >
          {platform}
        </Button>
      ))}
    </HStack>
  );
}
