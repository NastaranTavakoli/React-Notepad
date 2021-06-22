import React from "react";
import { Row } from "../components";

export function List({ items, onDeleteClick }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Row
            id={items.indexOf(item) + 1}
            text={item.title}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}
