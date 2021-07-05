import React from "react";
import styled from "styled-components";
// import { Blog, BlogPageType } from "../Pages/App";

const Form = styled.div`
  display: flex;
  flex-flow: column;
  margin: 1rem 0;
  padding: 1rem;
`;

interface Props {
  // data: Blog;
  // setPageStatus: React.Dispatch<React.SetStateAction<BlogPageType>>;
}

const Create: React.FC<Props> = (props) => {
  // const { data, setPageStatus } = props;

  return (
    <Form
      onSubmit={(e) => {
        // post();
      }}
    >
      <input type="text" required={true} size={54} placeholder="Title" />
      <textarea
        required={true}
        cols={50}
        rows={30}
        placeholder="Contents"
      ></textarea>
    </Form>
  );
};

export default Create;
