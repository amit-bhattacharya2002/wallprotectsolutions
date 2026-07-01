import type { ResourceArticle } from "@/app/data/resources";

type DiagramType = NonNullable<ResourceArticle["diagram"]>;

const sinkCallouts = [
  "Dedicated hand hygiene sink",
  "Seamless cleanable wall surface",
  "Moisture-resistant finish",
  "Sink splash zone protection",
  "Chemical-resistant surface",
  "Sealed penetrations",
  "Touchless soap dispenser",
  "Touchless faucet",
  "Paper towel dispenser placement",
  "Cleanable countertop transition",
  "IPAC review considerations",
];

const roomRows = [
  ["Operating / procedure room", "Seamless, cleanable, chemical-resistant surfaces"],
  ["Clean utility", "Cleanable storage-area protection and durable transitions"],
  ["Soiled utility", "Moisture, splash, and chemical-resistant protection"],
  ["Exam room", "Cleanable wall protection around sinks and high-touch areas"],
  ["Healthcare corridor", "Impact-resistant wall, corner, door, and rail protection"],
  ["Public / patient washroom", "Moisture-resistant wall finish and cleanable transitions"],
];

const finishRows = [
  ["Painted drywall", "Low", "Low", "Low", "Low", "Administrative / low-risk spaces"],
  ["FRP", "Medium", "Medium", "High", "Medium", "Support and utility spaces"],
  ["Acrovyn sheet", "Medium", "High", "Medium", "Medium", "Corridors and high-traffic areas"],
  ["Altro Whiterock", "High", "Medium", "High", "High", "Higher-cleanability clinical spaces"],
  ["FRL", "Medium", "Medium", "Medium", "Medium", "Public-facing healthcare interiors"],
  ["Stainless steel", "High", "High", "High", "High", "Harsh washdown or custom protection"],
];

function SinkSplashZoneDiagram() {
  return (
    <div className="overflow-hidden border border-slate-200 bg-white shadow-[0_22px_60px_-42px_rgba(15,23,42,0.35)]">
      <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[360px] bg-[#eef5f4] p-8">
          <div className="absolute inset-x-8 top-8 h-44 border border-[#9cc8c0] bg-white" />
          <div className="absolute left-1/2 top-20 h-28 w-44 -translate-x-1/2 border border-slate-300 bg-[#f8fafc]" />
          <div className="absolute left-1/2 top-30 h-16 w-28 -translate-x-1/2 rounded-b-full border border-slate-300 bg-white" />
          <div className="absolute left-1/2 top-24 h-7 w-2 -translate-x-1/2 rounded-full bg-slate-500" />
          <div className="absolute left-[58%] top-24 h-4 w-8 rounded-full border border-slate-400" />
          <div className="absolute inset-x-10 top-52 h-20 border border-slate-300 bg-white" />
          <div className="absolute bottom-12 left-1/2 h-20 w-52 -translate-x-1/2 border border-slate-300 bg-[#e5e7eb]" />
          <div className="absolute left-12 top-10 max-w-40 border-l-2 border-[#64A70B] bg-white/90 px-3 py-2 text-xs font-medium text-slate-700">
            Cleanable wall surface
          </div>
          <div className="absolute right-10 top-28 max-w-40 border-l-2 border-[#64A70B] bg-white/90 px-3 py-2 text-xs font-medium text-slate-700">
            Splash exposure area
          </div>
          <div className="absolute bottom-8 left-8 max-w-44 border-l-2 border-[#64A70B] bg-white/90 px-3 py-2 text-xs font-medium text-slate-700">
            Sealed counter and wall transition
          </div>
        </div>
        <div className="bg-[#0f212a] p-8 text-white">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#9BCB4A]">
            Typical considerations
          </p>
          <h3 className="mb-6 text-2xl font-semibold tracking-tight">
            Healthcare hand hygiene station
          </h3>
          <div className="grid gap-2">
            {sinkCallouts.map((item) => (
              <div key={item} className="flex items-start gap-3 border-t border-white/10 pt-2.5 text-sm text-white/75">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9BCB4A]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="border-t border-slate-200 bg-[#f8fafc] px-6 py-4 text-xs leading-relaxed text-slate-500">
        Typical healthcare hand hygiene station. Final design requirements vary by health authority, project specifications, and Infection Prevention & Control review.
      </p>
    </div>
  );
}

function RoomMapDiagram() {
  return (
    <div className="border border-slate-200 bg-white p-6 shadow-[0_22px_60px_-42px_rgba(15,23,42,0.3)]">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">Room types</p>
          <h3 className="text-2xl font-semibold tracking-tight text-[#0f172a]">Where hygienic and protective systems appear</h3>
        </div>
      </div>
      <div className="grid overflow-hidden border border-slate-200 md:grid-cols-2">
        {roomRows.map(([room, requirement]) => (
          <div key={room} className="border-b border-r border-slate-200 p-4 last:border-b-0">
            <div className="font-semibold text-[#0f172a]">{room}</div>
            <div className="mt-1 text-sm leading-relaxed text-slate-600">{requirement}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinishGuideDiagram() {
  return (
    <div className="overflow-hidden border border-slate-200 bg-white shadow-[0_22px_60px_-42px_rgba(15,23,42,0.3)]">
      <div className="border-b border-slate-200 bg-[#f8fafc] px-6 py-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#64A70B]">Selection guide</p>
        <h3 className="text-2xl font-semibold tracking-tight text-[#0f172a]">Healthcare wall finish comparison</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full text-left text-sm">
          <thead className="bg-white text-xs uppercase tracking-[0.12em] text-slate-500">
            <tr>
              {["System", "Cleanability", "Impact", "Moisture", "Chemical", "Common fit"].map((heading) => (
                <th key={heading} className="border-b border-slate-200 px-4 py-3 font-semibold">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {finishRows.map((row) => (
              <tr key={row[0]} className="border-b border-slate-100 last:border-b-0">
                {row.map((cell, index) => (
                  <td key={`${row[0]}-${index}`} className={`px-4 py-3 ${index === 0 ? "font-semibold text-[#0f172a]" : "text-slate-600"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-slate-200 bg-[#f8fafc] px-6 py-4 text-xs leading-relaxed text-slate-500">
        This is a high-level comparison for planning conversations, not a substitute for project specifications, health authority standards, or design-team review.
      </p>
    </div>
  );
}

export default function HealthcareKnowledgeDiagram({ type }: { type: DiagramType }) {
  if (type === "sink-splash-zone") return <SinkSplashZoneDiagram />;
  if (type === "room-map") return <RoomMapDiagram />;
  return <FinishGuideDiagram />;
}
