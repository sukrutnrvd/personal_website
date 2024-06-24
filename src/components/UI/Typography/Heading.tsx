import styled from "styled-components";

interface HeadingProps {
  size?: "l" | "m" | "s";
}

const Heading = styled.h1<HeadingProps>`
  font-size: ${({ size }) =>
    size === "l" ? "3.2rem" : size === "m" ? "2.4rem" : "1.6rem"};
  font-weight: bold;
  line-height: 150%;
`;

Heading.defaultProps = {
  size: "l",
};

export default Heading;
