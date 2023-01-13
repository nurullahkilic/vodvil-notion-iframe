import React from "react";
import styled from "@emotion/styled";
import {
  Header,
  BackdropImage,
  PosterImage,
  VodvilLogo,
  ProductInfos,
  DirectorInfo,
  Title,
} from "./Banner.styles";
import logo from "assets/icons/vodvil-white-logo.svg";
import Rate from "components/Rate";

import { useProducts } from "context/ProductContext";

const Star = styled(Rate)`
  bottom: -33px;
  position: absolute;
`;

function Banner() {
  const currentProduct = useProducts((state) => state.currentProduct);

  return (
    <Header>
      <BackdropImage
        source={{
          uri: `https://www.themoviedb.org/t/p/w1280${currentProduct?.product?.backdrop_path}`,
        }}
      >
        <PosterImage
          src={`https://www.themoviedb.org/t/p/w780${currentProduct?.product?.poster_path}`}
          alt={currentProduct?.product?.title}
          onClick={() =>
            window.open(
              `https://www.vodvilapp.com/${currentProduct?.product?.type}/${currentProduct?.product?.id}`,
              "_blank"
            )
          }
          title={`${currentProduct?.product?.title} · Vodvil'de gör.`}
        />
        <ProductInfos>
          <DirectorInfo>
            <span>{currentProduct?.product?.director}</span>{" "}
            {currentProduct?.product?.release_date}
          </DirectorInfo>
          <Title>
            {currentProduct?.product?.title.length > 35
              ? currentProduct?.product?.title.slice(0, 35) + "..."
              : currentProduct?.product?.title}
          </Title>
          <Star initialRating={parseInt(currentProduct?.product?.rate) / 2} />
        </ProductInfos>
        <a
          href="https://www.vodvilapp.com"
          target="_blank"
          rel="noreferrer"
          title="Vodvil'e git."
        >
          <VodvilLogo src={logo} alt="Logo" />
        </a>
      </BackdropImage>
    </Header>
  );
}

export default React.memo(Banner);
