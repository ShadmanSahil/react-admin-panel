import { GridItem} from "@chakra-ui/react"
import AnalyticsCard from "./analyticscard";
import FakeSellerCard from "./fakesellercard";

export default function AnalyticsSection() {
  return (
    <>
    {/* {2:1 layout (8/4 on desktop) */}
    
      <GridItem colSpan={{ base: 12, lg:8 }}>
        <AnalyticsCard />
      </GridItem>

      <GridItem colSpan={{ base: 12, lg: 4 }}>
        <FakeSellerCard />
      </GridItem>

    </>
  )
}
