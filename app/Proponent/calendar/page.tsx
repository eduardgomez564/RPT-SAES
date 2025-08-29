"use client";
import Sidebar from "@/components/Proponent/Sidebar";
import Header from "@/components/Proponent/Header";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AddScheduleModal from "./Modals/AddScheduleModal";
import ActivityDetailModal from "./Modals/ActivityDetailModal"; // Import the new component

interface Activity {
  id: number;
  title: string;
  day: string;
  roomNo: string;
  description: string;
  date: Date;
  end: Date;
  type: string;
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("month");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // React Hook Form setup
  const formMethods = useForm({
    defaultValues: {
      title: "",
      date: "",
      roomNo: "",
      description: "",
    },
  });
  const { reset, setValue } = formMethods;

  // Activities data in state
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: 1,
      title: "Math Class",
      day: "Wednesday",
      roomNo: "Room 204",
      description: "Algebra and Geometry lessons",
      date: new Date(2023, 10, 15, 9, 0),
      end: new Date(2023, 10, 15, 10, 30),
      type: "class",
    },
    {
      id: 2,
      title: "Faculty Meeting",
      day: "Thursday",
      roomNo: "Conference Room B",
      description: "Monthly faculty discussion",
      date: new Date(2023, 10, 16, 14, 0),
      end: new Date(2023, 10, 16, 15, 30),
      type: "meeting",
    },
    {
      id: 3,
      title: "Parent Conference",
      day: "Friday",
      roomNo: "Office 101",
      description: "Meeting with John Doe's parents",
      date: new Date(2023, 10, 17, 13, 0),
      end: new Date(2023, 10, 17, 14, 0),
      type: "appointment",
    },
    {
      id: 4,
      title: "Science Fair Prep",
      day: "Monday",
      roomNo: "Science Lab",
      description: "Preparing exhibits for the annual science fair",
      date: new Date(2023, 10, 20, 10, 0),
      end: new Date(2023, 10, 20, 12, 0),
      type: "event",
    },
  ]);

  // Navigation functions
  const prevPeriod = () => {
    const newDate = new Date(currentDate);
    if (view === "month") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setDate(newDate.getDate() - 7);
    }
    setCurrentDate(newDate);
  };

  const nextPeriod = () => {
    const newDate = new Date(currentDate);
    if (view === "month") {
      newDate.setMonth(newDate.getMonth() + 1);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Handle double click on date
  const handleDateDoubleClick = (date: Date) => {
    setSelectedDate(date);
    // Set the form value for the date field
    setValue("date", date.toLocaleDateString("en-CA")); 
    setShowAddModal(true);
  };

  // Add new schedule
// Add new schedule
const handleAddSchedule = (data: any) => {
  // Safely parse date in LOCAL time (avoid UTC shift issue)
  const [year, month, day] = data.date.split("-").map(Number);

  // Default start 9:00AM and end 10:00AM (you can adjust if needed)
  const startDate = new Date(year, month - 1, day, 9, 0, 0);
  const endDate = new Date(year, month - 1, day, 10, 0, 0);

  const newActivity: Activity = {
    id: activities.length > 0 ? Math.max(...activities.map((a) => a.id)) + 1 : 1,
    ...data,
    day: startDate.toLocaleDateString("en-US", { weekday: "long" }),
    date: startDate,
    end: endDate,
    type: "class",
  };

  setActivities([...activities, newActivity]);
  setShowAddModal(false);
  reset();
};


  // Delete schedule
  const handleDeleteSchedule = (id: number) => {
    setActivities(activities.filter((activity) => activity.id !== id));
    setSelectedActivity(null); // Close the modal after deletion
  };

  // Filter activities for the current view
  const getFilteredActivities = () => {
    const start = new Date(currentDate);
    const end = new Date(currentDate);

    if (view === "month") {
      start.setDate(1);
      end.setMonth(end.getMonth() + 1);
      end.setDate(0);
    } else if (view === "week") {
      const day = start.getDay();
      start.setDate(start.getDate() - day);
      end.setDate(start.getDate() + 6);
    }

    return activities.filter((activity) => activity.date >= start && activity.date <= end);
  };

  // Activity type colors
  const getActivityColor = (type: string) => {
    switch(type) {
      case "class": return "bg-blue-100 text-blue-800 border-blue-200";
      case "meeting": return "bg-green-100 text-green-800 border-green-200";
      case "appointment": return "bg-purple-100 text-purple-800 border-purple-200";
      case "event": return "bg-amber-100 text-amber-800 border-amber-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // Render the calendar based on view
  const renderCalendar = () => {
    if (view === "month") {
      return renderMonthView();
    } else {
      return renderWeekView();
    }
  };

  const renderMonthView = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const weeks = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      if (day > daysInMonth) break;

      const days = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || day > daysInMonth) {
          days.push(<div key={`empty-${i}-${j}`} className="h-20 p-1 border border-gray-100"></div>);
        } else {
          const currentDay = new Date(year, month, day);
          const dayActivities = activities.filter(
            (a) => a.date.getDate() === day && a.date.getMonth() === month && a.date.getFullYear() === year
          );

          days.push(
            <div
              key={`day-${day}`}
              className="h-20 p-1 border border-gray-100 overflow-hidden relative hover:bg-gray-50 transition-colors cursor-pointer"
              onDoubleClick={() => handleDateDoubleClick(currentDay)}
            >
              <div className="text-right text-sm font-medium text-gray-800 mb-1">
                {day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? (
                  <span className="inline-block w-6 h-6 bg-blue-600 text-white rounded-full text-center leading-6">
                    {day}
                  </span>
                ) : (
                  <span>{day}</span>
                )}
              </div>
              <div className="overflow-y-auto max-h-12 space-y-1">
                {dayActivities.slice(0, 2).map((activity) => (
                  <div
                    key={activity.id}
                    className={`text-xs p-1 rounded truncate cursor-pointer border ${getActivityColor(activity.type)}`}
                    onClick={() => setSelectedActivity(activity)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="truncate">{activity.title}</span>
                    </div>
                  </div>
                ))}
                {dayActivities.length > 2 && (
                  <div className="text-xs text-gray-500 text-center bg-gray-100 rounded p-1">
                    +{dayActivities.length - 2} more
                  </div>
                )}
              </div>
            </div>
          );
          day++;
        }
      }
      weeks.push(
        <div key={`week-${i}`} className="grid grid-cols-7">
          {days}
        </div>
      );
    }

    return (
      <div>
<div className="grid grid-cols-7 bg-gray-50 text-sm font-medium text-gray-700">
  {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
    <div key={`${day}-${index}`} className="p-2 text-center">
      {day}
    </div>
  ))}
</div>
        <div className="divide-y">{weeks}</div>
      </div>
    );
  };

  const renderWeekView = () => {
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const days = [];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (let i = 0; i < 7; i++) {
      const dayDate = new Date(startDate);
      dayDate.setDate(startDate.getDate() + i);

      const dayActivities = activities
        .filter(
          (a) =>
            a.date.getDate() === dayDate.getDate() &&
            a.date.getMonth() === dayDate.getMonth() &&
            a.date.getFullYear() === dayDate.getFullYear()
        )
        .sort((a, b) => a.date.getTime() - b.date.getTime());

      days.push(
        <div 
          key={`weekday-${i}`} 
          className="border-b border-gray-200"
          onDoubleClick={() => handleDateDoubleClick(dayDate)}
        >
          <div className="p-2 bg-gray-50">
            <div>
              <div className="font-medium text-gray-800 text-sm">{dayNames[i]}</div>
              <div className="text-xs text-gray-600">
                {dayDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                {dayDate.getDate() === new Date().getDate() &&
                  dayDate.getMonth() === new Date().getMonth() &&
                  dayDate.getFullYear() === new Date().getFullYear() && (
                    <span className="ml-2 text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded-full">Today</span>
                  )}
              </div>
            </div>
          </div>
          <div className="p-2 space-y-2">
            {dayActivities.length > 0 ? (
              dayActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="p-2 rounded-lg border-l-4 shadow-sm bg-white cursor-pointer hover:shadow-md transition-shadow"
                  style={{
                    borderLeftColor: activity.type === "class" ? "#2563EB" : activity.type === "meeting" ? "#059669" : "#7C3AED",
                  }}
                  onClick={() => setSelectedActivity(activity)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">{activity.title}</div>
                      <div className="text-xs text-gray-600 mt-1">
                        {activity.date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} -{" "}
                        {activity.end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{activity.roomNo}</div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteSchedule(activity.id);
                      }}
                      className="text-gray-400 hover:text-red-500 text-lg"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-400 py-4 text-sm">No activities scheduled</div>
            )}
          </div>
        </div>
      );
    }

    return <div className="divide-y">{days}</div>;
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/*---------------------------------Sidebar---------------------------------*/}
      <Sidebar />

      {/*---------------------------------Main Content---------------------------------*/}
      <div className="flex-1 pt-16 flex flex-col overflow-hidden">
        <Header title="Calendar" />
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 h-full sm:p-5 md:p-6">
            {/*---------------------------------Main Container---------------------------------*/}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full min-h-[400px] overflow-y-auto p-4 sm:p-5 md:p-6">
              {/* Calendar Controls */}
              <div className="flex flex-col space-y-3 mb-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="flex items-center space-x-1">
                    <button onClick={prevPeriod} className="p-2 rounded-md hover:bg-gray-100 text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button onClick={nextPeriod} className="p-2 rounded-md hover:bg-gray-100 text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
                    {view === "month"
                      ? currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })
                      : `Week of ${currentDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`}
                  </h2>
                  <button onClick={goToToday} className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700">
                    Today
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex bg-gray-100 rounded-md p-1">
                    <button
                      onClick={() => setView("month")}
                      className={`px-3 py-1.5 text-xs rounded-md sm:text-sm ${
                        view === "month" ? "bg-white text-gray-800 shadow-sm" : "text-gray-600 hover:text-gray-800"
                      }`}
                    >
                      Month
                    </button>
                    <button
                      onClick={() => setView("week")}
                      className={`px-3 py-1.5 text-xs rounded-md sm:text-sm ${
                        view === "week" ? "bg-white text-gray-800 shadow-sm" : "text-gray-600 hover:text-gray-800"
                      }`}
                    >
                      Week
                    </button>
                  </div>
                </div>
              </div>

              {/* Add Schedule Modal */}
              <AddScheduleModal
                show={showAddModal}
                onClose={() => {
                  setShowAddModal(false);
                  reset();
                }}
                form={formMethods}
                onSubmit={handleAddSchedule}
                selectedDate={selectedDate}
              />

              {/* Activity Detail Modal */}
              <ActivityDetailModal 
                activity={selectedActivity} 
                onClose={() => setSelectedActivity(null)} 
                onDelete={handleDeleteSchedule}
              />

              {/* Calendar View */}
              <div className="border rounded-lg overflow-hidden bg-white">
                {renderCalendar()}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}