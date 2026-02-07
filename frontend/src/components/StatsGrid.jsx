import InfoCard from "./InfoCard";
import "./StatsGrid.css";

function StatsGrid({ stats }) {
  return (
    <div className="stats-grid">
      <InfoCard
        title="Queues"
        value={`${stats.queues} Active`}
        variant="stat"
      />

      <InfoCard
        title="Time Slots"
        value={`${stats.timeSlots} Today`}
        variant="stat"
      />

      <InfoCard
        title="Shops"
        value={`${stats.shops} Connected`}
        variant="stat"
      />
    </div>
  );
}


export default StatsGrid;