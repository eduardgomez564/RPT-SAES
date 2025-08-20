import TeacherSidebar from "@/components/Teacher/Sidebar";
import TeacherHeader from "@/components/Teacher/Header";
// Button Components
import PrimaryButton from "@/components/Common/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Common/Buttons/SecondaryButton";
import UtilityButton from "@/components/Common/Buttons/UtilityButton";
import DangerButton from "@/components/Common/Buttons/DangerButton";
// Text Components
import SecondaryHeader from "@/components/Common/Texts/SecondaryHeader";
import TertiaryHeader from "@/components/Common/Texts/TertiaryHeader";
import BodyText from "@/components/Common/Texts/BodyText";

export default function Archive() {
  return (
    <div
      className="
      /* Mobile */
      flex h-screen bg-white overflow-hidden
    "
    >
      {/*---------------------------------Sidebar---------------------------------*/}
      <TeacherSidebar />
      {/*---------------------------------Main Content---------------------------------*/}
      <div
        className="
        /* Mobile */
        flex-1 pt-16 flex flex-col overflow-hidden
      "
      >
        <TeacherHeader title="Report" />
        <main className="flex-1 overflow-y-auto">
          <div
            className="
            /* Mobile */
            p-4 h-full
            /* Tablet */
            sm:p-5
            /* Desktop */
            md:p-6
          "
          >
            {/*---------------------------------Main Container---------------------------------*/}
            <div
              className="
              /* Mobile */
              bg-white rounded-lg shadow-md border border-gray-200 h-full min-h-[400px] overflow-y-auto p-4
              /* Tablet */
              sm:p-5
              /* Desktop */
              md:p-6
            "
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold text-gray-800">Grade Three - English Progress Report</h1>
                <div className="flex gap-2">
                  <UtilityButton small>Upload</UtilityButton>
                  <PrimaryButton small>Edit</PrimaryButton>
                  <button className="p-2 text-gray-600 hover:text-gray-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto border border-gray-300">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th rowSpan={2} className="border border-gray-300 p-3 text-left font-semibold">Name of Learners</th>
                      <th rowSpan={2} className="border border-gray-300 p-3 text-left font-semibold">Section</th>
                      <th rowSpan={2} className="border border-gray-300 p-3 text-center font-semibold">Pre-Assessment<br/>September</th>
                      <th colSpan={3} className="border border-gray-300 p-3 text-center font-semibold">School-Based Reading Assessment</th>
                      <th rowSpan={2} className="border border-gray-300 p-3 text-center font-semibold">Post-Assessment<br/>March</th>
                      <th rowSpan={2} className="border border-gray-300 p-3 text-center font-semibold">Ending<br/>Numeracy Profile</th>
                    </tr>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-center font-semibold">October</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold">December</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold">Mid-Year<br/>Assessment<br/>February</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3">Agustia, Aiden Richard Paloma</td>
                      <td className="border border-gray-300 p-3 text-center">III-Crimson</td>
                      <td className="border border-gray-300 p-3 text-center">0</td>
                      <td className="border border-gray-300 p-3 text-center">WR</td>
                      <td className="border border-gray-300 p-3 text-center">WR</td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3">Romano, Gabriel Luis</td>
                      <td className="border border-gray-300 p-3 text-center">III-Crimson</td>
                      <td className="border border-gray-300 p-3 text-center">0</td>
                      <td className="border border-gray-300 p-3 text-center">WR</td>
                      <td className="border border-gray-300 p-3 text-center">WR</td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3">Sanchez, Eithan Jhara, Encinares</td>
                      <td className="border border-gray-300 p-3 text-center">III-Violet</td>
                      <td className="border border-gray-300 p-3 text-center">0</td>
                      <td className="border border-gray-300 p-3 text-center">WR</td>
                      <td className="border border-gray-300 p-3 text-center">WR</td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3">Ano, Sebastian Renz, Tabianan</td>
                      <td className="border border-gray-300 p-3 text-center">III-White</td>
                      <td className="border border-gray-300 p-3 text-center">5</td>
                      <td className="border border-gray-300 p-3 text-center">WR</td>
                      <td className="border border-gray-300 p-3 text-center">WR</td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3">Mauricio, Christian Habonero</td>
                      <td className="border border-gray-300 p-3 text-center">III-Yellow</td>
                      <td className="border border-gray-300 p-3 text-center">11</td>
                      <td className="border border-gray-300 p-3 text-center">WR</td>
                      <td className="border border-gray-300 p-3 text-center">WR</td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3">Morales, Nyhl Zion</td>
                      <td className="border border-gray-300 p-3 text-center">III-Blue</td>
                      <td className="border border-gray-300 p-3 text-center">16</td>
                      <td className="border border-gray-300 p-3 text-center">SylR</td>
                      <td className="border border-gray-300 p-3 text-center">WR</td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                      <td className="border border-gray-300 p-3 text-center"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <p className="font-semibold mb-2">Legend:</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p>NR - Non-Reader</p>
                    <p>SylR - Syllable Reader</p>
                  </div>
                  <div>
                    <p>WR - Word Reader</p>
                    <p>PhR - Phrase Reader</p>
                    <p>SR - Sentence Reader</p>
                    <p>StoryR - Story Reader</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


