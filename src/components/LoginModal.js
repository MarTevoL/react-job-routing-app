import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  border: "none",
};

function LoginModal() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={style}>
          <LoginPage />
        </Box>
      </Modal>
    </div>
  );
}

export default LoginModal;
