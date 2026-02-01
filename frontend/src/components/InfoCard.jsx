import "./InfoCard.css";

const InfoCard = ({ title, value, children, variant }) => {
  return (
    <div className={`info-card ${variant || ""}`}>
      <h3>{title}</h3>
      {value && <p>{value}</p>}
      {children}
    </div>
  );
};
export default InfoCard;