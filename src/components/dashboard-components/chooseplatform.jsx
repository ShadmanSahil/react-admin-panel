import { HStack, Text, Flex } from "@chakra-ui/react";
import PlatformButtons from "./platformbuttons";

export default function ChoosePlatform() {
  return (
    <HStack w="full" spacing={2}>
      <Text
        fontFamily="Inter"
        fontWeight="500"
        fontSize="12px"
        lineHeight="tall"
        color="fg.muted"
      >
        Choose Platform:
      </Text>
      <Flex flex="1">    {/* 👈 let the button group stretch */}
        <PlatformButtons />
      </Flex>
    </HStack>
  );
}
