const getNpmPackages = async () => {
  const data = await fetch(`https://registry.npmjs.org/express-ease`);
  const json = await data.json();

  return {
    id: json._id,
    name: json.name,
    description: json.description,
  };
};

export default getNpmPackages;
