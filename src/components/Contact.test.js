import renderer from "react-test-renderer";
import Contact from "./Contact";

it("create component snapshot", () => {
  const component = renderer.create(
    <Contact
      contactData={{
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 25,
        photo: "https://randomuser.me/api/portraits",
      }}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
