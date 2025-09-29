import { Box, Flex, Grid, GridItem, VStack, Card, HStack, Stack, Text, Link, Separator} from '@chakra-ui/react';
import Sidebar from "../components/dashboard-components/sidebar";

import UsersListBar from '../components/users-components/UsersListBar';
import UsersCard from '../components/users-components/UsersCard';
import UsersTopBar from '../components/users-components/userstopbar';

const users = [
  {
    id: "1",
    imageSrc: "https://randomuser.me/api/portraits/women/5.jpg",        
    name: "Jane",
    email: "jane@gmail.com",
    status: "active",
    lastActive: "2025-09-15T09:20:00Z", 
    reviews: "248",
    approved: "98",
    country: "NL"
  },
  {
    id: "2",
    imageSrc: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "Jennifer",
    email: "jennifer@gmail.com",
    status: "active",
    lastActive: "2025-09-15T09:20:00Z", 
    reviews: "248",
    approved: "98",
    country: "NL"
  },
  {
    id: "3",
    imageSrc: "https://randomuser.me/api/portraits/men/31.jpg",
    name: "John",
    email: "johndoe@gmail.com",
    status: "active",
    lastActive: "2025-09-15T09:20:00Z", 
    reviews: "248",
    approved: "98",
    country: "NL"
  },
  {
    id: "4",
    imageSrc: "https://randomuser.me/api/portraits/women/42.jpg",
    name: "Susan",
    email: "susan@gmail.com",
    status: "active",
    lastActive: "2025-09-15T09:20:00Z", 
    reviews: "248",
    approved: "98",
    country: "NL"
  },
  {
    id: "5",
    imageSrc: "https://randomuser.me/api/portraits/men/42.jpg",
    name: "Tim",
    email: "tim@gmail.com",
    status: "offline",
    lastActive: "2025-09-15T09:20:00Z", 
    reviews: "248",
    approved: "98",
    country: "NL"
  },
  {
    id: "6",
    imageSrc: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "David",
    email: "daavid@gmail.com",
    status: "offline",
    lastActive: "2025-09-15T09:20:00Z", 
    reviews: "248",
    approved: "98",
    country: "NL"
  },
  {
    id: "7",
    imageSrc: "https://randomuser.me/api/portraits/men/70.jpg",
    name: "Mike",
    email: "mike@gmail.com",
    status: "offline",
    lastActive: "2025-09-15T09:20:00Z", 
    reviews: "248",
    approved: "98",
    country: "NL"
  },
  {
    id: "8",
    imageSrc: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    name: "Misha",
    email: "misha@gmail.com",
    status: "offline",
    lastActive: "2025-09-15T09:20:00Z", 
    reviews: "248",
    approved: "98",
    country: "NL"
  },

];


export default function Users() {
  document.title = "Users"
    return (
        <Flex minH="100dvh" w="100vw" bg="gray.50">
          
          <Flex display={{base:"none", md:"none", lg:"flex"}}>
            <Sidebar />
          </Flex>
            <Box as="main" flex="1" minW={0} display="flex" flexDir="column" px={6}>
                <UsersTopBar />

                <Box as="section" flex="1">

                    <Stack gap={6} py={6}>

                      <UsersListBar />

                      {
                      users.map((user) => (
                        <UsersCard imageSrc={user.imageSrc} name={user.name} status={user.status} lastActive={user.lastActive} reviews={user.reviews} approved={user.approved} country={user.country} email={user.email}/>
              
                      ))
                      }

                    </Stack>

                    
                </Box>

            </Box>
        </Flex>
    )
}