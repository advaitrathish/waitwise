import { useEffect, useState } from "react";

import Header from "../components/Header";
import HeroBlock from "../components/HeroBlock";
import StatsGrid from "../components/StatsGrid";
import StatsSkeleton from "../components/StatsSkeleton";
import SectionContainer from "../components/SectionContainer";
import InfoCard from "../components/InfoCard";
import WaveBackground from "../components/WaveBackground";
import VisitAdvisor from "../components/VisitAdvisor";
import InsightsPanel from "../components/InsightsPanel";

import "./Dashboard.css";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  const statsData = {
    queues: 4,
    timeSlots: 12,
    shops: 8,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <WaveBackground />
      <Header />
      <HeroBlock />

      <div className="dashboard-container">
        {loading ? (
          <StatsSkeleton />
        ) : (
          <StatsGrid stats={statsData} />
        )}

        <VisitAdvisor />
        <InsightsPanel />

        {/* 🔮 Future Modules Section */}
        <SectionContainer
          title="Future Intelligence Modules"
          subtitle="Planned analytics capabilities for upcoming releases"
        >
          <div className="insights-grid">
            <InfoCard variant="plan">
              <h3>Peak Hours Analytics</h3>
              <p>
                Advanced demand modeling to predict high-traffic periods
                before congestion builds.
              </p>
            </InfoCard>

            <InfoCard variant="plan highlight">
              <h3>Average Wait Time Estimation</h3>
              <p>
                Machine-driven service delay forecasting to optimize queue
                throughput.
              </p>
            </InfoCard>

            <InfoCard variant="plan">
              <h3>Anomaly Detection Engine</h3>
              <p>
                Intelligent monitoring to detect irregular crowd patterns and
                service disruptions.
              </p>
            </InfoCard>
          </div>
        </SectionContainer>
      </div>
    </>
  );
}

export default Dashboard;