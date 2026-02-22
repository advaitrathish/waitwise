import { useState, useMemo } from "react";
import "./VisitAdvisor.css";
import { crowdData } from "../data/crowdData";
import { getCrowdStatus } from "../utils/crowdUtils";

function VisitAdvisor() {
  const [date, setDate] = useState("");
  const [shopName, setShopName] = useState(crowdData[0].name);
  const [time, setTime] = useState("10:00");
  const [groupSize, setGroupSize] = useState(1);
  const [hasChecked, setHasChecked] = useState(false);

  const selectedShop = useMemo(
    () => crowdData.find((s) => s.name === shopName),
    [shopName]
  );

  const currentCrowd = useMemo(() => {
    if (!selectedShop) return groupSize;
    const base = selectedShop.slots[time] ?? 0;
    return base + groupSize;
  }, [selectedShop, time, groupSize]);

  const crowdStatus = useMemo(() => {
    if (!selectedShop) return { label: "Unknown", color: "#64748b" };
    return getCrowdStatus(currentCrowd, selectedShop.capacity);
  }, [currentCrowd, selectedShop]);

  const bestTimeSlot = useMemo(() => {
    if (!selectedShop) return null;
    let best = null;
    let lowest = Infinity;

    Object.entries(selectedShop.slots).forEach(([slot, count]) => {
      const ratio = count / selectedShop.capacity;
      if (ratio < lowest) {
        lowest = ratio;
        best = slot;
      }
    });

    return best;
  }, [selectedShop]);

  return (
    <div className="visit-advisor-container">
      {/* LEFT */}
      <div className="advisor-form glass-card">
        <h2 className="advisor-title">Visit Advisor</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Ration Shop</label>
            <select
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
            >
              {crowdData.map((shop) => (
                <option key={shop.name} value={shop.name}>
                  {shop.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Time Slot</label>
            <select value={time} onChange={(e) => setTime(e.target.value)}>
              {selectedShop &&
                Object.keys(selectedShop.slots).map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-group">
            <label>Group Size</label>
            <input
              type="number"
              min="1"
              value={groupSize}
              onChange={(e) => setGroupSize(Number(e.target.value))}
            />
          </div>
        </div>

        <button className="check-btn" onClick={() => setHasChecked(true)}>
          Check Crowd Status
        </button>
      </div>

      {/* RIGHT */}
      {hasChecked && (
        <div className={`advisor-result fade-in glass-card ${crowdStatus.label.toLowerCase()}`}>
          <h3 style={{ color: crowdStatus.color }}>
            {crowdStatus.label}
          </h3>

          <p>
            <strong>{shopName}</strong> is likely{" "}
            <strong>{crowdStatus.label.toLowerCase()}</strong> at{" "}
            <strong>{time}</strong> for a group of{" "}
            <strong>{groupSize}</strong>.
          </p>

          {bestTimeSlot && bestTimeSlot !== time && (
            <div className="best-time">
              Best time to visit: <strong>{bestTimeSlot}</strong>
            </div>
          )}

          <span className="confidence-text">
            Prediction based on historical slot data (demo mode)
          </span>
        </div>
      )}
    </div>
  );
}

export default VisitAdvisor;