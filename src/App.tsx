import Column from "./components/colum/colum";
import { AppConteiner } from "./styled-component/style";
import { AddnewItem } from "./components/AddNewItem/index";
import { useAppState } from "../src/state/AppStateContent";
interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

export const App = () => {
  const { state, dispatch } = useAppState();

  return (
    <AppConteiner>
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddnewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppConteiner>
  );
};
