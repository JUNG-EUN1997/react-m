import styled, {keyframes} from "styled-components";

const Father = styled.div`
  display: flex;
  background-color: ${props => props.theme.backgroundColor};
`;

const rotationAnimation = keyframes`
  0% {
  /* from{ */
    transform: rotate(0deg);
    border-radius:0px;
  }
  /* to{ */
  50% {
    border-radius:100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius:0;
  }
`;

const Emoji = styled.span`
  font-size: 24px;
`;


const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
  animation: ${rotationAnimation} 5s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.theme.textColor};
  ${Emoji}{
    &:hover{
      font-size: 90px;
    }
  }
`;


const Text = styled.span`
  color: ${props => props.theme.textColor};
`;

const Circle = styled(Box)` // Box + Circle 내용으로 확장
  border-radius: 40%;
`;

const Btn = styled.button`
  background-color: tomato;
  color: white;
  border:0;
  border-radius: 15px;
`;

const Link = styled(Btn).attrs({href:'https://naver.com'})`
  background-color: skyblue;
  
`;

const Input = styled.input.attrs({required:true})`
  background-color: antiquewhite;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal">
        <Emoji as="p">🤩</Emoji>
        {/* <Text>Hello</Text>
        <Input></Input>
        <Btn>Login</Btn>
        <Link as="a">Login</Link>  */}
        {/* html tag를 설정한 것과 다르게 주고 싶다면 as 사용 */}
      </Box>
      <Circle bgColor="tomato">Hello</Circle>
    </Father>
  );
}

export default App;
