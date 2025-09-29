// import { Box, Flex, Grid, GridItem} from '@chakra-ui/react';
// import Sidebar from "../../components/dashboard-components/sidebar";
// import DateBar from '../../components/dashboard-components/datebar';
// import Overview from '../../components/dashboard-components/overview';
// import ReviewsTopbar from '../../components/grid-components/reviewstopbar';
// import ProductListBar from '../../components/grid-components/productlistbar';
// import ProductsGrid from '../../components/grid-components/productsgrid';

// const products = [
//   {
//     id: "1",
//     imageSrc: "/images/one.jpg",          // public/images/one.jpg
//     title: "Green Sofa",
//     url: "https://example.com/product/1",
//     status: "Active",
//     statusColor: "blackAlpha.600",
//   },
//   {
//     id: "2",
//     imageSrc: "/images/two.jpg",
//     title: "Oak Table",
//     url: "https://example.com/product/2",
//     status: "Flagged",
//     statusColor: "orange.400",
//   },
//   {
//     id: "3",
//     imageSrc: "/images/three.jpg",
//     title: "Reading Lamp",
//     url: "https://example.com/product/3",
//     status: "Removed",
//     statusColor: "red.500",
//   },
// ];


// export default function ReviewsGrid() {
//     return (
      
//         <Flex minH="100dvh" w="100vw" bg="gray.50">
//             <Sidebar />
//             <Box as="main" flex="1" minW={0} display="flex" flexDir="column">
//                 <ReviewsTopbar />

//                 <Box as="section" flex="1">
//                     <Grid
//                         templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
//                         gap={6}
//                         px={6}
//                         py={6}
//                     >

//                         <ProductListBar />

//                         <ProductsGrid />

//                     </Grid>
//                 </Box>

//             </Box>
//         </Flex>
//     )
// }

import { Box, Flex, Grid, GridItem, SimpleGrid} from '@chakra-ui/react';
import Sidebar from "../../components/dashboard-components/sidebar";
import DateBar from '../../components/dashboard-components/datebar';
import Overview from '../../components/dashboard-components/overview';
import ReviewsTopbar from '../../components/grid-components/reviewstopbar';
import ProductListBar from '../../components/grid-components/productlistbar';
import ProductsGrid from '../../components/grid-components/productsgrid';

const products = [
  {
    id: "1",
    imageSrc: "/images/one.jpg",          // public/images/one.jpg
    title: "Green Sofa",
    url: "https://example.com/product/1",
    status: "Active",
    statusColor: "blackAlpha.600",
  },
  {
    id: "2",
    imageSrc: "/images/two.jpg",
    title: "Oak Table",
    url: "https://example.com/product/2",
    status: "Flagged",
    statusColor: "orange.400",
  },
  {
    id: "3",
    imageSrc: "/images/three.jpg",
    title: "Reading Lamp",
    url: "https://example.com/product/3",
    status: "Removed",
    statusColor: "red.500",
  },
];


export default function ReviewsGrid() {
  document.title = "Reviews"
    return (

      
        <Flex minH="100dvh" w="100vw" bg="gray.50">
          <Flex display={{base:"none", md:"none", lg:"flex"}}>
            <Sidebar />
          </Flex>
            <Box as="main" flex="1" minW={0} display="flex" flexDir="column" px="6" >

                <ReviewsTopbar />
    
                <Box as="section" flex="1" py={5}>

                  <ProductListBar />

                    <Grid
                        templateColumns={{ base: "repeat(12, 1fr)" }}
                        gap={6}
                        py={5}
                    >

                      <GridItem colSpan={{ base: 12, lg: 12 }} minW={0}>
                        <ProductsGrid />
                      </GridItem>
                        

                    </Grid>
                </Box>


            </Box>
        </Flex>
    )
}