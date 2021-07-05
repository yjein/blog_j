import React from "react";
import styled from "styled-components";
import { Blog, BlogPageType } from "../Pages/App";

const Wrap = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  height: 100%;
  border: 1px solid #c0bfbf;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 3px #c0bfbf;
  cursor: pointer;
`;

const H2 = styled.h2`
  margin: 0;
  padding: 0;
`;

const Div = styled.div`
  margin-top: 0.5rem;
  list-style: none;
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
        <H2>{data.contents}</H2>
        <Div>{data.contents}</Div>
      </Wrap>
    </>
  );
};

export default Read;
