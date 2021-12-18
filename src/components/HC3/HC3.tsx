import React, { useCallback, useState } from "react";

import useLongPress from "../../hooks/useLongPress";
import {
  ActionBar,
  ActionButtonContainer,
  HC3Card,
  HC3CardContainer,
} from "./HC3.styles";
import HC3Logo from "../../assets/images/HC3_Placeholder.svg";
import remindLogo from "../../assets/images/remind_logo.png";
import cancelLogo from "../../assets/images/cancel_logo.png";
import { CardData } from "../../types/types";
import useStyleGenerator from "../../hooks/useStyleGenerator";

interface ActionButtonProps {
  buttonText: string;
  icon: string;
  action: () => void;
}

interface HC3CardProps {
  cardData: CardData;
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
    <ActionButtonContainer onClick={action}>
      <img src={icon} alt="icon" />
      <p className="button-text">{buttonText}</p>
    </ActionButtonContainer>
  );
};

const HC3: React.FC<HC3CardProps> = ({ cardData }) => {
  const [showActionBar, setShowActionBar] = useState(false);
  const [generateStyles, createMarkup] = useStyleGenerator();

  const onLongPress = useCallback(() => {
    setShowActionBar(true);
  }, []);

  const onClick = useCallback(() => null, []);

  const onRemindLater = useCallback(() => {
    console.log("Remind");
    setShowActionBar(false);
  }, []);

  const onDismiss = useCallback(() => {
    console.log("Dismiss");
    setShowActionBar(false);
  }, []);

  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  return (
    <HC3CardContainer>
      <ActionBar visibility={showActionBar}>
        <ActionButton
          buttonText="remind later"
          icon={remindLogo}
          action={onRemindLater}
        />
        <ActionButton
          buttonText="dismiss now"
          icon={cancelLogo}
          action={onDismiss}
        />
      </ActionBar>
      <HC3Card
        {...longPressEvent}
        backgroundImage={cardData.bg_image}
        backgroundColor={cardData.bg_color}
      >
        {/* <img className="logo" src={HC3Logo} alt="HC3 Logo" /> */}
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
          <button
            className="action-btn"
            onClick={(e) => {
              e.stopPropagation();
              window.open(cardData.url);
            }}
          >
            {cardData.name}
          </button>
        </div>
      </HC3Card>
    </HC3CardContainer>
  );
};

export default HC3;
