import { useState } from "react";
import { useAuth } from "../context/authcontext";
import { Button, Card, Field, Input, Stack } from "@chakra-ui/react"
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { PasswordInput } from "../components/ui/password-input"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // if already logged in, send them back to where they came from (or dashboard fallback)
  if (user) {
    const from = location.state?.from?.pathname || "/dashboard";
    return <Navigate to={from} replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);

    // after login, go back to where they wanted to go
    const from = location.state?.from?.pathname || "/dashboard";
    navigate(from, { replace: true });
  };

  document.title = "React App"

  return (
    
    <Flex align="center" justify="center" minH="100dvh" w="100vw" bg="gray.50">
      <Card.Root as="Form" onSubmit={handleSubmit} rounded={"xl"} >
      <Card.Header>
        <Card.Title textAlign={"center"} fontSize={"23px"}>Log In</Card.Title>
      </Card.Header>
      <Card.Body>
        <Stack gap="4" w="full">
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input value={email} onChange={(e) => {setEmail(e.currentTarget.value)}}/>
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <PasswordInput value={password} onChange={(e) => {setPassword(e.currentTarget.value)}} />
          </Field.Root>
        </Stack>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline" onClick={()=>{setEmail("")
          setPassword("")}}>Cancel</Button>
        <Button type="submit" variant="solid" bg={"#6F6CF3"} _hover={{bg:"transparent", borderColor:"#6F6CF3", color:"#6F6CF3", borderWidth:2}}>Sign in</Button>
      </Card.Footer>
   </Card.Root>
    </Flex>
    
    
  );
}


