import { useNavigate } from "react-router-dom";

const AddDocument = ({ open, onClose }) => {
  const navigate = useNavigate();
  if (!open) return null;

  return (
    <div>
      <div className="overlay" onClick={onClose}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <h2 onClick={onClose}>X</h2>
          <p>click to upload a PDF or text</p>
          <div className="button-container">
            <button>upload PDF</button>
            <button>upload text</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDocument;
