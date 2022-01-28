import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MutationObserver from "mutationobserver-shim";

import Article from "./Article";

const article = {
  author: "joe",
  body: "body",
  createdOn: "2021-08-09T18:02:38-04:00",
  headline: "headline",
  id: "kfdlasf",
  summary: "summary",
};

const articleTwo = {
  author: "",
  body: "body",
  createdOn: "2021-08-09T18:02:38-04:00",
  headline: "headlines",
  id: "kfdhyjyjy",
  summary: "summary",
};

test("renders component without errors", () => {
  render(<Article article={article} />);
});

test("renders headline, author from the article when passed in through props", () => {
  render(<Article article={article} />);
  const headline = screen.queryByTestId("headline");
  const author = screen.queryByTestId("author");
  const summary = screen.queryByTestId("summary");
  const body = screen.queryByTestId("body");
  expect(headline).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(summary).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', () => {
  render(<Article article={articleTwo} />);
  const author = screen.getByText(/by Associated Press/i);
  expect(author).toBeInTheDocument();
});

test("executes handleDelete when the delete button is pressed", () => {
  const mockHandleDelete = jest.fn();
  render(<Article article={article} handleDelete={mockHandleDelete} />);
  const deleteButton = screen.getByTestId("deleteButton");
  userEvent.click(deleteButton);
  expect(mockHandleDelete).toHaveBeenCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.
