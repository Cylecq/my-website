import NavList from "./NavList";
import Logo from "./Logo";

async function Header() {
  return (
    <header className="bg-white z-50 fixed top-0 w-full shadow">
      <nav className="bg-white max-w-5xl mx-auto font-display p-6 flex items-center justify-between">
        <Logo />
        <NavList />
      </nav>
    </header>
  );
}

export default Header;
