import React from "react";
import styled from "styled-components";
import { Blog, BlogPageType } from "../Pages/App";

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  margin: 1rem 0;
  padding: 2rem;
`;

const Div = styled.div`
  padding: 1rem;
  width: 16rem;
  height: 15rem;
  background-color: #ffffff;
  border: 1px solid none;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 6px 1px #e5e7e9;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const H2 = styled.h2`
  margin: 0;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Span = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  margin-top: 0.5rem;
  word-break: break-all;
  overflow: hidden;
`;

interface Props {
  tasks: Blog[];
  keyword: string;
  setPageStatus: React.Dispatch<React.SetStateAction<BlogPageType>>;
  setBlogData: React.Dispatch<React.SetStateAction<Blog>>;
}

const Task: React.FC<Props> = (props) => {
  const { tasks, keyword, setPageStatus, setBlogData } = props;

  return (
    <>
      <button
        onClick={() => {
          setPageStatus("create");
        }}
      >
        Post
      </button>

      <GridWrap>
        {tasks
          .filter((data) => {
            if (keyword === "") return data;
            else if (
              data.title.toLowerCase().includes(keyword.toLowerCase()) ||
              data.contents.toLowerCase().includes(keyword.toLowerCase())
            )
              return data;
            return false;
          })
          .reverse()
          .map((data, idx) => {
            return (
              <Div
                key={idx}
                onClick={() => {
                  setPageStatus("read");
                  setBlogData(data);
                }}
              >
                <H2>{data.title}</H2>
                <Span>{data.contents}</Span>
              </Div>
            );
          })}
      </GridWrap>
    </>
  );
};

export default Task;
