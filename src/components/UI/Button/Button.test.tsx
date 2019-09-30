import React from "react";
import {mount, shallow} from "enzyme";
import renderer from "react-test-renderer";
import Button from "./Button";

describe("Button", () => {

  const setup = propOverrides => {
    return Object.assign({
      name: undefined,
      type: undefined,
      disabled: undefined,
      typeStyle: undefined,
      notFullWidth: undefined,
      loader: undefined
    }, propOverrides);
  };

  it("always renders a button tag", () => {
    const ButtonComponent = renderer.create(<Button {...setup({})}/>).toJSON();
    expect(ButtonComponent).toMatchSnapshot();
  });

  it("should be disabled when prop 'disabled' is true", () => {
    const props = setup({ disabled: true });
    const ButtonComponent = shallow(<Button {...props}/>);
    expect(ButtonComponent.find("button").prop("disabled")).toEqual(true);
  });

  test.each`
    typeStyle | className
    ${"primary"} | ${"ButtonPrimary"}
    ${"secondary"} | ${"ButtonSecondary"}
    ${"outline"} | ${"ButtonOutline"}
    ${"ghost"} | ${"ButtonGhost"}
  `("should have class $className when prop 'typeStyle' is $typeStyle", ({typeStyle, className}) => {
    const props = setup({ typeStyle: typeStyle });
    const ButtonComponent = shallow(<Button {...props}/>);
    expect(ButtonComponent.find("button").hasClass(className)).toEqual(true);
  });

  test.each`
    width | className
    ${true} | ${"ButtonNotFullWidth"}
    ${false} | ${"ButtonFullWidth"}
  `("should have class $className when prop 'notFullWidth' is $width", ({width, className}) => {
    const props = setup({ notFullWidth: width });
    const ButtonComponent = shallow(<Button {...props}/>);
    expect(ButtonComponent.find("button").hasClass(className)).toEqual(true);
  });

  it("should render $AnimationLoader when prop 'loader' is true", () => {
    const props = setup({ loader: true });
    const ButtonComponent = mount(<Button {...props}/>);
    expect(ButtonComponent.find("button").children()).toHaveLength(1);
  });

  it("should render a text content when there's any text inside de tag", () => {
    const ButtonComponent = mount(<Button {...setup({})}>Test</Button>);
    expect(ButtonComponent.find("button").text()).toBe("Test");
  });

  it("should execute a function when onClick", () => {
    const mockCallBack = jest.fn();
    const ButtonComponent = shallow((<Button {...setup({})} onClick={mockCallBack}/>));
    ButtonComponent.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

});
