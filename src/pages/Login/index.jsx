import Logo from '../../assets/fastburguer_logo.png';
import {
  Button,
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo_fastburguer" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Seja bem-vindo ao <span> Fast Burguer!</span>
          <br /> Entre com sua conta para
          <span> começar a pedir.</span>
        </Title>
        <Form>
          <InputContainer>
            <label htmlFor="">E-mail</label>
            <input type="text" />
            <label htmlFor="">Senha</label>
            <input type="password" name="" id="" />
          </InputContainer>
          <Button>Entrar</Button>
        </Form>
        <p>
          Não possui conta? <a href="">Clique aqui.</a>
        </p>
      </RightContainer>
    </Container>
  );
}
