export default function Home() {
  return (
    <div className="max-w-[700px] mx-auto py-7">
      <div className="flex gap-4">
        <div className="max-w-[500px]">
          <p className="text-sm font-light">
            Welcome! This site serves as an example for the Bay Jekyll theme. Bay
            is a very simple and minimal theme, directly inspired by Dan Grover&apos;s{" "}
            <a href="#" className="text-blue-500 hover:underline">
              website
            </a>
            .
            <br />
            <br />
            You can find the source code and the instructions on{" "}
            <a href="#" className="text-blue-500 hover:underline">
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="max-w-[200px]">
          <figure>
            <img src="https://picsum.photos/200/300" alt="random image" />
            <figcaption className="mt-1">
              <p className="text-center">
                <a href="#" className="text-sm text-blue-500 hover:underline font-sans">
                  @randolph
                </a>
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
