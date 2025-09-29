import { Avatar, Button, HStack, Stack, Text, Menu, Portal} from "@chakra-ui/react"
import { useAuth } from "../../context/authcontext";

export default function Persona() {
  const {logout, user} = useAuth();
  return (
      <Menu.Root positioning={{ placement: "bottom" }}>
        <Menu.Trigger rounded="full" focusRing="outside">
          <Stack gap="8" w={"auto"} >
            {users.map((user) => (
              <HStack key={user.id} gap="4">
                <Avatar.Root>
                  <Avatar.Fallback name={user.name} />
                  <Avatar.Image src={user.avatar} />
                </Avatar.Root>
                <Stack gap="0" align={"flex-start"}>
                  <Text fontWeight="500" fontSize={"18px"} color={"#161819"}>{user.name}</Text>
                  <Text color="fg.muted" textStyle="xs" fontWeight={"400"} font={"inter"} fontSize={"14px"}>
                    {user.email}
                  </Text>
                </Stack>
              </HStack>
            ))}
          </Stack>  
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="account">Account</Menu.Item>
              <Menu.Item value="settings">Settings</Menu.Item>
              <Menu.Item value="logout" onClick={logout}>Logout</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    
  )
}

const users = [
  {
    id: "1",
    name: "John Smith",
    email: "Admin",
    avatar: "images/john-smith.jpg",
  }
]