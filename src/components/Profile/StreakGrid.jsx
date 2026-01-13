import { useState } from "react";
import { useProfile } from "./ProfileContext";
import DayDetailsModal from "./DayDetailsModal";

export default function StreakGrid() {
  const {
    streakData,
    loadingStreak,
    enrolledCourses,
    selectedCourseId,
    setSelectedCourseId,
  } = useProfile();

  const [selectedDay, setSelectedDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  if (loadingStreak)
    return <p className="text-sm text-gray-400">Loading streak...</p>;

  if (!streakData)
    return <p className="text-sm text-gray-400">No streak data</p>;

  const { last30Days = [], currentStreakDays, courseTitle } = streakData;

  /* ---------------- MONTH CONTROLS ---------------- */

  const monthLabel = currentMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const changeMonth = (direction) => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + direction,
        1
      )
    );
  };

  /* ---------------- MONTH DAYS ---------------- */

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  // total days in month
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

  // map streak data by date number
  const streakMap = {};
  last30Days.forEach((day) => {
    const d = new Date(day.date);
    if (d.getMonth() === month && d.getFullYear() === year) {
      streakMap[d.getDate()] = day;
    }
  });

  /* ---------------- COLOR LOGIC ---------------- */

  const getColor = (day) => {
    if (!day || !day.isActiveDay) return "#E5E7EB";

    const progress = day.progressPercentage || 0;

    if (progress < 25) return "#FEF3C7";
    if (progress < 50) return "#FDE68A";
    if (progress < 75) return "#FBBF24";
    if (progress < 100) return "#F59E0B";
    return "#10B981";
  };

  return (
    <>
      {/* ---------------- HEADER ---------------- */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="font-semibold">{courseTitle}</p>
          <p className="text-xs text-gray-500">
            {currentStreakDays} day streak
          </p>
        </div>

        <select
          value={selectedCourseId || ""}
          onChange={(e) => setSelectedCourseId(Number(e.target.value))}
          className="border rounded px-2 py-1 text-sm bg-white"
        >
          {enrolledCourses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
      </div>

      {/* ---------------- MONTH NAV ---------------- */}
      <div className="mb-3 flex items-center justify-between">
        <button
          onClick={() => changeMonth(-1)}
          className="px-2 py-1 text-sm border rounded"
        >
          ◀
        </button>

        <p className="font-medium">{monthLabel}</p>

        <button
          onClick={() => changeMonth(1)}
          className="px-2 py-1 text-sm border rounded"
        >
          ▶
        </button>
      </div>

      {/* ---------------- GRID (MONTH DAYS) ---------------- */}
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: totalDaysInMonth }).map((_, index) => {
          const dateNumber = index + 1;
          const dayData = streakMap[dateNumber];

          return (
            <div
              key={dateNumber}
              onClick={() => dayData && setSelectedDay(dayData)}
              className={`h-12 rounded flex items-center justify-center text-xs font-semibold transition ${
                dayData ? "cursor-pointer hover:scale-105" : ""
              }`}
              style={{
                backgroundColor: getColor(dayData),
                color: dayData ? "#111827" : "#6B7280",
              }}
            >
              {dateNumber}
            </div>
          );
        })}
      </div>

      {/* ---------------- MODAL ---------------- */}
      {selectedDay && (
        <DayDetailsModal
          day={selectedDay}
          onClose={() => setSelectedDay(null)}
        />
      )}
    </>
  );
}
