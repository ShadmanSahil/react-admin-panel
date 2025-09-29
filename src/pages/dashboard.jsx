import { Box, Flex, Grid, GridItem, Show, SimpleGrid} from '@chakra-ui/react';
import Sidebar from '../components/dashboard-components/sidebar';
import Topbar from '../components/dashboard-components/topbar';
import DateBar from '../components/dashboard-components/datebar';
import Overview from '../components/dashboard-components/overview';
import AnalyticsSection from '../components/dashboard-components/analyticssection';
import NotificationsSection from '../components/dashboard-components/notificationssection';

export default function Dashboard() {
    document.title = "Dashboard"
    
    return (
        
        <Flex minH="100dvh" w="100vw" bg="gray.50">

            <Flex display={{base:"none", md:"none", lg:"flex"}}>
                <Sidebar />
            </Flex>
            

            <Box as="main" flex="1" minW={0} display="flex" flexDir="column" px={6}>
                <Topbar />

                <Box as="section" flex="1" py={5}>
                    <DateBar />

                    <Grid
                        templateColumns={{ base: "repeat(12, 1fr)" }}
                        gap={6}
                        py={5}
                    >
                        <GridItem colSpan={{ base: 12, lg: 12 }} minW={0}>
                            <Overview />
                        </GridItem>
                        

                        <AnalyticsSection />

                        <NotificationsSection />

                    </Grid>
                </Box>
            </Box>
        </Flex>
    )
}