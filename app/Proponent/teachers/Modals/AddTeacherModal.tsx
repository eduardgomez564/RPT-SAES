import SecondaryHeader from "@/components/Texts/SecondaryHeader";
import TertiaryHeader from "@/components/Texts/TertiaryHeader";
import DangerButton from "@/components/Buttons/DangerButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { UseFormReturn } from "react-hook-form";

interface AddTeacherModalProps {
  show: boolean;
  onClose: () => void;
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
}

export default function AddTeacherModal({ show, onClose, form, onSubmit }: AddTeacherModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;
  if (!show) return null;
  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-xl max-h-[95vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4 border-b pb-4">
            <SecondaryHeader title="Add New Teacher" />
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Close modal">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <TertiaryHeader title="Teacher ID" />
                <input
                  className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm"
                  placeholder="e.g. 2023-0001"
                  {...register("teacherId", { required: "Teacher ID is required" })}
                />
              </div>
              <div className="space-y-1">
                <TertiaryHeader title="Full Name" />
                <input
                  className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm"
                  placeholder="e.g. Juan Dela Cruz"
                  {...register("name", { required: "Full Name is required" })}
                />
              </div>
              <div className="space-y-1">
                <TertiaryHeader title="Grade" />
                <input
                  className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm"
                  placeholder="e.g. 3"
                  {...register("grade", { required: "Grade is required" })}
                />
              </div>
              <div className="space-y-1">
                <TertiaryHeader title="Subject" />
                <input
                  className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm"
                  placeholder="e.g. Math"
                  {...register("subject", { required: "Subject is required" })}
                />
              </div>
              <div className="space-y-1 md:col-span-2">
                <TertiaryHeader title="Email" />
                <input
                  className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm"
                  placeholder="e.g. juan@email.com"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-4 border-t">
              <DangerButton type="button" onClick={onClose} className="px-4 py-2">
                Cancel
              </DangerButton>
              <PrimaryButton type="submit" className="px-4 py-2">
                Save Teacher
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
