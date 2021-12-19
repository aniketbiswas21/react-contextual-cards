/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";

import useLongPress from "../../hooks/useLongPress";
import {
  ActionBar,
  ActionButtonContainer,
  HC3Card,
  HC3CardContainer,
} from "./HC3.styles";
import remindLogo from "../../assets/images/remind_logo.png";
import cancelLogo from "../../assets/images/cancel_logo.png";
import { CardData } from "../../types/types";
import useStyleGenerator from "../../hooks/useStyleGenerator";

interface ActionButtonProps {
  buttonText: string;
  icon: string;
  action: (
    index: number,
    setShowActionBar: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

interface HC3CardProps {
  cardData: CardData;
  onRemind: (
    name: string,
    setShowActionBar: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  onDismiss: (
    name: string,
    setShowActionBar: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

const defaultOptions = {
  shouldPreventDefault: true,
  delay: 300,
};

const ActionButton: React.FC<ActionButtonProps> = ({
  buttonText,
  icon,
  action,
}) => {
  return (
    <ActionButtonContainer onClick={action as any}>
      <img src={icon} alt="icon" />
      <p className="button-text">{buttonText}</p>
    </ActionButtonContainer>
  );
};

const HC3: React.FC<HC3CardProps> = ({ cardData, onRemind, onDismiss }) => {
  const [showActionBar, setShowActionBar] = useState(false);
  const [generateStyles, createMarkup] = useStyleGenerator();

  const onLongPress = useCallback(() => {
    setShowActionBar(true);
  }, []);

  const onClick = useCallback((e) => {
    e.stopPropagation();

    if (e.target.className === "action-btn") {
      window.open(
        cardData.cta && cardData.cta.length > 0
          ? cardData.cta[0].url
          : cardData.url
      );
    }
  }, []);

  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  return (
    <HC3CardContainer>
      <ActionBar visibility={showActionBar}>
        <ActionButton
          buttonText="remind later"
          icon={remindLogo}
          action={() => {
            onRemind(cardData.name, setShowActionBar);
          }}
        />
        <ActionButton
          buttonText="dismiss now"
          icon={cancelLogo}
          action={() => {
            onDismiss(cardData.name, setShowActionBar);
          }}
        />
      </ActionBar>
      <HC3Card
        {...longPressEvent}
        backgroundImage={cardData.bg_image}
        backgroundColor={cardData.bg_color}
        backgroundGradient={cardData.bg_gradient}
        cta={cardData.cta}
      >
        <div className="heading-box">
          <h1
            className="heading"
            dangerouslySetInnerHTML={createMarkup(
              cardData.formatted_title
                ? generateStyles(cardData.formatted_title)
                : cardData.title
            )}
          />
        </div>
        <div className="subtitle-box">
          <p
            className="subtitle"
            dangerouslySetInnerHTML={createMarkup(
              cardData.formatted_description
                ? generateStyles(cardData.formatted_description)
                : cardData.description
            )}
          />
        </div>
        <div className="button-box">
          <button className="action-btn">
            {cardData.cta && cardData.cta.length > 0
              ? cardData.cta[0].text
              : cardData.name}
          </button>
        </div>
      </HC3Card>
    </HC3CardContainer>
  );
};

export default HC3;
