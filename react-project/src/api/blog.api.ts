import { Blog } from "../Pages/App";

export const findAll = async () => {
  const resp = await fetch("http://localhost:5000/blog")
    .then((data) => data.json())
    .catch((error) => console.log(error));

  return resp;
};

export const createOne = async (data: Blog) => {
  await fetch("http://localhost:5000/blog", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const deleteOne = async (data: Blog) => {
  await fetch(`http://localhost:5000/blog/${data._id}`, {
    method: "delete",
  }).catch((error) => console.log(error));
};
