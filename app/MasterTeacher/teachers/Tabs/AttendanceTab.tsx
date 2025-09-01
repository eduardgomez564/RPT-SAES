"use client";
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useState } from "react";
>>>>>>> 91ee4f8e40c7d584a635467f2d0fd6d832dc4e3e
import TableList from "@/components/Common/Tables/TableList";
import SecondaryHeader from "@/components/Common/Texts/SecondaryHeader";
import PrimaryButton from "@/components/Common/Buttons/PrimaryButton";
import UtilityButton from "@/components/Common/Buttons/UtilityButton";

<<<<<<< HEAD
interface AttendanceTabProps {
  teachers: any[];
}

export default function AttendanceTab({ teachers }: AttendanceTabProps) {
  const [view, setView] = useState("Week");
  const [isEditing, setIsEditing] = useState(false);
  const [attendanceData, setAttendanceData] = useState<any[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  // Generate days for current month
  const generateMonthDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days: any[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      days.push({ day, dayName, key: `${dayName} ${day}`, fullDate: date });
    }

    return days;
  };

  // Generate days for current week (Sunday to Saturday)
  const generateWeekDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();
    const startOfWeek = new Date(year, month, day - currentDate.getDay());
    const days: any[] = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      const dayNum = date.getDate();
      days.push({ day: dayNum, dayName, key: `${dayName} ${dayNum}`, fullDate: date });
    }

    return days;
  };

  const monthDays = generateMonthDays();
  const weekDays = generateWeekDays();

  const goToPreviousMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const goToNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const goToPreviousWeek = () => { const d = new Date(currentDate); d.setDate(currentDate.getDate() - 7); setCurrentDate(d); };
  const goToNextWeek = () => { const d = new Date(currentDate); d.setDate(currentDate.getDate() + 7); setCurrentDate(d); };

  // Initialize attendance when defaultTeachers, currentDate or view changes
  useEffect(() => {
    const daysToUse = view === "Month" ? monthDays : weekDays;
    const initial = teachers.map(t => {
      const record: any = { id: t.id, name: t.name };
      daysToUse.forEach(d => { record[d.key] = "unmarked"; });
      return record;
    });
    setAttendanceData(initial);
  }, [teachers, currentDate, view]);

  const toggleAttendance = (teacherId: number, day: string) => {
    setAttendanceData(prev => prev.map(row => {
      if (row.id === teacherId) {
        const current = row[day];
        let next;
        if (current === "unmarked") next = "present";
        else if (current === "present") next = "absent";
        else next = "unmarked";
        return { ...row, [day]: next };
      }
      return row;
=======
export default function AttendanceTab() {
  const [view, setView] = useState("Daily");
  const [isEditing, setIsEditing] = useState(false);
  const [attendanceData, setAttendanceData] = useState([
    { id: 1, name: "John Doe", "MON, 1": "present", "TUE, 2": "present", "WED, 3": "absent", "THU, 4": "present", "FRI, 5": "present" },
    { id: 2, name: "Jane Smith", "MON, 1": "present", "TUE, 2": "present", "WED, 3": "present", "THU, 4": "present", "FRI, 5": "present" },
    { id: 3, name: "Peter Jones", "MON, 1": "absent", "TUE, 2": "absent", "WED, 3": "present", "THU, 4": "present", "FRI, 5": "present" },
    { id: 4, name: "Mary Jane", "MON, 1": "present", "TUE, 2": "present", "WED, 3": "present", "THU, 4": "present", "FRI, 5": "absent" },
    { id: 5, name: "Sam Wilson", "MON, 1": "present", "TUE, 2": "present", "WED, 3": "present", "THU, 4": "present", "FRI, 5": "present" }
  ]);

  const toggleAttendance = (teacherId: number, day: string) => {
    setAttendanceData(prev => prev.map(teacher => {
      if (teacher.id === teacherId) {
        const currentStatus = teacher[day];
        const newStatus = currentStatus === "present" ? "absent" : "present";
        return { ...teacher, [day]: newStatus };
      }
      return teacher;
>>>>>>> 91ee4f8e40c7d584a635467f2d0fd6d832dc4e3e
    }));
  };

  const getAttendanceDisplay = (status: string, teacherId: number, day: string) => {
<<<<<<< HEAD
    const getStatusColor = (s: string) => {
      switch (s) {
        case "present": return "bg-green-500 text-white";
        case "absent": return "bg-red-500 text-white";
        case "unmarked": return "bg-gray-200 text-gray-500";
        default: return "bg-gray-300 text-gray-600";
      }
    };

    const getIcon = (s: string) => {
      switch (s) {
        case "present":
          return (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          );
        case "absent":
          return (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          );
        case "unmarked":
          return <div className="w-2 h-2 rounded-full bg-current opacity-40" />;
        default:
          return null;
      }
    };
=======
    const getStatusColor = (status: string) => {
      switch (status) {
        case "present": return "bg-green-100 text-green-800";
        case "absent": return "bg-red-100 text-red-800";
        default: return "bg-gray-100 text-gray-800";
      }
    };

    const icon = status === "present" ? (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    ) : (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    );
>>>>>>> 91ee4f8e40c7d584a635467f2d0fd6d832dc4e3e

    if (isEditing) {
      return (
        <button
          onClick={() => toggleAttendance(teacherId, day)}
<<<<<<< HEAD
          className={`w-8 h-8 rounded-md flex items-center justify-center transition-all hover:scale-110 hover:shadow-md ${getStatusColor(status)}`}
          title={status === "unmarked" ? "Click to mark present" : status === "present" ? "Click to mark absent" : "Click to clear"}
        >
          {getIcon(status)}
=======
          className={`p-2 rounded-full transition-all hover:scale-105 ${
            getStatusColor(status)
          }`}
        >
          {icon}
>>>>>>> 91ee4f8e40c7d584a635467f2d0fd6d832dc4e3e
        </button>
      );
    }

    return (
<<<<<<< HEAD
      <div className={`w-8 h-8 rounded-md flex items-center justify-center ${getStatusColor(status)}`}>
        {getIcon(status)}
      </div>
    );
  };

  const columns = [
    { 
      key: "name", 
      title: "NAME",
      headerClassName: "py-4" // Added padding to match TeacherTab header height
    },
    ...(view === "Month" ? monthDays : weekDays).map(day => ({
      key: day.key,
      title: `${day.dayName} ${day.day}`,
      render: (row: any) => getAttendanceDisplay(row[day.key], row.id, day.key),
      headerClassName: "py-4" // Added padding to match TeacherTab header height
    }))
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <button
            onClick={view === "Month" ? goToPreviousMonth : goToPreviousWeek}
            className="p-2 rounded-md bg-white border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <SecondaryHeader title={view === "Month" ? `${currentMonth} ${currentYear}` : `Week of ${currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`} />

          <button
            onClick={view === "Month" ? goToNextMonth : goToNextWeek}
            className="p-2 rounded-md bg-white border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setView("Week")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                view === "Week" ? "bg-white text-[#013300] shadow-sm" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setView("Month")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                view === "Month" ? "bg-white text-[#013300] shadow-sm" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Month
            </button>
          </div>

          {isEditing ? (
            <div className="flex gap-2">
=======
      <span className={`p-2 rounded-full inline-flex ${
        getStatusColor(status)
      }`}>
        {icon}
      </span>
    );
  };
  
  const columns = [
    { key: "name", title: "NAME" },
    { 
      key: "MON, 1", 
      title: "MON, 1",
      render: (row: any) => getAttendanceDisplay(row["MON, 1"], row.id, "MON, 1")
    },
    { 
      key: "TUE, 2", 
      title: "TUE, 2",
      render: (row: any) => getAttendanceDisplay(row["TUE, 2"], row.id, "TUE, 2")
    },
    { 
      key: "WED, 3", 
      title: "WED, 3",
      render: (row: any) => getAttendanceDisplay(row["WED, 3"], row.id, "WED, 3")
    },
    { 
      key: "THU, 4", 
      title: "THU, 4",
      render: (row: any) => getAttendanceDisplay(row["THU, 4"], row.id, "THU, 4")
    },
    { 
      key: "FRI, 5", 
      title: "FRI, 5",
      render: (row: any) => getAttendanceDisplay(row["FRI, 5"], row.id, "FRI, 5")
    }
  ];
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <SecondaryHeader title="July 2024" />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            {["Daily", "Weekly", "Monthly"].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-3 py-1.5 text-sm rounded-lg font-semibold transition-all duration-150 shadow-sm border border-transparent ${
                  view === v
                    ? "bg-[#013300] text-white shadow-md"
                    : "bg-gray-100 text-[#013300] hover:ring-2 hover:ring-[#013300] hover:scale-[1.03] hover:shadow-md"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          {isEditing ? (
            <div className="flex gap-2 ml-2">
>>>>>>> 91ee4f8e40c7d584a635467f2d0fd6d832dc4e3e
              <UtilityButton small onClick={() => setIsEditing(false)}>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cancel
                </span>
              </UtilityButton>
              <PrimaryButton small onClick={() => setIsEditing(false)}>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Save
                </span>
              </PrimaryButton>
            </div>
          ) : (
            <UtilityButton small onClick={() => setIsEditing(true)}>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span className="hidden sm:inline">Edit</span>
              </span>
            </UtilityButton>
          )}
        </div>
      </div>
<<<<<<< HEAD

      <div className="mb-2 flex items-center gap-6 text-sm text-gray-600">
        <span className="font-medium">Legend:</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <span>Unmarked</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span>Present</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span>Absent</span>
        </div>
      </div>

      {/* Add custom styling to the table header */}
      <div className="[&_th]:py-2">
        <TableList columns={columns} data={attendanceData} pageSize={10} />
      </div>
=======
      
      <TableList
        columns={columns}
        data={attendanceData}
        pageSize={10}
      />
>>>>>>> 91ee4f8e40c7d584a635467f2d0fd6d832dc4e3e
    </div>
  );
}