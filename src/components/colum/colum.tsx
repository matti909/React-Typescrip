import { ColumConteiner, ColumTitle } from "../../styled-component/style";
import { Card } from "../card/Card";
import { AddnewItem } from "../AddNewItem/";

type columProps = {
  text: string;
  index: number;
};

export default function Column({ text }: columProps): JSX.Element {
  return (
    <ColumConteiner>
      <ColumTitle>Todo:</ColumTitle>
      <Card text="Generate app sacafold" />
      <Card text="Learn Typescript" />
      <Card text="begin to uses static typing" />
      <AddnewItem
        toggleButtonText="+ Add another card"
        onAdd={console.log}
        dark
      />
    </ColumConteiner>
  );
}
