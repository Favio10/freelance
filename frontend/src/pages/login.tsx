import { NextPage } from "next";
import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Card,
  ButtonGroup,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Login: NextPage = () => {
  const { register, getValues } = useForm();

  return (
    <Container marginTop={10}>
      <Heading textAlign="center">Iniciar Sesion</Heading>
      <Card padding={3}>
        <form>
          <FormControl marginBottom={5}>
            <FormLabel>Email addresss</FormLabel>
            <Input
              type="text"
              placeholder="Ingresa tu email"
              {...register("email")}
            />
          </FormControl>
        </form>
        <form>
          <FormControl>
            <FormLabel>codigo</FormLabel>
            <Input
              type="text"
              placeholder="Ingresa tu codigo"
              {...register("code")}
            />
          </FormControl>
          <ButtonGroup marginTop={8}>
            <Button onClick={() => console.log({ Values: getValues() })}>
              Iniciar sesion
            </Button>
            <Button>Quiero un codigo</Button>
          </ButtonGroup>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
