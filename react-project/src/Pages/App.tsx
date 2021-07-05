import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { findAll, create } from "../api/blog.api";
import Task from "../Organisms/Task";
import Read from "../Organisms/Read";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

export type BlogPageType = "main" | "read" | "create" | "modify";

export interface Blog {
  title: String;
  contents: string;
}

const App = () => {
  const [tasks, setTasks] = useState<Blog[]>([]);
  // const [blogData, setBlogData] = useState<Blog>();
  const [pageStatus, setPageStatus] = useState<BlogPageType>("main");
  // const [loading, setLoading] = useState<Boolean>(true);

  const createBlog = async (data: Blog) => {
    const blogData = {
      title: data.title,
      contents: data.contents,
    };

    create(blogData);
  };

  const blogStatus = () => {
    switch (pageStatus) {
      // case "read":
      //   if (!blogData) return;
      //   return <Read data={blogData} setPageStatus={setPageStatus} />;

      // case "create":
      //   return (

      //   );

      case "modify":
        return <div>수정페이지</div>;

      case "main":
      default: {
        return <Task tasks={tasks} setPageStatus={setPageStatus} />;
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
      <h1>Blog</h1>
      {blogStatus()}
    </Wrap>
  );
};

export default App;
