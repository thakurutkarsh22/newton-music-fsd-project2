import Logo from "./Logo";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <Logo />

        <ul>
          <li>HOME</li>
          <li>Social</li>
          <li>Library</li>
        </ul>
        <SearchBar />
        <Profile />
      </nav>
    </>
  );
}

export default NavBar;
