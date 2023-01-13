import {
  TextWrapper,
  Text,
  ReadMore
} from "./TextContent.styles";
import { useProducts } from "context/ProductContext";

function TextContent() {
  const { currentProduct } = useProducts();

  return (
      <TextWrapper>
        <Text>
          {currentProduct?.notion?.content
            .replace(/\n/g, "")
            .replace(/\[--spoiler--\](.*?)\[--spoiler--\]/gm, "")}
          <ReadMore
            href="https://www.vodvilapp.com/@nurullah"
            target="_blank"
            rel="noreferrer"
          >
            Siteye git
          </ReadMore>
        </Text>
      </TextWrapper>
  );
}

export default TextContent;
