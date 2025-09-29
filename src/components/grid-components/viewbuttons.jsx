import { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ViewButtons() {
  const [active, setActive] = useState("Grid View");
  const navigate = useNavigate();
  const location = useLocation();

  const views = [
    { label: "Grid View", path: "/reviews/grid" },
    { label: "List View", path: "/reviews/list" },
  ];

  return (
    <HStack w="full" spacing={0}>
      {views.map((view) => (
        <Button
          key={view.label}
          onClick={() => {
            setActive(view.label);
            navigate(view.path); // ⬅️ navigate correctly
          }}
          flex="1"
          bg={location.pathname === view.path ? "#161819" : "white"}
          color={location.pathname === view.path ? "white" : "#161819"}
          borderColor={location.pathname === view.path ? "#161819" : "white"}
          _hover={{
            bg: location.pathname === view.path ? "#6F6CF3" : "gray.50",
          }}
          fontSize="14px"
          fontWeight="500"
          fontFamily="Inter"
        >
          {view.label}
        </Button>
      ))}
    </HStack>
  );
}
