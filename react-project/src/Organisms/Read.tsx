import React from "react";
import styled from "styled-components";
import { Blog, BlogPageType } from "../Pages/App";
// import Comment from "./Comment";

const Wrap = styled.div`
  margin: 1rem 20rem;
  padding: 0 1rem;
  height: 100%;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const Div = styled.div`
  padding: 1rem;
  height: 70%;
  background-color: #ffffff;
`;

const H1 = styled.h1`
  margin: 0 0 2.5rem;
  min-height: 5.25rem;
  font-size: 4rem;
  word-break: break-all;
`;

const Span = styled.span`
  font-size: 1.25rem;
  word-break: break-all;
  white-space: break-spaces;
`;

interface Props {
  data: Blog;
  setPageStatus: React.Dispatch<React.SetStateAction<BlogPageType>>;
  deleteBlog: (data: Blog) => void;
}

const Read: React.FC<Props> = (props) => {
  const { data, setPageStatus, deleteBlog } = props;

  return (
    <Wrap>
      <button onClick={() => setPageStatus("main")}>Back</button>

      <Div>
        <div>
          <button
            onClick={() => {
              setPageStatus("modify");
            }}
          >
            Modify
          </button>

          <button
            onClick={() => {
              deleteBlog(data);
            }}
          >
            Delete
          </button>
        </div>

        <H1>{data.title}</H1>
        <Span>{data.contents}</Span>
      </Div>

      {/* <Comment /> */}
    </Wrap>
  );
};

export default Read;
