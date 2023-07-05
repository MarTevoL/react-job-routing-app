import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getJob } from "../data";

function JobDetailModal() {
  let params = useParams();
  let navigate = useNavigate();
  let location = useLocation();
  let job = getJob(params.Id);

  return (
    <>
      <div>JobDetailModal</div>
      <p>job.title</p>
    </>
  );
}

export default JobDetailModal;
