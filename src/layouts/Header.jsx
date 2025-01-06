export default function Header() {
  return (
    <header className="border-b h-20">
      <div className="min-w-[500px] max-w-[700px] h-full mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">BAY THEME</h1>
        <nav>
          <ul className="flex items-center gap-4 text-sm">
            <li>
              <a href="https://juheonoh.github.io" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="https://github.com/JuheonOh" className="hover:underline" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
            <li>
              <a href="https://juheonoh.github.io/portfolio" className="hover:underline" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
