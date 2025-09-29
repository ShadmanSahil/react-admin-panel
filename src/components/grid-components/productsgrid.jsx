// import { GridItem } from "@chakra-ui/react"
// import GridProductCard from "./gridproductcard";

// const products = [
//   {
//     id: "1",
//     imageSrc: "/images/one.jpg",        
//     title: "Product title goes here",
//     url: "https://yourproducturlgoeshere1122.com",
//     status: "removed"
//   },
//   {
//     id: "2",
//     imageSrc: "/images/two.jpg",
//     title: "Product title goes here",
//     url: "https://yourproducturlgoeshere1122.com",
//     status: "removed"
//   },
//   {
//     id: "3",
//     imageSrc: "/images/three.jpg",
//     title: "Product title goes here",
//     url: "https://yourproducturlgoeshere1122.com",
//     status: "removed"
//   },
//   {
//     id: "4",
//     imageSrc: "/images/four.jpg",
//     title: "Product title goes here",
//     url: "https://yourproducturlgoeshere1122.com",
//     status: "reminder"
//   },
//   {
//     id: "5",
//     imageSrc: "/images/five.jpg",
//     title: "Product title goes here",
//     url: "https://yourproducturlgoeshere1122.com",
//     status: "removed"
//   },
//   {
//     id: "6",
//     imageSrc: "/images/six.jpg",
//     title: "Product title goes here",
//     url: "https://yourproducturlgoeshere1122.com",
//     status: "removed"
//   },
//   {
//     id: "7",
//     imageSrc: "/images/seven.jpg",
//     title: "Product title goes here",
//     url: "https://yourproducturlgoeshere1122.com",
//     status: "removed"
//   },
//   {
//     id: "8",
//     imageSrc: "/images/eight.jpg",
//     title: "Product title goes here",
//     url: "https://yourproducturlgoeshere1122.com",
//     status: "removed"
//   },

// ];

// export default function ProductsGrid() {
//     return (
//         <>

//         {
//         products.map((product) => (
//             <GridItem colSpan={{ base: 12, md: 3 }}>
//                 <GridProductCard imageSrc={product.imageSrc} title={product.title} url={product.url} status={product.status}/>
//             </GridItem>

//         ))
//         }

//         </>
//     )
// }


import { GridItem, SimpleGrid, Box} from "@chakra-ui/react"
import GridProductCard from "./gridproductcard";

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

export default function ProductsGrid() {
    return (
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 4}} gap={6}>
        {
        products.map((product) => (
                <GridProductCard imageSrc={product.imageSrc} title={product.title} url={product.url} status={product.status}/>

        ))
        }

        </SimpleGrid>
    )
}
