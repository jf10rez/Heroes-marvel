export const ComicInfo = ({ name, resourceURI }) => {
  return (
    <li className="list-group-item" key={name}>
      {" "}
      <b>{name}:</b> {resourceURI}{" "}
    </li>
  );
};
