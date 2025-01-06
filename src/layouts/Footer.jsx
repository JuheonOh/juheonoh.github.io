export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="min-w-[500px] max-w-[700px] h-full mx-auto flex justify-between">
        <div className="w-1/3">
          <p className="text-xs text-gray-400 mb-2 font-sans">CONTACT</p>
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-x-2 items-center">
              <span className="text-sm text-gray-500"><img src="images/email.png" alt="Email" title="Email" className="w-4 h-4" /></span>
              <a className="text-sm text-blue-500 hover:underline" href="mailto:dhwngjs01@gmail.com">dhwngjs01@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <p className="text-xs text-gray-400 mb-2 font-sans">FOLLOW</p>
          <div className="flex gap-x-2 items-center">
            <span className="text-sm text-gray-500"><img src="images/github.png" alt="GitHub" title="GitHub" className="w-4 h-4" /></span>
            <a className="text-sm text-blue-500 hover:underline" href="https://github.com/juheonoh">GitHub</a>
          </div>
        </div>
        <div className="w-1/3">
          <p className="text-xs text-gray-400 text-end font-sans">
            powered by <a href="https://github.com/juheonoh" className="text-blue-500 hover:underline">JuheonOh</a> | 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
