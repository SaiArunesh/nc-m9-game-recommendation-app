function ItemDescription(props) {
  return (
    <div className="description">
      <p className="title">{props.title}</p>
      <p className="desc">{props.description}</p>
    </div>
  );
}
export default ItemDescription;
