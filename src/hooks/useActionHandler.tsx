/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from "react";

const useActionHandler = (
  cardsData: any[],
  setCardsData: React.Dispatch<React.SetStateAction<any[]>>
) => {
  let dismissedCards: string | null | string[] =
    localStorage.getItem("dismissed_cards");
  if (dismissedCards) {
    dismissedCards = JSON.parse(dismissedCards);
  } else {
    dismissedCards = [];
  }

  useEffect(() => {
    if (dismissedCards && dismissedCards.length > 0) {
      setCardsData(
        cardsData.filter((card) => !dismissedCards!.includes(card.name))
      );
    }
  }, []);

  const onRemindLater = useCallback(
    (
      name: string,
      setShowActionBar: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      const newCardsData = cardsData.filter((card) => card.name !== name);
      setCardsData(newCardsData);
      setShowActionBar(false);
    },
    [cardsData]
  );

  const onDismiss = useCallback(
    (
      name: string,
      setShowActionBar: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      (dismissedCards as string[])!.push(name);
      localStorage.setItem("dismissed_cards", JSON.stringify(dismissedCards));
      const newCardsData = cardsData.filter((card) => card.name !== name);
      setCardsData(newCardsData);
      setShowActionBar(false);
    },
    [cardsData]
  );

  return [onRemindLater, onDismiss] as [
    (
      name: string,
      setShowActionBar: React.Dispatch<React.SetStateAction<boolean>>
    ) => void,
    (
      name: string,
      setShowActionBar: React.Dispatch<React.SetStateAction<boolean>>
    ) => void
  ];
};

export default useActionHandler;
