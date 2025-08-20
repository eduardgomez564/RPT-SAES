"use client";
import Sidebar from "@/components/Proponent/Sidebar";
import Header from "@/components/Proponent/Header";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AddScheduleModal from "./Modals/AddScheduleModal";
import UtilityButton from "@/components/Common/Buttons/UtilityButton";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("month");
  const [showAddModal, setShowAddModal] = useState(false);

  // React Hook Form setup
  const formMethods = useForm({
    defaultValues: {
      title: "",
      date: "",
      roomNo: "",
      description: "",
    },
  });
  const { reset } = formMethods;

  // Activities data in state
  const [activities, setActivities] = useState([
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

  // Add new schedule
  const handleAddSchedule = (data: any) => {
    const newActivity = {
      id: activities.length > 0 ? Math.max(...activities.map((a) => a.id)) + 1 : 1,
      ...data,
      date: new Date(data.date), // Use selected date
      end: new Date(new Date(data.date).getTime() + 60 * 60 * 1000), // Default 1 hour duration
      type: "class",
    };

    setActivities([...activities, newActivity]);
    setShowAddModal(false);
    reset();
  };

  // Delete schedule
  const handleDeleteSchedule = (id: number) => {
    setActivities(activities.filter((activity) => activity.id !== id));
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

  // Render the calendar based on view
  const renderCalendar = () => {
    if (view === "month") {
      return renderMonthView();
    } else if (view === "week") {
      return renderWeekView();
    } else {
      return renderDayView();
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
          days.push(<div key={`empty-${i}-${j}`} className="h-24 p-1 border border-gray-100"></div>);
        } else {
          const currentDay = new Date(year, month, day);
          const dayActivities = activities.filter(
            (a) => a.date.getDate() === day && a.date.getMonth() === month && a.date.getFullYear() === year
          );

          days.push(
            <div
              key={`day-${day}`}
              className="
              /* Mobile */
              h-20 p-1 border border-gray-100 overflow-hidden
              
              /* Tablet */
              sm:h-24
            "
            >
              <div className="text-right text-base font-medium text-gray-800">
                {day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? (
                  <span
                    className="inline-block w-6 h-6 bg-blue-600 text-white rounded-full text-center leading-6
                    /* Tablet */
                    sm:w-7 sm:h-7 sm:leading-7
                  "
                  >
                    {day}
                  </span>
                ) : (
                  <span
                    className="inline-block w-6 h-6 text-center leading-6
                    /* Tablet */
                    sm:w-7 sm:h-7 sm:leading-7
                  "
                  >
                    {day}
                  </span>
                )}
              </div>
              <div
                className="overflow-y-auto max-h-12
                /* Tablet */
                sm:max-h-16
              "
              >
                {dayActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className={`text-xs p-0.5 mb-0.5 rounded truncate
                      /* Tablet */
                      sm:text-sm sm:p-1 sm:mb-1
                      ${
                        activity.type === "class"
                          ? "bg-blue-100 text-blue-900 border border-blue-200"
                          : activity.type === "meeting"
                            ? "bg-green-100 text-green-900 border border-green-200"
                            : "bg-purple-100 text-purple-900 border border-purple-200"
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{activity.title}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteSchedule(activity.id);
                        }}
                        className="text-xs text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
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
        <div className="grid grid-cols-7 bg-gray-50">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="p-2 text-center font-medium text-gray-700">
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
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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
        <div key={`weekday-${i}`} className="border-b border-gray-200">
          <div className="p-2 bg-gray-50">
            <div className="font-medium text-gray-800">{dayNames[i]}</div>
            <div className="text-sm text-gray-600">
              {dayDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              {dayDate.getDate() === new Date().getDate() &&
                dayDate.getMonth() === new Date().getMonth() &&
                dayDate.getFullYear() === new Date().getFullYear() && (
                  <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">Today</span>
                )}
            </div>
          </div>
          <div className="p-2">
            {dayActivities.length > 0 ? (
              dayActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="
                    /* Mobile */
                    mb-2 p-1 rounded border-l-4 shadow-sm bg-white relative
                    
                    /* Tablet */
                    sm:p-2
                  "
                  style={{
                    borderLeftColor: activity.type === "class" ? "#2563EB" : activity.type === "meeting" ? "#059669" : "#7C3AED",
                  }}
                >
                  <button
                    onClick={() => handleDeleteSchedule(activity.id)}
                    className="absolute top-1 right-1 text-xs text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                  <div className="font-medium text-gray-900">{activity.title}</div>
                  <div className="text-sm text-gray-600">
                    {activity.date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} -
                    {activity.end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{activity.roomNo || activity.description || ""}</div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-4">No activities</div>
            )}
          </div>
        </div>
      );
    }

    return <div className="divide-y">{days}</div>;
  };

  const renderDayView = () => {
    const dayActivities = activities
      .filter(
        (a) =>
          a.date.getDate() === currentDate.getDate() &&
          a.date.getMonth() === currentDate.getMonth() &&
          a.date.getFullYear() === currentDate.getFullYear()
      )
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    return (
      <div>
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="font-medium text-lg text-gray-900">
            {currentDate.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </h3>
        </div>
        <div className="divide-y">
          {dayActivities.length > 0 ? (
            dayActivities.map((activity) => (
              <div
                key={activity.id}
                className="
                /* Mobile */
                p-3 hover:bg-gray-50 relative
                
                /* Tablet */
                sm:p-4
              "
              >
                <button
                  onClick={() => handleDeleteSchedule(activity.id)}
                  className="absolute top-1 right-1 text-xs text-red-500 hover:text-red-700
                    /* Tablet */
                    sm:top-2 sm:right-2
                  "
                >
                  ×
                </button>
                <div className="flex">
                  <div
                    className="
                    /* Mobile */
                    w-16
                    
                    /* Tablet */
                    sm:w-20
                  "
                  >
                    <div className="font-medium text-gray-900">
                      {activity.date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                    <div className="text-sm text-gray-600">
                      {activity.end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{activity.title}</div>
                    <div className="text-sm text-gray-600">
                      {activity.roomNo && `Room: ${activity.roomNo}`}
                      {activity.description && (
                        <div className="text-xs text-gray-500 mt-1">{activity.description}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-8">No activities scheduled for today</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/*---------------------------------Sidebar---------------------------------*/}
      <Sidebar />

      {/*---------------------------------Main Content---------------------------------*/}
      <div
        className="
        /* Mobile */
        flex-1 pt-16 flex flex-col overflow-hidden
      "
      >
        <Header title="Calendar" />
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
              bg-white rounded-lg shadow-md border border-gray-200 h-full min-h-[400px] 
              overflow-y-auto p-4
              
              /* Tablet */
              sm:p-5
              
              /* Desktop */
              md:p-6
            "
            >
              {/* Calendar Controls */}
              <div
                className="
                /* Mobile */
                flex flex-col space-y-2 mb-4
                
                /* Tablet */
                sm:flex-row sm:items-center sm:justify-between sm:space-y-0
              "
              >
                <div
                  className="flex items-center space-x-2
                  /* Tablet */
                  sm:space-x-4
                "
                >
                  <button onClick={prevPeriod} className="p-2 rounded hover:bg-gray-100 text-gray-700 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <h2
                    className="
                    /* Mobile */
                    text-lg font-semibold text-gray-800
                    
                    /* Tablet */
                    sm:text-xl
                  "
                  >
                    {view === "month"
                      ? currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })
                      : view === "week"
                        ? `Week of ${currentDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`
                        : currentDate.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                  </h2>
                  <button onClick={nextPeriod} className="p-2 rounded hover:bg-gray-100 text-gray-700 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button onClick={goToToday} className="ml-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded text-gray-700">
                    Today
                  </button>
                </div>
                <div
                  className="flex space-x-1
                  /* Tablet */
                  sm:space-x-2
                "
                >
                  <button
                    onClick={() => setView("month")}
                    className={`px-2 py-1 text-xs rounded
                      /* Tablet */
                      sm:px-3 sm:text-sm
                      ${view === "month" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}
                  >
                    Month
                  </button>
                  <button
                    onClick={() => setView("week")}
                    className={`px-2 py-1 text-xs rounded
                      /* Tablet */
                      sm:px-3 sm:text-sm
                      ${view === "week" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}
                  >
                    Week
                  </button>
                  <button
                    onClick={() => setView("day")}
                    className={`px-2 py-1 text-xs rounded
                      /* Tablet */
                      sm:px-3 sm:text-sm
                      ${view === "day" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}
                  >
                    Day
                  </button>
                  <UtilityButton small onClick={() => setShowAddModal(true)}>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                      <span className="hidden sm:inline">Add Schedule</span>
                    </span>
                  </UtilityButton>
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
              />

              {/* Calendar View */}
              <div className="border rounded-lg overflow-hidden">{renderCalendar()}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


