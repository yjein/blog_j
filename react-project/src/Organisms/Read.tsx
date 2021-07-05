import React from "react";
import styled from "styled-components";
import { Blog, BlogPageType } from "../Pages/App";

const Wrap = styled.div`
  margin: 1rem 3rem;
  padding: 1rem;
  height: 70vh;
`;

const H1 = styled.h1`
  margin: 0 0 2.5rem;
  font-size: 4rem;
`;

const Div = styled.div`
  margin: 0.5rem;
  list-style: none;
  font-size: 1.25rem;
`;

interface Props {
  data: Blog;
  setPageStatus: React.Dispatch<React.SetStateAction<BlogPageType>>;
}

const Read: React.FC<Props> = (props) => {
  const { data, setPageStatus } = props;

  return (
    <>
      <button onClick={() => setPageStatus("main")}>Back</button>

      <Wrap>
        <H1>{data.title}</H1>
        <Div>{data.contents}</Div>
      </Wrap>
    </>
  );
};

export default Read;
