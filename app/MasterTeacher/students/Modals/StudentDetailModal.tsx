import SecondaryHeader from "@/components/Common/Texts/SecondaryHeader";
import BodyLabel from "@/components/Common/Texts/BodyLabel";
import PrimaryButton from "@/components/Common/Buttons/PrimaryButton";

interface StudentDetailModalProps {
  show: boolean;
  onClose: () => void;
  student: any;
}

export default function StudentDetailModal({ show, onClose, student }: StudentDetailModalProps) {
  if (!show || !student) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[95vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <SecondaryHeader title="Student Details" />
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <BodyLabel title="Student ID" />
            <p className="mb-4">{student.studentId || "-"}</p>

            <BodyLabel title="Full Name" />
            <p className="mb-4">{student.name || "-"}</p>

            <BodyLabel title="Age" />
            <p className="mb-4">{student.age || "-"}</p>

            <BodyLabel title="Grade" />
            <p className="mb-4">{student.grade || "-"}</p>

            <BodyLabel title="Section" />
            <p className="mb-4">{student.section || "-"}</p>
          </div>

          <div>
            <BodyLabel title="Address" />
            <p className="mb-4">{student.address || "-"}</p>

            <BodyLabel title="Guardian" />
            <p className="mb-4">{student.guardian || "-"}</p>

            <BodyLabel title="Guardian Contact" />
            <p className="mb-4">{student.guardianContact || "-"}</p>

            <BodyLabel title="English Phonemic" />
            <p className="mb-4">{student.englishPhonemic || "-"}</p>

            <BodyLabel title="Filipino Phonemic" />
            <p className="mb-4">{student.filipinoPhonemic || "-"}</p>

            <BodyLabel title="Math Proficiency" />
            <p className="mb-4">{student.mathProficiency || "-"}</p>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <PrimaryButton onClick={onClose}>Close</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
