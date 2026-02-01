import "./SectionContainer.css";

const SectionContainer = ({ title, subtitle, children }) => {
  return (
    <section className="section-container">
      <div className="section-header">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>

      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
