const Navbar = () => {
  return ( 
    <nav className="navbar" style={{
      borderBottom: "2px solid black",
      borderTop: "2px double #f1356d",
      borderBottomRightRadius: "5%",
      borderBottomLeftRadius: "5%",
      borderTopLeftRadius: "3%",
      borderTopRightRadius: "3%",
    }}>
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};
 
export default Navbar;