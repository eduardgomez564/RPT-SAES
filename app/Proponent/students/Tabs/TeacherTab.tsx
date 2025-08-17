import { useState } from "react";
import { useForm } from "react-hook-form";
import AddStudentModal from "../Modals/AddStudentModal";
// Button Components
import PrimaryButton from "@/components/Common/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Common/Buttons/SecondaryButton";
import UtilityButton from "@/components/Common/Buttons/UtilityButton";
import DangerButton from "@/components/Common/Buttons/DangerButton";
import TableList from "@/components/Common/Tables/TableList";
// Text Components
import SecondaryHeader from "@/components/Common/Texts/SecondaryHeader";
import TertiaryHeader from "@/components/Common/Texts/TertiaryHeader";
import BodyText from "@/components/Common/Texts/BodyText";
import BodyLabel from "@/components/Common/Texts/BodyLabel";

export default function TeacherTab() {
  const [students, setStudents] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);

  // React Hook Form setup
  const formMethods = useForm({
    defaultValues: {
      studentId: "",
      name: "",
      grade: "",
      section: "",
      age: "",
      address: "",
      guardian: "",
      guardianContact: "",
      englishPhonemic: "",
      filipinoPhonemic: "",
      mathProficiency: "",
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = formMethods;

  // Add new student
  const onSubmit = (data: any) => {
    const gradeNum = Number(data.grade);
    setStudents([
      ...students,
      {
        id: Date.now(),
        ...data,
        grade: isNaN(gradeNum) ? "" : gradeNum,
      },
    ]);
    reset();
    setShowModal(false);
  };

  // Delete individual student
  const handleDelete = (id: number) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // Delete all students
  const handleDeleteAll = () => {
    setStudents([]);
  };

  return (
    <div>
      {/* Top Bar: Total and Actions */}
      <SecondaryHeader title="Student List Table" />
      <div
        className="
        /* Mobile */
        flex flex-row justify-between items-center mb-4
        /* Tablet */
        sm:mb-6
        /* Desktop */
        md:mb-2
      "
      >
        <TertiaryHeader title={`Total: ${students.length}`} />
        <div className="flex gap-2">
          <UtilityButton small onClick={() => setShowModal(true)}>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <span className="hidden sm:inline">Add</span>
            </span>
          </UtilityButton>
          <UtilityButton small>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m17 8-5-5-5 5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              </svg>
              <span className="hidden sm:inline">Upload File</span>
            </span>
          </UtilityButton>
          {students.length > 0 && (
            <DangerButton small className="bg-red-100 text-red-700 border-red-400 hover:bg-red-200" onClick={handleDeleteAll}>
              Delete All
            </DangerButton>
          )}
        </div>
      </div>

      {/* Modal for Add Student Form */}
      <AddStudentModal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          reset();
        }}
        form={formMethods}
        onSubmit={onSubmit}
      />

      {/* Student Table Section */}
      <TableList
        columns={[
          { key: "no", title: "No#" },
          { key: "studentId", title: "Student ID" },
          { key: "name", title: "Full Name" },
          { key: "grade", title: "Grade" },
          { key: "section", title: "Section" },
        ]}
        data={students.map((student, idx) => ({
          ...student,
          no: idx + 1,
        }))}
        actions={(row: any) => (
          <>
            <UtilityButton small>See All</UtilityButton>
            <DangerButton small onClick={() => handleDelete(row.id)}>
              Delete
            </DangerButton>
          </>
        )}
        pageSize={10}
      />
    </div>
  );
}


