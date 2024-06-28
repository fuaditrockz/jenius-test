import { render, screen } from "@testing-library/react";
import App from "./App";
import { StoreProvider } from "./store/StoreProvider";

test("renders retrieve Contacts by Jenius Test", () => {
  render(
    <StoreProvider>
      <App />
    </StoreProvider>
  );
  const linkElement = screen.getByText(/Retrieve Contacts by Jenius Test/i);
  expect(linkElement).toBeInTheDocument();
});
