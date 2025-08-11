import SecondaryHeader from "@/components/Texts/SecondaryHeader";
import TertiaryHeader from "@/components/Texts/TertiaryHeader";
import BodyLabel from "@/components/Texts/BodyLabel";
import DangerButton from "@/components/Buttons/DangerButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { UseFormReturn } from "react-hook-form";

interface AddStudentModalProps {
  show: boolean;
  onClose: () => void;
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
}

export default function AddStudentModal({ show, onClose, form, onSubmit }: AddStudentModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;
  if (!show) return null;
  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[95vh] overflow-y-auto">
        <div className="p-6">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-4 border-b pb-4">
            <SecondaryHeader title="Add New Student" />
            <button
              onClick={() => {
                onClose();
                reset();
              }}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <TertiaryHeader title="Personal Information" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Student ID*</label>
                  <input
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm"
                    placeholder="2023-0003"
                    {...register("studentId", { required: true })}
                  />
                  {errors.studentId && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div className="space-y-1">
                  <BodyLabel title="Full Name*" />
                  <input
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    placeholder="Juan Dela Cruz"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div className="space-y-1">
                  <BodyLabel title="Age*" />
                  <input
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    placeholder="10"
                    type="number"
                    min="5"
                    max="18"
                    {...register("age", { required: true, min: 5, max: 18 })}
                  />
                  {errors.age && <span className="text-red-500 text-xs">Required (5-18)</span>}
                </div>
              </div>
            </div>
            {/* Academic Information Section */}
            <div className="space-y-4">
              <TertiaryHeader title="Academic Information" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <BodyLabel title="Grade Level*" />
                  <select
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    {...register("grade", { required: true })}
                  >
                    <option value="" disabled>
                      Select grade
                    </option>
                    {[1, 2, 3, 4, 5, 6].map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                  {errors.grade && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div className="space-y-1">
                  <BodyLabel title="Section*" />
                  <select
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    {...register("section", { required: true })}
                  >
                    <option value="" disabled>
                      Select section
                    </option>
                    {["A", "B", "C", "D", "E", "F"].map((section) => (
                      <option key={section} value={section}>
                        {section}
                      </option>
                    ))}
                  </select>
                  {errors.section && <span className="text-red-500 text-xs">Required</span>}
                </div>
              </div>
            </div>
            {/* Contact Information Section */}
            <div className="space-y-4">
              <TertiaryHeader title="Contact Information" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1 md:col-span-1">
                  <BodyLabel title="Guardian*" />
                  <input
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    placeholder="Maria Dela Cruz"
                    {...register("guardian", { required: true })}
                  />
                  {errors.guardian && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div className="space-y-1 md:col-span-1">
                  <BodyLabel title="Contact Number*" />
                  <input
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    placeholder="09123456789"
                    type="tel"
                    {...register("guardianContact", { required: true })}
                  />
                  {errors.guardianContact && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div className="space-y-1 md:col-span-3">
                  <BodyLabel title="Address*" />
                  <input
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    placeholder="Brgy. Example, City, Province"
                    {...register("address", { required: true })}
                  />
                  {errors.address && <span className="text-red-500 text-xs">Required</span>}
                </div>
              </div>
            </div>
            {/* Assessment Section */}
            <div className="space-y-4">
              <TertiaryHeader title="Assessment Levels" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <BodyLabel title="English*" />
                  <select
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    {...register("englishPhonemic", { required: true })}
                  >
                    <option value="" disabled>
                      Select level
                    </option>
                    <option value="-">- (Not Assessed)</option>
                    <option value="Non-Reader">Non-Reader</option>
                    <option value="Syllable">Syllable</option>
                    <option value="Word">Word</option>
                    <option value="Sentence">Sentence</option>
                    <option value="Paragraph">Paragraph</option>
                  </select>
                  {errors.englishPhonemic && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div className="space-y-1">
                  <BodyLabel title="Filipino*" />
                  <select
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    {...register("filipinoPhonemic", { required: true })}
                  >
                    <option value="" disabled>
                      Select level
                    </option>
                    <option value="-">- (Not Assessed)</option>
                    <option value="Non-Reader">Non-Reader</option>
                    <option value="Syllable">Syllable</option>
                    <option value="Word">Word</option>
                    <option value="Sentence">Sentence</option>
                    <option value="Paragraph">Paragraph</option>
                  </select>
                  {errors.filipinoPhonemic && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div className="space-y-1">
                  <BodyLabel title="Math*" />
                  <select
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    {...register("mathProficiency", { required: true })}
                  >
                    <option value="" disabled>
                      Select level
                    </option>
                    <option value="-">- (Not Assessed)</option>
                    <option value="Non-Proficient">Non-Proficient</option>
                  </select>
                  {errors.mathProficiency && <span className="text-red-500 text-xs">Required</span>}
                </div>
              </div>
            </div>
            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <DangerButton
                type="button"
                onClick={() => {
                  onClose();
                  reset();
                }}
                className="px-4 py-2"
              >
                Cancel
              </DangerButton>
              <PrimaryButton type="submit" className="px-4 py-2">
                Save Student
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
