import { HStack, Text, Flex } from "@chakra-ui/react";

import ViewButtons from "./viewbuttons";

export default function ChooseView() {
  return (
    <HStack w="full" spacing={2}>
      <Flex flex="1">    {/* 👈 let the button group stretch */}
        <ViewButtons />
      </Flex>
    </HStack>
  );
}
