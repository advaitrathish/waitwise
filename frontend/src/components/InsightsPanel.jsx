import React, { useMemo } from "react";
import "./InsightsPanel.css";
import { crowdData } from "../data/crowdData";

const InsightsPanel = () => {

  const insights = useMemo(() => {
    let maxRatio = -1;
    let minRatio = Infinity;

    let busiestShop = "";
    let calmestShop = "";

    let peakHour = "";
    let bestTime = "";

    crowdData.forEach((shop) => {
      const { name, capacity, slots } = shop;

      Object.entries(slots).forEach(([time, current]) => {
        const ratio = current / capacity;

        if (ratio > maxRatio) {
          maxRatio = ratio;
          busiestShop = `${name} (${time})`;
          peakHour = time;
        }

        if (ratio < minRatio) {
          minRatio = ratio;
          calmestShop = `${name} (${time})`;
          bestTime = time;
        }
      });
    });

    return {
      busiest: busiestShop,
      calmest: calmestShop,
      bestTimeOverall: bestTime,
      peakHour: peakHour,
    };
  }, []);

  return (
    <div className="insights-panel glass-card">
      <h2 className="insights-title">Smart Insights</h2>

      <div className="insights-grid">
        <div className="insight-item">
          <span className="label">Most Crowded Shop</span>
          <span className="value">{insights.busiest}</span>
        </div>

        <div className="insight-item">
          <span className="label">Least Crowded Shop</span>
          <span className="value">{insights.calmest}</span>
        </div>

        <div className="insight-item">
          <span className="label">Best Overall Time</span>
          <span className="value">{insights.bestTimeOverall}</span>
        </div>

        <div className="insight-item">
          <span className="label">Peak Hour Today</span>
          <span className="value">{insights.peakHour}</span>
        </div>
      </div>
    </div>
  );
};

export default InsightsPanel;