import { Button, Flex, Text, Drawer, Portal, CloseButton, HStack } from '@chakra-ui/react'
import SearchBar from './searchbar'
import Persona from './persona'
import DrawerSidebar from '../drawersidebar'

export default function Topbar() {
  return (
    <Flex
      as="header"
      w="full"
      minH="72px"
      align="center"
      direction={{ base: "column", md: "column", lg:"row" }} // stack on mobile, row on desktop
      justify="space-between" // space between left/right
      gap={{ base:2, md:2 }}
      zIndex="docked"
      position="sticky"
      top={0}
      py={{base:3, md:3, lg:0}}
      bgColor={"gray.50"}
    > 

      <Flex align={{base:"center", lg:"flex-start"}} justify={{base:"center", lg:"flex-start"}} w="full" position="relative">
        <Flex justify="flex-start" position="absolute" left="0" display={{ base: "flex", md: "flex", lg:"none" }}>
          <DrawerSidebar />
        </Flex>

        <Text
          fontFamily="'Urbanist', sans-serif"
          fontWeight="600"
          fontSize="32px"
          color="gray.800"
        >
          Dashboard
        </Text>
      </Flex>

      

      

      <Flex
        align="center"
        gap={0}
        w={{ base: "full", lg: "auto" }}
        justify={{ base: "center", lg: "flex-end" }}
        direction={{ base: "column", md: "column", lg:"row" }}
      >
          <SearchBar />
        
        <Flex display={{ base: "none", md: "none", lg:"flex" }}>
          <Persona />
        </Flex>

      </Flex>
      
    </Flex>
  )
}
