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

interface ActionButtonProps {
  buttonText: string;
  icon: string;
  action: () => void;
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

const HC3 = () => {
  const [showActionBar, setShowActionBar] = useState(false);

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
      <HC3Card {...longPressEvent}>
        <img className="logo" src={HC3Logo} alt="HC3 Logo" />
        <div className="heading-box">
          <h1 className="heading">Big display card with action</h1>
        </div>
        <div className="subtitle-box">
          <p className="subtitle">
            This is a sample text for the subtitle that you can add to
            contextual cards
          </p>
        </div>
        <div className="button-box">
          <button className="action-btn">Action</button>
        </div>
      </HC3Card>
    </HC3CardContainer>
  );
};

export default HC3;
