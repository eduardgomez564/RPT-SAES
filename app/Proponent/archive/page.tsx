import Sidebar from "@/components/Proponent/Sidebar";
import Header from "@/components/Proponent/Header";

export default function Archive() {
  return (
    <div
      className="
      /* Mobile */
      flex h-screen bg-white overflow-hidden
    "
    >
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div
        className="
        /* Mobile */
        flex-1 pt-16 flex flex-col overflow-hidden
      "
      >
        <Header title="Archive" />
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
            {/* Main Container */}
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
              {/* Empty container - will scroll if content exceeds height */}
              {/* Add your content here - it will scroll when needed */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
