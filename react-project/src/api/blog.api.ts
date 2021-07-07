import { Blog } from "../Pages/App";

export const findAll = async () => {
  const resp = await fetch("http://localhost:5000/blog")
    .then((data) => data.json())
    .catch((error) => console.log(error));

  return resp;
};

export const createOne = async (data: Blog) => {
  await fetch("http://localhost:5000/blog", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => console.log(error));
};

export const deleteOne = async (data: Blog) => {
  await fetch(`http://localhost:5000/blog/${data._id}`, {
    method: "DELETE",
  }).catch((error) => console.log(error));
};

export const updateOne = async (data: Blog) => {
  await fetch(`http://localhost:5000/blog/${data._id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => console.log(error));
};
