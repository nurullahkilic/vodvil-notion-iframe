import React from "react";
import { shallow } from "zustand/shallow";
import {
  FooterContent,
  RightSide,
  LeftSide,
  ProfilePhoto,
  UserInfo,
  Button
} from "./Footer.styles";

import ArrowIcon from "assets/icons/ArrowIcon";

import { useProducts } from "context/ProductContext";

function Footer() {
  const { products, currentProduct, setCurrentProduct } = useProducts(
    (state) => ({
      products: state.products,
      currentProduct: state.currentProduct,
      setCurrentProduct: state.setCurrentProduct,
    }),
    shallow
  );

  const prevProduct = () => {
    let index = products.findIndex((product) => {
      return product.notion.id === currentProduct.notion.id;
    });
    if (index === 0) index = products.length;
    setCurrentProduct(products[index - 1]);
  };

  const nextProduct = () => {
    let index = products.findIndex((product) => {
      return product.notion.id === currentProduct.notion.id;
    });
    if (products.length <= index + 1) index = -1;
    setCurrentProduct(products[index + 1]);
  };

  return (
    <FooterContent>
      <RightSide
        onClick={() =>
          window.open(
            `https://www.vodvilapp.com/@${currentProduct?.user?.username}`,
            "_blank"
          )
        }
      >
        <ProfilePhoto
          src={currentProduct?.user?.image}
          alt={currentProduct?.user?.username}
        />
        <UserInfo>
          {currentProduct?.user?.fullname}
          <span> · {currentProduct?.notion?.time_ago}</span>
        </UserInfo>
      </RightSide>
      <LeftSide>
        <Button onClick={prevProduct}>
          <ArrowIcon rotateDeg={90} size={14} />
        </Button>
        <Button onClick={nextProduct}>
          <ArrowIcon rotateDeg={-90} size={14} />
        </Button>
      </LeftSide>
    </FooterContent>
  );
}

export default React.memo(Footer);
