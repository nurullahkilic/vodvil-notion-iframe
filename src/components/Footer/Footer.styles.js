import styled from "@emotion/styled";

export const FooterContent = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  min-height: 50px;
  width: 100%;
  border-top: 0.8px solid #404040;
  background-color: #181818;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProfilePhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 11px;
`;

export const UserInfo = styled.h5`
  font-family: "IBM Plex Sans";
  font-weight: bold;
  font-size: 13px;
  color: #ffffff;
  
  & > span {
    font-weight: normal;
    color: #aaaaaa;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 0 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);
  transition: 300ms all;

  
  &:hover {
    background: rgba(73, 73, 73, 0.3);
    transform: scale(1.05);
  }

`;
