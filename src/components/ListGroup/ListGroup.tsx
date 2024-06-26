import { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
  readonly onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedItem, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No item found </p>}
      <ul className={styles["list-group"]}>
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
        ;
      </ul>
    </>
  );
}

export default ListGroup;
