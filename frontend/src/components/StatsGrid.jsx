import InfoCard from "./InfoCard";
import "./StatsGrid.css";

function StatsGrid() {
  return (
    <div className="stats-grid">
      <InfoCard title="Queues" value="4 Active" variant="stat" />
      <InfoCard title="Time Slots" value="12 Today" variant="stat" />
      <InfoCard title="Shops" value="8 Connected" variant="stat" />
    </div>

  );
}

export default StatsGrid;