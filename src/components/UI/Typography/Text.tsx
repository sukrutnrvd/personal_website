import styled from "styled-components";
import { motion } from "framer-motion";

interface TextProps {
  size?: "m" | "s";
}

const Text = styled(motion.p)<TextProps>`
  font-size: ${({ size }) => (size === "m" ? "2rem" : "1.2rem")};
  font-weight: normal;
  line-height: 150%;
`;

Text.defaultProps = {
  size: "m",
};

export default Text;
