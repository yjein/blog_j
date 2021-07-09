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
  data: Blog;
  setPageStatus: React.Dispatch<React.SetStateAction<BlogPageType>>;
  updateBlog: (data: Blog) => void;
}

const Modify: React.FC<Props> = (props) => {
  const { data, setPageStatus, updateBlog } = props;
  const [value, setValue] = useState<Blog>(data);

  const HandleonClick = () => {
    if (value.title === data.title && value.contents === data.contents)
      return setPageStatus("read");

    const result = window.confirm(
      "변경사항이 저장되지 않았습니다. 입력을 취소하시겠습니까?"
    );
    if (result) return setPageStatus("read");
  };

  return (
    <>
      <button onClick={HandleonClick}>Back</button>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          updateBlog(value);
        }}
      >
        <button>Submit</button>

        <Fieldset>
          <Input
            type="text"
            required={true}
            placeholder="Title"
            maxLength={30}
            value={value.title}
            onChange={(e) => {
              setValue({ ...value, title: e.target.value });
            }}
          />
          <Hr />

          <Textarea
            required={true}
            cols={50}
            rows={30}
            placeholder="Contents"
            maxLength={3000}
            value={value.contents}
            onChange={(e) => {
              setValue({ ...value, contents: e.target.value });
            }}
          />
        </Fieldset>
      </Form>
    </>
  );
};

export default Modify;
