import styled from "@emotion/styled";

export const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &::before {
    content: "";
    min-height: 185px;
    width: 100%;
  }
`;

export const Text = styled.p`
  font-family: "IBM Plex Sans";
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  width: 88%;
  padding-right: 15px;
  max-height: calc(100vh - 215px);
  color: #ffffff;
  overflow-x: scroll;
  padding-bottom: 20px;
`;

export const ReadMore = styled.a`
  margin-left: 4px;
  padding: 4px 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(129, 193, 75, 0.2);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.11);
  border-radius: 3px;
  font-family: "IBM Plex Sans";
  font-weight: 600;
  font-size: 14px;
  line-height: 92.19%;
  color: #81c14b;
`;
