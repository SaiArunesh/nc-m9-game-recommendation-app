function NavLink(props) {
  return (
    <div class="nav-links" style={{ marginTop: "50px" }}>
      <button
        onClick={() => props.onChangeLink(props.link)}
        className="nav-link"
      >
        {props.link}
      </button>
    </div>
  );
}

export default NavLink;
