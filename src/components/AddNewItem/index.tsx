import React from "react";
import { AddItemButton } from "../../styled-component/style";   
import { NewItemForm } from "../NewItemForm/NewItemForm";

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

export const AddnewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = React.useState<boolean>(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    //items
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
