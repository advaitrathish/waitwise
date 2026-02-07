import Header from "../components/Header";
import HeroBlock from "../components/HeroBlock";
import StatsGrid from "../components/StatsGrid";
import SectionContainer from "../components/SectionContainer";
import InfoCard from "../components/InfoCard";
import WaveBackground from "../components/WaveBackground";

import "./Dashboard.css";

function Dashboard() {
  const statsData = {
    queues: 4,
    timeSlots: 12,
    shops: 8,
  };


  return (
    <>
      <WaveBackground />
      <Header />
      <HeroBlock />

      <div className="dashboard-container">
        <StatsGrid stats={statsData} />

        <SectionContainer
          title="Queue Insights"
          subtitle="System-generated insights based on real-time demand patterns"
        >
          <div className="insights-grid">
            <InfoCard variant="plan">
              <h3>Peak Hours</h3>
              <p>Identify high-demand periods and traffic surges.</p>
            </InfoCard>

            <InfoCard variant="plan highlight">
              <h3>Average Wait Time</h3>
              <p>Monitor service delays and optimize throughput.</p>
            </InfoCard>

            <InfoCard variant="plan">
              <h3>Anomaly Detection</h3>
              <p>Detect unusual queue behavior and disruptions.</p>
            </InfoCard>
          </div>
        </SectionContainer>
      </div>
    </>
  );
}

export default Dashboard;
