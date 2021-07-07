import React from "react";
import styled from "styled-components";
import { Blog, BlogPageType } from "../Pages/App";

const Wrap = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid none;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 6px 1px #e5e7e9;
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
  tasks: Blog[];
  setPageStatus: React.Dispatch<React.SetStateAction<BlogPageType>>;
  setBlogData: React.Dispatch<React.SetStateAction<Blog>>;
}

const Task: React.FC<Props> = (props) => {
  const { tasks, setPageStatus, setBlogData } = props;

  return (
    <>
      <button
        onClick={() => {
          setPageStatus("create");
        }}
      >
        Post
      </button>

      {tasks.map((data, idx) => {
        return (
          <Wrap
            key={idx}
            onClick={() => {
              setPageStatus("read");
              setBlogData(data);
            }}
          >
            <H2>{data.title}</H2>
            <Div>{data.contents}</Div>
          </Wrap>
        );
      })}
    </>
  );
};

export default Task;
