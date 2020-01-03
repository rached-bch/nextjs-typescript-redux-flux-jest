import "jsdom-global/register";

import * as React from "react";
import { mount } from "enzyme";
import Index from "../pages/index";

import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("Pages", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      announcementMessage: "sample text"
    });
    component = renderer.create(
      <Provider store={store}>
        <Index />
      </Provider>
    );
  });

  describe("Index", () => {
    it("should render without throwing an error", function() {
      //const wrap = mount(<Index />);
      // expect(wrap.find("h1").text()).toBe("Hello World");

      //console.log("dddd", component.root.findByType("h1").props.children);

      expect(component.root.findByType("h1").props.children).toBe(
        "Hello World"
      );
    });
  });
});
