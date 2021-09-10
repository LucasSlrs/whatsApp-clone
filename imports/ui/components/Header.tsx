import React from "react";
import FontAwesome from "react-fontawesome";

import StyledHeader from "../elements/StyledHeader";

const Header = (props): JSX.Element => {
  const { icons, iconClass } = props;
  const renderIcons = (): JSX.Element[] => {
    return icons.map((icon: string, i: number) => {
      <FontAwesome key={i} className={iconClass} name={icon} />;
    });
  };
  return (
    <StyledHeader>
      <div
        className={props.iconWidthSmall ? "icons--left small" : "icons--left"}
      >
        {renderIcons()}
      </div>
    </StyledHeader>
  );
};
export default Header;
