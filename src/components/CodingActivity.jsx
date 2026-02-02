import {GitHubCalendar} from "react-github-calendar";

export default function CodingActivity() {
  return (
    <section className="px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Coding Activity
        </h2>

        <div className="relative p-8 border-2 border-black rounded-xl bg-white/40 overflow-auto">

          <GitHubCalendar
            username="vibhuti-prajapati"
            blockSize={15}
            blockMargin={5}
            fontSize={14}
            theme={{
            light: [ "#e6e5e5", "#b1acac","#918b8b",  "#4a4848", "#000000" ]
          }}
          />

        </div>

        <p className="mt-6 text-gray-700 max-w-xl">
          I focus on building real-world backend projects and consistently
          improving through hands-on development.
        </p>

      </div>
    </section>
  );
}