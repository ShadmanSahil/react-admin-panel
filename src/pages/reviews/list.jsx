import { Box, Flex, Grid, GridItem, VStack, Card, HStack, Stack, Text, Link, Separator, Show} from '@chakra-ui/react';
import Sidebar from "../../components/dashboard-components/sidebar";
import DateBar from '../../components/dashboard-components/datebar';
import Overview from '../../components/dashboard-components/overview';
import ReviewsTopbar from '../../components/grid-components/reviewstopbar';
import ProductListBar from '../../components/grid-components/productlistbar';
import ProductsGrid from '../../components/grid-components/productsgrid';
import ListProductCard from '../../components/list-components/listproductcard';

const products = [
  {
    id: "1",
    imageSrc: "/images/one.jpg",        
    title: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    status: "removed"
  },
  {
    id: "2",
    imageSrc: "/images/two.jpg",
    title: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    status: "removed"
  },
  {
    id: "3",
    imageSrc: "/images/three.jpg",
    title: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    status: "removed"
  },
  {
    id: "4",
    imageSrc: "/images/four.jpg",
    title: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    status: "reminder"
  },
  {
    id: "5",
    imageSrc: "/images/five.jpg",
    title: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    status: "removed"
  },
  {
    id: "6",
    imageSrc: "/images/six.jpg",
    title: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    status: "removed"
  },
  {
    id: "7",
    imageSrc: "/images/seven.jpg",
    title: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    status: "removed"
  },
  {
    id: "8",
    imageSrc: "/images/eight.jpg",
    title: "Product title goes here",
    url: "https://yourproducturlgoeshere1122.com",
    status: "removed"
  },

];


export default function ReviewsList() {
  document.title = "Reviews"
    return (
        <Flex minH="100dvh" w="100vw" bg="gray.50">

          <Flex display={{base:"none", md:"none", lg:"flex"}}>
            <Sidebar />
          </Flex>
            
            <Box as="main" flex="1" minW={0} display="flex" flexDir="column" px={6}>
                <ReviewsTopbar />

                <Box as="section" flex="1">

                    <Stack gap={6} py={5}>

                      <ProductListBar />

                      {
                        products.map((product) => (
                          <ListProductCard imageSrc={product.imageSrc} title={product.title} url={product.url} status={product.status}/>
                
                        ))
                        }

                  </Stack>

                    
                </Box>

            </Box>
        </Flex>
    )
}