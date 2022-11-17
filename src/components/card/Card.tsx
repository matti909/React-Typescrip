import { CardContainer } from "../../styled-component/style";

type CardProps = {
  text: string;
  index: number;
};

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
