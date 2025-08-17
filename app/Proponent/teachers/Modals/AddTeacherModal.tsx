import SecondaryHeader from "@/components/Common/Texts/SecondaryHeader";
import TertiaryHeader from "@/components/Common/Texts/TertiaryHeader";
import DangerButton from "@/components/Common/Buttons/DangerButton";
import PrimaryButton from "@/components/Common/Buttons/PrimaryButton";
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
                  placeholder="2023-0001"
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value.replace(/[^0-9-]/g, '');
                  }}
                  {...register("teacherId", { 
                    required: "Teacher ID is required",
                    pattern: {
                      value: /^\d{4}-\d{4}$/,
                      message: "Teacher ID must be in format: 0000-0000"
                    }
                  })}
                />
                {errors.teacherId && <span className="text-red-500 text-xs">{errors.teacherId.message as string}</span>}
              </div>
              <div className="space-y-1">
                <TertiaryHeader title="Full Name" />
                <input
                  className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm"
                  placeholder="Surname, Firstname, M.I."
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value.replace(/[^A-Za-z\s,.-]/g, '');
                  }}
                  {...register("name", { 
                    required: "Full Name is required",
                    pattern: {
                      value: /^[A-Za-z\s,.-]+$/,
                      message: "Name must contain only letters, spaces, commas, periods, and hyphens"
                    }
                  })}
                />
                {errors.name && <span className="text-red-500 text-xs">{errors.name.message as string}</span>}
              </div>
              <div className="space-y-1">
                <TertiaryHeader title="Grade" />
                <select
                  className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm"
                  {...register("grade", { required: "Grade is required" })}
                >
                  <option value="" disabled className="rounded-md">Select grade</option>
                  <option value="1" className="rounded-md">1</option>
                  <option value="2" className="rounded-md">2</option>
                  <option value="3" className="rounded-md">3</option>
                  <option value="4" className="rounded-md">4</option>
                  <option value="5" className="rounded-md">5</option>
                  <option value="6" className="rounded-md">6</option>
                </select>
                {errors.grade && <span className="text-red-500 text-xs">{errors.grade.message as string}</span>}
              </div>
              <div className="space-y-1">
                <TertiaryHeader title="Subject" />
                <select
                  className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm"
                  {...register("subject", { required: "Subject is required" })}
                >
                  <option value="" disabled className="rounded-md">Select subject</option>
                  <option value="Math" className="rounded-md">Math</option>
                  <option value="English" className="rounded-md">English</option>
                  <option value="Filipino" className="rounded-md">Filipino</option>
                </select>
                {errors.subject && <span className="text-red-500 text-xs">{errors.subject.message as string}</span>}
              </div>
              <div className="space-y-1 md:col-span-2">
                <TertiaryHeader title="Email" />
                <input
                  className="w-full bg-white border border-gray-300 text-black rounded-md px-3 py-2 text-sm"
                  placeholder="juandelacruz@email.com"
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address"
                    }
                  })}
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email.message as string}</span>}
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


