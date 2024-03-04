import Image from "next/image";

export default function Home() {
  return (
    <div className="flex   h-screen justify-center bg-slate-700 items-center">
      <div id="container ">
        <div className="steam" id="steam1">
          {" "}
        </div>
        <div className="steam" id="steam2">
          {" "}
        </div>
        <div className="steam" id="steam3">
          {" "}
        </div>
        <div className="steam" id="steam4">
          {" "}
        </div>

        <div id="cup">
          <div id="cup-body">
            <div id="cup-shade"></div>
          </div>
          <div id="cup-handle"></div>
        </div>

        <div id="saucer"></div>

        <div id="shadow"></div>
      </div>
    </div>
  );
}
