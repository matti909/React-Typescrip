import { ColumConteiner, ColumTitle } from "../../styled-component/style";
import { Card } from "../card/Card";
import { AddnewItem } from "../AddNewItem/";
import { useAppState } from "../../state/AppStateContent";

type columProps = {
  text: string;
  index: number;
  id: string;
};

const Column = ({ text, index, id }: columProps) => {
  const { state, dispatch } = useAppState();

  return (
    <ColumConteiner>
      <ColumTitle>{text}</ColumTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} index={i} />
      ))}
      <AddnewItem
        toggleButtonText="+ Add another card"
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, taskId: id } })
        }
        dark
      />
    </ColumConteiner>
  );
};
export default Column;
