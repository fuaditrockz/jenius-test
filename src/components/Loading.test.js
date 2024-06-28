import renderer from "react-test-renderer";
import Loading from "./Loading";

it("create component snapshot", () => {
  const component = renderer.create(<Loading />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
