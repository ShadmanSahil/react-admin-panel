import { GridItem, SimpleGrid} from "@chakra-ui/react"
import TakedownCard from "./takedowncard";
import ScrappedCard from "./scrappedcard";
import NoticesCard from "./noticescard";

export default function Overview() {
    return (
        <SimpleGrid columns={{ base: 1, xl: 3}} gap={6}>
            <TakedownCard/>
            <ScrappedCard />
            <NoticesCard />

        </SimpleGrid>
    )
}