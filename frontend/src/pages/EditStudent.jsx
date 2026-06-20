import { useParams } from "react-router-dom";
import StudentForm from "../components/StudentForm";

function EditStudent() {
  const { id } = useParams();

  return (
    <div className="container py-4">
      <StudentForm studentId={id} />
    </div>
  );
}

export default EditStudent;