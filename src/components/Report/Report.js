import { ReportContainer } from "./Report.Style";


const Report = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <ReportContainer className="report-container">
        <button onClick={onClose}>Close</button>
      </ReportContainer>
    </>
  );
};

export default Report;
