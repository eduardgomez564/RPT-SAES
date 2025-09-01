import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import * as XLSX from 'xlsx';
import AddStudentModal from "../Modals/AddStudentModal";
import StudentDetailModal from "../Modals/StudentDetailModal"; // Import the modal
import ConfirmationModal from "@/components/Common/Modals/ConfirmationModal";
import DeleteConfirmationModal from "@/components/Common/Modals/DeleteConfirmationModal";
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

interface StudentTabProps {
  students: any[];
  setStudents: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function StudentTab({ students, setStudents }: StudentTabProps) {
  const [showModal, setShowModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false); // State for detail modal
  const [selectedStudent, setSelectedStudent] = useState<any>(null); // State for selected student
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<number | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  // Delete individual student (open modal)
  const handleDelete = (id: number) => {
    setPendingDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (pendingDeleteId == null) return;
    setStudents(students.filter((s) => s.id !== pendingDeleteId));
    setPendingDeleteId(null);
    setShowDeleteModal(false);
  };

  // Delete all students (open modal)
  const handleDeleteAll = () => {
    setPendingDeleteId(-1);
    setShowDeleteModal(true);
  };

  // Handle viewing student details
  const handleViewDetails = (student: any) => {
    setSelectedStudent(student);
    setShowDetailModal(true);
  };

  // Handle file selection
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validTypes = ['.xlsx', '.xls'];
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    if (!validTypes.includes(fileExtension)) {
      alert('Please upload only Excel files (.xlsx or .xls)');
      return;
    }

    setSelectedFile(file);
    setShowConfirmModal(true);
  };

  // Handle file upload confirmation
  const handleUploadConfirm = () => {
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const newStudents = jsonData.map((row: any, index: number) => {
            const studentName = `${row.FIRSTNAME || ''} ${row.MIDDLENAME || ''} ${row.SURNAME || ''}`.trim();
            const guardianName = `${row["GUARDIAN'S FIRSTNAME"] || ''} ${row["GUARDIAN'S MIDDLENAME"] || ''} ${row["GUARDIAN'S SURNAME"] || ''}`.trim();
            return {
                id: Date.now() + index,
                studentId: row['STUDENT ID'] || '',
                name: studentName,
                grade: row.GRADE || '',
                section: row.SECTION || '',
                age: row.AGE || '',
                address: row.ADDRESS || '',
                guardian: guardianName,
                guardianContact: row['CONTACT NUMBER'] || '',
                englishPhonemic: '', // Not in the excel file
                filipinoPhonemic: '', // Not in the excel file
                mathProficiency: '', // Not in the excel file
            }
        });

        setStudents([...students, ...newStudents]);
        alert(`Successfully imported ${newStudents.length} students`);
      } catch (error) {
        console.error(error);
        alert('Error reading Excel file. Please check the format and column headers.');
      }
    };
    reader.readAsArrayBuffer(selectedFile);
    setSelectedFile(null);
    setShowConfirmModal(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadCancel = () => {
    setSelectedFile(null);
    setShowConfirmModal(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
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
          <UtilityButton small onClick={() => fileInputRef.current?.click()}>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m17 8-5-5-5 5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              </svg>
              <span className="hidden sm:inline">Upload File</span>
            </span>
          </UtilityButton>
          <input
            ref={fileInputRef}
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFileSelect}
            className="hidden"
          />
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

      {/* Student Detail Modal */}
      <StudentDetailModal
        show={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        student={selectedStudent}
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
            <UtilityButton small onClick={() => handleViewDetails(row)}>
              See All
            </UtilityButton>
            <DangerButton small onClick={() => handleDelete(row.id)}>
              Delete
            </DangerButton>
          </>
        )}
        pageSize={10}
      />
      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={handleUploadCancel}
        onConfirm={handleUploadConfirm}
        title="Confirm File Upload"
        message="Are you sure you want to upload this Excel file? This will import student data."
        fileName={selectedFile?.name}
      />
      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setPendingDeleteId(null);
        }}
        onConfirm={() => {
          if (pendingDeleteId === -1) {
            setStudents([]);
            setPendingDeleteId(null);
            setShowDeleteModal(false);
            return;
          }
          confirmDelete();
        }}
        title={pendingDeleteId === -1 ? "Confirm Delete All" : "Confirm Delete"}
        message={pendingDeleteId === -1 ? "Are you sure you want to delete ALL students? This action cannot be undone." : "Are you sure you want to delete this student?"}
        itemName={pendingDeleteId && pendingDeleteId > 0 ? students.find(s => s.id === pendingDeleteId)?.name : undefined}
      />
    </div>
  );
}