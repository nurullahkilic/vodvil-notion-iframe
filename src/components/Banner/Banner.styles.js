import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 175px;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #181818;

  &::before {
    content: "";
    margin: 0;
    position: absolute;
    bottom: 0;
    width: 88%;
    border-bottom: 0.8px solid #404040;
  }
`;

export const BackdropImage = styled.div`
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 7%;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 130px;
  background: black;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  background: linear-gradient(
      360deg,
      #000000 25.27%,
      rgba(18, 18, 18, 0.76297) 53.69%,
      rgba(0, 0, 0, 0) 145.16%
    ),
    url(${({ source }) => source?.uri}) no-repeat center center / cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
`;

export const PosterImage = styled.img`
  cursor: pointer;
  margin-bottom: -30px;
  margin-right: 4%;
  width: 79.2px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  transition: 300ms all;

  &:hover {
    transform: translateY(2px);
  }
`;

export const VodvilLogo = styled.img`
  z-index: 9999;
  height: 27px;
  width: 27px;
  object-fit: cover;
  opacity: 0.6;
  position: absolute;
  right: 12px;
  top: 12px;
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: 9px;
`;

export const DirectorInfo = styled.div`
  font-family: "IBM Plex Sans";
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #868686;

  & > span {
  color: #e2e2e2;
}
`;

export const Title = styled.div`
  font-family: "IBM Plex Serif";
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
`;
