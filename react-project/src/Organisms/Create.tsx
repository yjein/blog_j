import React, { useState } from "react";
import styled from "styled-components";
import { Blog, BlogPageType } from "../Pages/App";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem 5rem;
  padding: 1rem;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 100%;
  background-color: #ffffff;
  border: solid #e8e8e8;
  border-width: 0 1px;
`;

const Input = styled.input`
  padding: 4rem 1rem 2.5rem;
  font-size: 2.5rem;
  text-align: center;
  border: none;
  resize: none;
`;

const Hr = styled.hr`
  width: 80%;
  height: 1px;
  background: #e5e7e9;
  border: none;
`;

const Textarea = styled.textarea`
  padding: 2.5rem 8.75rem;
  height: 40rem;
  font-size: 1.25rem;
  border: none;
  resize: none;
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

        <Fieldset>
          <Input
            type="text"
            required={true}
            placeholder="Title"
            onChange={(e) => {
              setValue({ title: e.target.value, contents: value.contents });
            }}
          />
          <Hr />

          <Textarea
            required={true}
            cols={50}
            rows={30}
            placeholder="Contents"
            onChange={(e) => {
              setValue({ title: value.title, contents: e.target.value });
            }}
          />
        </Fieldset>
      </Form>
    </>
  );
};

export default Create;
