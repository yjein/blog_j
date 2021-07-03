export const findAll = async () => {
  const resp = await fetch('http://localhost:5000/blog')
    .then((data) => data.json())
    .catch((error) => console.log(error));

  return resp;
};

export const create = async (data: {}) => {
  await fetch('http://localhost:5000/blog', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
