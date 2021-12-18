import React from "react";
import { HighlightEntity } from "../types/types";

const useStyleGenerator = () => {
  const generateStyles = (entity: HighlightEntity) => {
    let textArray: string[] = entity.text.split(" ");

    let bracketIndex: number = 0;
    entity.entities.forEach((entityItem, i) => {
      let style: string = "";

      Object.keys(entityItem).forEach((attribute: string) => {
        if (attribute !== "text") {
          // @ts-ignore
          style += `${attribute}: ${entityItem[attribute]};`;
        }
      });

      textArray.forEach((textItem, currentIndex) => {
        if (textItem.includes("{}") && i === bracketIndex) {
          const finalHTML = textItem.replace(
            "{}",
            `<span style="${style}">${entityItem["text"]}</span>`
          );
          textArray[currentIndex] = finalHTML;
          bracketIndex += 1;
        }
      });
    });

    return textArray.join(" ");
  };

  const createMarkUp = (text: string) => {
    return { __html: text };
  };

  return [generateStyles, createMarkUp] as [
    (entity: HighlightEntity) => string,
    (text: string) => any
  ];
};

export default useStyleGenerator;
