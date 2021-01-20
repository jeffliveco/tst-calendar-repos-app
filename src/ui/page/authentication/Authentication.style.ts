import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BannerWrapper = styled.div`
  width: 60vw;
  height: 100vh;
  background: ${(props => props.theme.color.black)};
`;

const FormWrapper = styled.div`
  width: 40vw;
`;

const ContainerWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  background: ${(props => props.theme.color.lightGray)};
  border-radius: 10px;
`;

export {
  PageWrapper,
  BannerWrapper,
  FormWrapper,
  ContainerWrapper
}
