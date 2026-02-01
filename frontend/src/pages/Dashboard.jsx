import Header from '../components/Header';
import StatsGrid from '../components/StatsGrid';
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Header />
      <StatsGrid />

      <section className="dashboard-section">
        <h2>Section 2</h2>
        <p>Future content goes here</p>
      </section>
    </>
  );
}
export default Dashboard;