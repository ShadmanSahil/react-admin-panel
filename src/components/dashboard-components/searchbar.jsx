import { Flex, Input, InputGroup} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci"; 

export default function searchBar(){ 
  return ( 
  <Flex w={"full"}> 
    <InputGroup endElement={<CiSearch />} w={{base: "full", lg: "500px"}}> 
      <Input placeholder="Search" variant="subtle" fontSize={"16px"} fontWeight={"400"} bgColor={"white"}/> 
    </InputGroup> 
  </Flex> 
  ) 
}