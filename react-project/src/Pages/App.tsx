import React, { useEffect } from "react";
import { useState } from "react";
import { findAll, create } from "../api/blog.api";

interface Blog {
  id: string;
  title: String;
  contents: string;
}

const App = () => {
  const [datas, setDatas] = useState<Blog[]>([]);
  // const [loading, setLoading] = useState<Boolean>(true);

  const post = async (data: Blog) => {
    const blogData = {
      title: data.title,
      contents: data.contents,
    };

    create(blogData);
  };

  useEffect(() => {
    const fetchAll = async () => {
      const resp = await findAll();

      setDatas(resp);
    };

    fetchAll();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <form
        onSubmit={(e) => {
          // post();
        }}
      >
        <input type="text" required={true} size={54} placeholder="Title" />
        <textarea required={true} cols={50} rows={30}></textarea>
        <button>Post</button>
      </form>
      {datas.map((data, idx) => {
        return (
          <li key={idx}>
            {data.contents}
            <div>{data.contents}</div>
          </li>
        );
      })}
    </div>
  );
};

export default App;
