import SecondaryHeader from "@/components/Common/Texts/SecondaryHeader";
import TertiaryHeader from "@/components/Common/Texts/TertiaryHeader";
import BodyLabel from "@/components/Common/Texts/BodyLabel";
import DangerButton from "@/components/Common/Buttons/DangerButton";
import PrimaryButton from "@/components/Common/Buttons/PrimaryButton";
import { UseFormReturn } from "react-hook-form";
import { useState, useEffect } from "react";

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
    setValue,
    watch,
    formState: { errors },
  } = form;
  
  const [studentIdValue, setStudentIdValue] = useState("");
  const [contactValue, setContactValue] = useState("");
  
  // Watch the form values to update our local states
  const studentId = watch("studentId");
  const guardianContact = watch("guardianContact");

  // Auto-format Student ID (XXXX-XXXX)
  useEffect(() => {
    if (studentId) {
      const digits = studentId.replace(/\D/g, "");
      let formatted = digits;
      
      if (digits.length > 4) {
        formatted = `${digits.slice(0, 4)}-${digits.slice(4, 8)}`;
      } else if (digits.length === 4) {
        formatted = digits; // Don't add dash until user types 5th digit
      }
      
      setStudentIdValue(formatted);
      setValue("studentId", formatted, { shouldValidate: true });
    }
  }, [studentId, setValue]);
  
  // Auto-format Contact Number (XXXX-XXX-XXXX)
  useEffect(() => {
    if (guardianContact) {
      const digits = guardianContact.replace(/\D/g, "");
      let formatted = digits;
      
      if (digits.length > 4 && digits.length <= 7) {
        formatted = `${digits.slice(0, 4)}-${digits.slice(4, 7)}`;
      } else if (digits.length > 7) {
        formatted = `${digits.slice(0, 4)}-${digits.slice(4, 7)}-${digits.slice(7, 11)}`;
      }
      
      setContactValue(formatted);
      setValue("guardianContact", formatted, { shouldValidate: true });
    }
  }, [guardianContact, setValue]);

  // Reset form when modal is closed
  const handleClose = () => {
    onClose();
    reset();
    setStudentIdValue("");
    setContactValue("");
  };

  if (!show) return null;
  
  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[95vh] overflow-y-auto">
        <div className="p-6">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-4 border-b pb-4">
            <SecondaryHeader title="Add New Student" />
            <button
              onClick={handleClose}
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
                    value={studentIdValue}
                    onChange={(e) => {
                      const value = e.target.value;
                      setStudentIdValue(value);
                      setValue("studentId", value, { shouldValidate: true });
                    }}
                    onKeyDown={(e) => {
                      // Allow only numbers, dash, and navigation keys
                      if (!/[\d-]|Backspace|Delete|ArrowLeft|ArrowRight|Tab/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors.studentId && <span className="text-red-500 text-xs">{errors.studentId.message as string}</span>}
                </div>
                <div className="space-y-1">
                  <BodyLabel title="Full Name*" />
                  <input
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    placeholder="Surname, Firstname M.I."
                    {...register("name", { 
                      required: "Full name is required",
                    })}
                  />
                  {errors.name && <span className="text-red-500 text-xs">{errors.name.message as string}</span>}
                </div>
                <div className="space-y-1">
                  <BodyLabel title="Age*" />
                  <input
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    placeholder="10"
                    type="number"
                    min="5"
                    {...register("age", { 
                      required: "Age is required",
                      min: {
                        value: 5,
                        message: "Age must be at least 5 years old"
                      },
                      valueAsNumber: true
                    })}
                  />
                  {errors.age && <span className="text-red-500 text-xs">{errors.age.message as string}</span>}
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
                    {...register("grade", { required: "Grade level is required" })}
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
                  {errors.grade && <span className="text-red-500 text-xs">{errors.grade.message as string}</span>}
                </div>
                <div className="space-y-1">
                  <BodyLabel title="Section*" />
                  <select
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    {...register("section", { required: "Section is required" })}
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
                  {errors.section && <span className="text-red-500 text-xs">{errors.section.message as string}</span>}
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
                    placeholder="Surname, Firstname M.I."
                    {...register("guardian", { 
                      required: "Guardian name is required",
                    })}
                  />
                  {errors.guardian && <span className="text-red-500 text-xs">{errors.guardian.message as string}</span>}
                </div>
                <div className="space-y-1 md:col-span-1">
                  <BodyLabel title="Contact Number*" />
                  <input
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    placeholder="0912-345-6789"
                    value={contactValue}
                    onChange={(e) => {
                      const value = e.target.value;
                      setContactValue(value);
                      setValue("guardianContact", value, { shouldValidate: true });
                    }}
                    onKeyDown={(e) => {
                      // Allow only numbers, dash, and navigation keys
                      if (!/[\d-]|Backspace|Delete|ArrowLeft|ArrowRight|Tab/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors.guardianContact && <span className="text-red-500 text-xs">{errors.guardianContact.message as string}</span>}
                </div>
                <div className="space-y-1 md:col-span-3">
                  <BodyLabel title="Address*" />
                  <input
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    placeholder="Brgy. Example, City, Province"
                    {...register("address", { required: "Address is required" })}
                  />
                  {errors.address && <span className="text-red-500 text-xs">{errors.address.message as string}</span>}
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
                    {...register("englishPhonemic", { required: "English assessment level is required" })}
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
                  {errors.englishPhonemic && <span className="text-red-500 text-xs">{errors.englishPhonemic.message as string}</span>}
                </div>
                <div className="space-y-1">
                  <BodyLabel title="Filipino*" />
                  <select
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    {...register("filipinoPhonemic", { required: "Filipino assessment level is required" })}
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
                  {errors.filipinoPhonemic && <span className="text-red-500 text-xs">{errors.filipinoPhonemic.message as string}</span>}
                </div>
                <div className="space-y-1">
                  <BodyLabel title="Math*" />
                  <select
                    className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm "
                    {...register("mathProficiency", { required: "Math assessment level is required" })}
                  >
                    <option value="" disabled>
                      Select level
                    </option>
                    <option value="-">- (Not Assessed)</option>
                    <option value="Non-Proficient">Non-Proficient</option>
                  </select>
                  {errors.mathProficiency && <span className="text-red-500 text-xs">{errors.mathProficiency.message as string}</span>}
                </div>
              </div>
            </div>
            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <DangerButton
                type="button"
                onClick={handleClose}
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