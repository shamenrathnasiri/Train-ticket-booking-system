"use client";
import { Fragment, useMemo } from "react";

/**
 * SeatSelector Component
 * Props:
 * - rows: number of row labels to generate (default 10 => A-J)
 * - cols: number of seats per row (default 6 => 1-6)
 * - maxSelectable: max seats user can choose (number)
 * - selectedSeats: array of selected seat ids e.g., ["A1", "A2"]
 * - onChange: (newSelected: string[]) => void
 * - unavailableSeats: array of seat ids that are disabled
 */
export default function SeatSelector({
  rows = 10,
  cols = 6,
  maxSelectable = 1,
  selectedSeats = [],
  onChange,
  unavailableSeats = [],
  idPrefix = "",
}) {
  const rowLabels = useMemo(
    () => Array.from({ length: rows }, (_, i) => String.fromCharCode(65 + i)),
    [rows]
  );
  const colLabels = useMemo(
    () => Array.from({ length: cols }, (_, i) => `${i + 1}`),
    [cols]
  );
  const aisleIndex = Math.ceil(cols / 2); // insert aisle after this many cols
  const isWindowColIdx = (idx) => idx === 0 || idx === colLabels.length - 1;

  const isUnavailable = (id) => unavailableSeats?.includes(id);
  const isSelected = (id) => selectedSeats?.includes(id);

  const toggleSeat = (id) => {
    if (isUnavailable(id)) return;

    if (isSelected(id)) {
      const next = selectedSeats.filter((s) => s !== id);
      onChange?.(next);
    } else {
      if ((selectedSeats?.length || 0) >= Number(maxSelectable || 0)) return;
      onChange?.([...(selectedSeats || []), id]);
    }
  };

  return (
    <div className="space-y-3">
      <div className="text-xs text-black font-bold flex items-center gap-3 flex-wrap bg-white/50 p-2 rounded">
        <span className="inline-block w-3.5 h-3.5 rounded-sm bg-gradient-to-r from-green-500 to-blue-500 ring-2 ring-green-600/40" />
        <span>Selected</span>
        <span className="inline-block w-3.5 h-3.5 rounded-sm bg-white ring-2 ring-gray-300 ml-2" />
        <span>Available</span>
        <span className="inline-block w-3.5 h-3.5 rounded-sm bg-rose-400 ring-2 ring-rose-600/40 ml-2" />
        <span>Unavailable</span>
        <span className="inline-block w-3.5 h-3.5 rounded-sm bg-transparent ring-2 ring-cyan-500 ring-offset-2 ring-offset-white ml-2" />
        <span>Window seat</span>
      </div>

      <div className="inline-block w-full border border-white/20 rounded-lg bg-white/40 backdrop-blur-sm">
        <div className="text-center text-[11px] text-white py-2 border-b border-white/20 sticky top-0 bg-white/40 backdrop-blur-sm z-10">Front</div>
        <div className="p-3 overflow-auto max-h-[60vh]">
          <div
            className="grid gap-2 items-center"
            style={{
              gridTemplateColumns:
                cols > 1
                  ? `auto repeat(${aisleIndex}, minmax(0,1fr)) 0.75rem repeat(${Math.max(cols - aisleIndex, 0)}, minmax(0,1fr))`
                  : `auto repeat(${cols}, minmax(0,1fr))`,
            }}
          >
            <div />
            {colLabels.map((c, idx) => (
              <Fragment key={`hdr-${c}`}>
                <div className={`text-center text-[11px] md:text-xs ${isWindowColIdx(idx) ? 'text-white font-medium' : 'text-white'}`}>{c}</div>
                {idx + 1 === aisleIndex && cols > 1 ? (
                  <div key={`aisle-h-${c}`} aria-hidden className="w-3 h-3 mx-1" />
                ) : null}
              </Fragment>
            ))}

            {rowLabels.map((r) => (
              <Fragment key={r}>
                <div className="text-[11px] md:text-xs text-white flex items-center">{r}</div>
                {colLabels.map((c, idx) => {
                  const baseId = `${r}${c}`;
                  const id = `${idPrefix || ""}${baseId}`;
                  const unavailable = isUnavailable(id);
                  const selected = isSelected(id);
                  const isWindow = isWindowColIdx(idx);
                  const seatEl = (
                    <button
                      key={id}
                      type="button"
                      onClick={() => toggleSeat(id)}
                      disabled={unavailable}
                      className={[
                        "h-10 w-12 md:w-14 md:h-12 rounded-md text-xs md:text-sm font-medium border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50 disabled:opacity-80 transition-all duration-200 hover:scale-105",
                        selected
                          ? "bg-gradient-to-r from-green-500 to-blue-500 text-white border-green-600 hover:from-green-600 hover:to-blue-600"
                          : unavailable
                          ? "bg-rose-400 text-white border-rose-500 cursor-not-allowed"
                          : "bg-white hover:bg-gray-100 border-gray-300 text-gray-700",
                        isWindow ? (selected ? 'ring-2 ring-sky-200 ring-offset-1 ring-offset-white' : 'ring-2 ring-cyan-500 ring-offset-1 ring-offset-white') : ''
                      ].join(" ")}
                      aria-pressed={!!selected}
                      aria-label={`Seat ${id}${isWindow ? " (window)" : ""}${unavailable ? " (unavailable)" : selected ? " (selected)" : ""}`}
                    >
                      {id}
                    </button>
                  );
                  return (
                    <Fragment key={`cell-${id}`}>
                      {seatEl}
                      {idx + 1 === aisleIndex && cols > 1 ? (
                        <div key={`aisle-${id}`} aria-hidden className="w-3 h-3 mx-1" />
                      ) : null}
                    </Fragment>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="text-sm text-black bg-white/50 p-2 rounded">
        Selected ({selectedSeats?.length || 0}/{maxSelectable}):
        {(selectedSeats && selectedSeats.length > 0) ? (
          <div className="mt-1 flex flex-wrap gap-2">
            {selectedSeats.map((s) => (
              <span key={s} className="inline-flex items-center px-2 py-0.5 rounded-full bg-white text-black text-xs border border-gray-300">{s}</span>
            ))}
          </div>
        ) : (
          <span className="ml-2 text-black">None</span>
        )}
      </div>
    </div>
  );
}
