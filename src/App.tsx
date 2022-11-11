import Column from "./components/colum/colum";
import { AppConteiner } from "./styled-component/style";
import { AddnewItem } from "./components/AddNewItem/index";
import { useAppState } from "../src/state/AppStateContent";

export const App = () => {
  const { state } = useAppState();

  return (
    <AppConteiner>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}
      <AddnewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppConteiner>
  );
};
