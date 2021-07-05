import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { findAll, createOne, deleteOne } from "../api/blog.api";
import Task from "../Organisms/Task";
import Read from "../Organisms/Read";
import Create from "../Organisms/Create";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
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
  // const [loading, setLoading] = useState<Boolean>(true);

  const createBlog = (data: Blog) => {
    const createData = {
      title: data.title,
      contents: data.contents,
    };

    createOne(createData);
  };

  const deleteBlog = (data: Blog) => {
    if (!data._id) return;
    const deleteData = {
      ...data,
    };

    deleteOne(deleteData);
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
        return <div>수정페이지</div>;

      case "main":
      default: {
        return (
          <Task
            tasks={tasks}
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

      setTasks(resp);
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
      {blogStatus()}
    </Wrap>
  );
};

export default App;
