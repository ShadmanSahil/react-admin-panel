import { GridItem} from "@chakra-ui/react"
import NotificationsCard from"./notificationscard"
import TopAdminCard from"./topadmincard"

export default function AnalyticsSection() {
  return (
    <>
        <GridItem colSpan={{ base: 12, lg: 8 }}>
            <NotificationsCard/>
        </GridItem>

        <GridItem colSpan={{ base: 12, lg: 4 }}>
            <TopAdminCard/>
        </GridItem>
    </>
  )
}
