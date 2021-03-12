const apiURL =
  "https://my-json-server.typicode.com/cesar-itacademy/fake-json/teatre";

const getData = async () => {
  const response = await fetch(apiURL);
  const text = await response.json();
  return text;
};

export default getData;
