import React from "react";
import styles from "./AnimationLoader.module.scss";

class AnimationLoader extends React.Component {
  render() {
    return (
      <div className={styles.Lds}>
        <div className={styles.LdsSpinner}>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
        </div>
      </div>
    )
  }
}

export default AnimationLoader;
