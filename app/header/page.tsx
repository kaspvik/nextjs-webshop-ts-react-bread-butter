import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-bold">Bread&Butter</h1>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/admin">👤</Link>
          </li>
          <li>
            <Link href="/cart">🛒</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
