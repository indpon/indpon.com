import Link from "next/link"

const Header = () => (
  <header className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 shadow-md">
    <nav className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
        indpon.com
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="text-white hover:text-gray-200 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-200 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://discord.gg/aYnv4Q6Aej" className="text-white hover:text-gray-200 transition-colors">
            Discord
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
