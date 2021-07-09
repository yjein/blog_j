import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { findAll, createOne, deleteOne, updateOne } from "../api/blog.api";
import Task from "../Organisms/Task";
import Read from "../Organisms/Read";
import Create from "../Organisms/Create";
import Modify from "../Organisms/Modify";

const Wrap = styled.div`
  padding: 2rem;
  min-width: fit-content;
  min-height: 100%;
  box-sizing: border-box;
  background-color: #f9f9f9;
`;

const H1 = styled.h1`
  cursor: pointer;
`;

export type BlogPageType = "main" | "read" | "create" | "modify";

export interface Blog {
  _id?: string;
  title: string;
  contents: string;
}

const App = () => {
  const [tasks, setTasks] = useState<Blog[]>([]);
  const [blogData, setBlogData] = useState<Blog>({ title: "", contents: "" });
  const [pageStatus, setPageStatus] = useState<BlogPageType>("main");
  const [keyword, setKeyword] = useState("");
  // const [loading, setLoading] = useState<Boolean>(true);

  const createBlog = (data: Blog) => {
    createOne(data);
  };

  const deleteBlog = async (data: Blog) => {
    const result = window.confirm("정말 삭제하시겠습니까?");

    if (!result) return window.alert("취소 되었습니다.");
    if (!data._id) return;

    deleteOne(data);

    window.alert("삭제되었습니다.");
  };

  const updateBlog = (data: Blog) => {
    updateOne(data);
  };

  const blogStatus = () => {
    switch (pageStatus) {
      case "read":
        if (!blogData) return;
        return (
          <Read
            data={blogData}
            setPageStatus={setPageStatus}
            deleteBlog={deleteBlog}
          />
        );

      case "create":
        return <Create setPageStatus={setPageStatus} createBlog={createBlog} />;

      case "modify":
        return (
          <Modify
            data={blogData}
            setPageStatus={setPageStatus}
            updateBlog={updateBlog}
          />
        );

      case "main":
      default: {
        return (
          <Task
            tasks={tasks}
            keyword={keyword}
            setPageStatus={setPageStatus}
            setBlogData={setBlogData}
          />
        );
      }
    }
  };

  useEffect(() => {
    const fetchAll = async () => {
      const resp = await findAll();

      setTasks(resp.reverse());
    };

    fetchAll();
  }, []);

  return (
    <Wrap>
      <H1
        onClick={() => {
          setPageStatus("main");
        }}
      >
        JBlog
      </H1>

      <input
        maxLength={30}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />

      {blogStatus()}
    </Wrap>
  );
};

export default App;
