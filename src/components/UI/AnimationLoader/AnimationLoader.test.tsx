import React from "react";
import renderer from "react-test-renderer";
import AnimationLoader from "./AnimationLoader";

describe("AnimationLoader", () => {

  it("always renders a div tag", () => {
    const AnimationLoaderComponent = renderer.create(<AnimationLoader/>).toJSON();
    expect(AnimationLoaderComponent).toMatchSnapshot();
  });

});