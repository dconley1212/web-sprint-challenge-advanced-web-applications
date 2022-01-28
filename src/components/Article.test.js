import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MutationObserver from "mutationobserver-shim";

import Article from "./Article";

const article = {
  id: "kfdlasf",
  headline: "headline",
  createdOn: "2021-08-09T18:02:38-04:00",
  summary: "summary",
  body: "klsjdfls",
};

test("renders component without errors", () => {
  render(<Article article={article} />);
});

test("renders headline, author from the article when passed in through props", () => {});

test('renders "Associated Press" when no author is given', () => {});

test("executes handleDelete when the delete button is pressed", () => {});

//Task List:
//1. Complete all above tests. Create test article data when needed.
