import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import * as XLSX from 'xlsx';
import AddStudentModal from "../Modals/AddStudentModal";
import ConfirmationModal from "@/components/Common/Modals/ConfirmationModal";
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
  const [showConfirmModal, setShowConfirmModal] = useState(false);
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

  // Delete individual student
  const handleDelete = (id: number) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // Delete all students
  const handleDeleteAll = () => {
    setStudents([]);
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

        const newStudents = jsonData.map((row: any, index: number) => ({
          id: Date.now() + index,
          studentId: row['Student ID'] || row['studentId'] || '',
          name: row['Name'] || row['name'] || '',
          grade: row['Grade'] || row['grade'] || '',
          section: row['Section'] || row['section'] || '',
          age: row['Age'] || row['age'] || '',
          address: row['Address'] || row['address'] || '',
          guardian: row['Guardian'] || row['guardian'] || '',
          guardianContact: row['Guardian Contact'] || row['guardianContact'] || '',
          englishPhonemic: row['English Phonemic'] || row['englishPhonemic'] || '',
          filipinoPhonemic: row['Filipino Phonemic'] || row['filipinoPhonemic'] || '',
          mathProficiency: row['Math Proficiency'] || row['mathProficiency'] || '',
        }));

        setStudents([...students, ...newStudents]);
        alert(`Successfully imported ${newStudents.length} students`);
      } catch (error) {
        alert('Error reading Excel file. Please check the format.');
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
      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={handleUploadCancel}
        onConfirm={handleUploadConfirm}
        title="Confirm File Upload"
        message="Are you sure you want to upload this Excel file? This will import student data."
        fileName={selectedFile?.name}
      />
    </div>
  );
}


