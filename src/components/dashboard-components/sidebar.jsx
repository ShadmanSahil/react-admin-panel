import React from "react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Icon,
  Badge,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  FiHome, FiMessageSquare, FiTag, FiAperture,
  FiBell, FiSettings, FiUsers, FiLogOut,
} from "react-icons/fi";
import { CiHome } from "react-icons/ci";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/authcontext";


const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: CiHome },
  { label: "Reviews", href: "/reviews", icon: FiMessageSquare },
  { label: "Keywords", href: "/keywords", icon: FiTag },
  { label: "Web crawler", href: "/web", icon: FiAperture },
  { label: "Notifications", href: "/notifications", icon: FiBell, badge: 3 },
  { label: "Settings", href: "/settings", icon: FiSettings },
  { label: "Users", href: "/users", icon: FiUsers },
];

const SIDEBAR_W = "220px";      // Figma
const CONTENT_GUTTER = "24px";  // 244 - 220 = 24

function isPathActive(pathname, href) {
  // remove trailing slashes
  const p = pathname.replace(/\/+$/, '');
  const h = href.replace(/\/+$/, '');

  if (h === '/') return p === '/';
  return p === h || p.startsWith(h + '/');
}

function NavItem({ icon, label, href, badge }) {
  const { pathname } = useLocation();
  const isActive = isPathActive(pathname, href);
  
  return (
    <ChakraLink href={href} _hover={{ textDecoration: "none" }}>
      <Button
        as={RouterLink}
        to={href}
        w="full"
        justifyContent="flex-start"
        variant="ghost"
        height="44px"
        px="3"
        borderRadius="lg"
        bg={isActive ? "#6F6CF3" : "transparent"}
        color={isActive  ? "white" : "#161819"}
        _hover={{ bg: isActive ? "purple.100" : "gray.100" }}
      >
        {/* render icon explicitly */}
        <Icon as={icon} boxSize="18px" mr="3" flexShrink={0} />

        <Text fontWeight="medium" fontSize="sm">{label}</Text>

        {badge ? (
          <Badge ml="auto" rounded={"4xl"} color={"white"} bg="red" borderRadius="full" px="2" fontSize="xs">
            {badge}
          </Badge>
        ) : (
          <Box ml="auto" />
        )}
      </Button>

    </ChakraLink>
  );
}


export default function Sidebar({ activePath = "/", onLogout }) {
  const {logout, user} = useAuth(); 
  return (
    <Box
      as="nav"
      bg="white"
      borderRight="1px solid"
      borderRightColor="gray.200"
      w={SIDEBAR_W}
      minW={SIDEBAR_W}
      h="100vh"
      position="sticky"
      top="0"
      pl={CONTENT_GUTTER}   // ⬅️ align inner content with the 24px gutter
      pr="12px"
      py="16px"
    >

      <Flex
        align="center"
        h="60px"        
        >
        <Text
            fontFamily="'Urbanist', sans-serif"  
            fontWeight={900}                      
            fontSize="32px"                       
            lineHeight="160%"                     
            letterSpacing="0"                     
            color="#161819"
            noOfLines={1}
        >
            LOGO
        </Text>
    </Flex>

      <VStack align="stretch" spacing="1" paddingTop={50}>
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            badge={item.badge}
          />
        ))}
      </VStack>

      {/* Logout pinned to bottom, still honoring sidebar padding */}
      <Flex position="absolute" bottom="12" left={CONTENT_GUTTER} right="12px">
        <Button
          w="full"
          variant="ghost"
          justifyContent="flex-start"
          height="44px"
          borderRadius="lg"
          color="#161819"
          onClick={logout}
          bg={"transparent"}
          _hover={{color:"#6F6CF3", bg:"gray.100", borderColor:"gray.100"}}
        >
          <Icon hover={{color:"#6F6CF3"}}>
            <RiLogoutBoxFill />
          </Icon>
          <Text fontWeight="medium" fontSize="sm" onClick={logout}>Log out</Text>
        </Button>
      </Flex>
    </Box>
  );
}
