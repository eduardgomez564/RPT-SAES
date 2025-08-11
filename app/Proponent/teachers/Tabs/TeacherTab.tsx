import { useState } from "react";
import { useForm } from "react-hook-form";
import AddTeacherModal from "../Modals/AddTeacherModal";
// Button Components
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import UtilityButton from "@/components/Buttons/UtilityButton";
import DangerButton from "@/components/Buttons/DangerButton";
import TableList from "@/components/Tables/TableList";
// Text Components
import SecondaryHeader from "@/components/Texts/SecondaryHeader";
import TertiaryHeader from "@/components/Texts/TertiaryHeader";
import BodyText from "@/components/Texts/BodyText";
import BodyLabel from "@/components/Texts/BodyLabel";

export default function TeacherTab() {
  const [teachers, setTeachers] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);

  // React Hook Form setup
  const formMethods = useForm({
    defaultValues: {
      teacherId: "",
      name: "",
      grade: "",
      subject: "",
      email: "",
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = formMethods;

  // Add new teacher
  const onSubmit = (data: any) => {
    const gradeNum = Number(data.grade);
    setTeachers([
      ...teachers,
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
    setTeachers(teachers.filter((s) => s.id !== id));
  };

  // Delete all students
  const handleDeleteAll = () => {
    setTeachers([]);
  };

  return (
    <div>
      {/* Top Bar: Total and Actions */}
      <SecondaryHeader title="Teacher List Table" />
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
        <TertiaryHeader title={`Total: ${teachers.length}`} />
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
          {teachers.length > 0 && (
            <DangerButton small className="bg-red-100 text-red-700 border-red-400 hover:bg-red-200" onClick={handleDeleteAll}>
              Delete All
            </DangerButton>
          )}
        </div>
      </div>
      {/* Add Teacher Modal */}
      <AddTeacherModal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          reset();
        }}
        form={formMethods}
        onSubmit={onSubmit}
      />

      {/* Table */}
      <TableList
        columns={[
          { key: "no", title: "No#" },
          { key: "teacherId", title: "Teacher ID" },
          { key: "name", title: "Name" },
          { key: "grade", title: "Grade" },
          { key: "subject", title: "Subject" },
          { key: "email", title: "Email" },
        ]}
        data={teachers.map((teacher, idx) => ({
          ...teacher,
          no: idx + 1,
        }))}
        actions={(row: any) => (
          <>
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
