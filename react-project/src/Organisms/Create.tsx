import React, { useState } from "react";
import styled from "styled-components";
import { Blog, BlogPageType } from "../Pages/App";

const Form = styled.form`
  display: flex;
  flex-flow: column;
  margin: 1rem 0;
  padding: 1rem;
`;

interface Props {
  setPageStatus: React.Dispatch<React.SetStateAction<BlogPageType>>;
  createBlog: (data: Blog) => Promise<void>;
}

const Create: React.FC<Props> = (props) => {
  const { setPageStatus, createBlog } = props;
  const [value, setValue] = useState<Blog>({ title: "", contents: "" });

  return (
    <>
      <button onClick={() => setPageStatus("main")}>Back</button>

      <Form
        onSubmit={(e) => {
          console.log("submt????????");
          e.preventDefault();

          createBlog(value);
        }}
      >
        <button type="submit" onClick={() => console.log("submit")}>
          Submit
        </button>

        <input
          type="text"
          required={true}
          placeholder="Title"
          onChange={(e) => {
            setValue({ title: e.target.value, contents: value.contents });
          }}
        />
        <textarea
          required={true}
          cols={50}
          rows={30}
          placeholder="Contents"
          onChange={(e) => {
            setValue({ title: value.title, contents: e.target.value });
          }}
        />
      </Form>
    </>
  );
};

export default Create;
