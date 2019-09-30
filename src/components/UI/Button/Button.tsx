import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import AnimationLoader from "../AnimationLoader/AnimationLoader";

export type ButtonProps = {
  id?: string;
  cssClassName?: string;
  disabled?: boolean;
  loader?: boolean;
  type: string;
  name: string;
  onClick?: React.MouseEventHandler<any>;
  typeStyle?: "primary" | "secondary" | "outline" | "ghost";
  notFullWidth?: boolean;
};

class Button extends React.Component<ButtonProps> {

  render() {

    let width;
    if (this.props.notFullWidth === true) {
      width = "ButtonNotFullWidth";
    } else {
      width = "ButtonFullWidth";
    }

    let buttonTypeStyle = "ButtonPrimary";
    if (this.props.typeStyle === "secondary") {
      buttonTypeStyle = "ButtonSecondary";
    } else if (this.props.typeStyle === "outline") {
      buttonTypeStyle = "ButtonOutline";
    } else if (this.props.typeStyle === "ghost") {
      buttonTypeStyle = "ButtonGhost";
    }

    let button;

    if (!this.props.loader) {
      button = (
        <button
          id={this.props.id}
          name={this.props.name}
          type={this.props.type}
          className={classNames(styles.Button, this.props.cssClassName, styles[buttonTypeStyle], styles[width])}
          disabled={this.props.disabled}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </button>
      );
    } else {
      button = (
        <button
          id={this.props.id}
          name={this.props.name}
          type={this.props.type}
          className={classNames(styles.Button, styles.ButtonPrimaryLoader, styles[buttonTypeStyle], styles[width])}
          disabled={this.props.disabled}
          onClick={this.props.onClick}
        >
          <AnimationLoader/>
        </button>
      );
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

export default Button;
