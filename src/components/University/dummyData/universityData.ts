export interface AcademicStats {
  currentSemester: number;
  currentCGPA: number;
  enrolledCourses: number;
  pendingAssignments: number;
}

export interface Course {
  code: string;
  name: string;
  instructor: string;
  credits: number;
  schedule: string;
}

export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  type: "exam" | "assignment" | "lecture" | "test";
}

export interface QuickAction {
  name: string;
  icon: string;
  color: string;
}

export const mockAcademicStats: AcademicStats = {
  currentSemester: 7,
  currentCGPA: 3.85,
  enrolledCourses: 6,
  pendingAssignments: 3,
};

export const mockCourses: Course[] = [
  {
    code: "CSE-401",
    name: "Software Engineering",
    instructor: "Dr. Ahmed Rahman",
    credits: 3,
    schedule: "Sun, Tue - 10:00 AM",
  },
  {
    code: "CSE-403",
    name: "Database Management",
    instructor: "Prof. Sarah Khan",
    credits: 3,
    schedule: "Mon, Wed - 2:00 PM",
  },
  {
    code: "CSE-405",
    name: "Machine Learning",
    instructor: "Dr. Mohammad Ali",
    credits: 3,
    schedule: "Tue, Thu - 11:00 AM",
  },
  {
    code: "CSE-407",
    name: "Computer Networks",
    instructor: "Prof. Fatima Sheikh",
    credits: 3,
    schedule: "Wed, Fri - 9:00 AM",
  },
  {
    code: "ENG-401",
    name: "Technical Writing",
    instructor: "Ms. Ayesha Begum",
    credits: 2,
    schedule: "Thu - 3:00 PM",
  },
  {
    code: "MATH-401",
    name: "Numerical Analysis",
    instructor: "Dr. Karim Hassan",
    credits: 3,
    schedule: "Fri, Sat - 1:00 PM",
  },
];

export const mockEvents: Event[] = [
  {
    title: "Midterm Exam - Software Engineering",
    date: "March 15, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Room 301",
    type: "exam",
  },
  {
    title: "Assignment Due - Database Project",
    date: "March 18, 2024",
    time: "11:59 PM",
    location: "Online Submission",
    type: "assignment",
  },
  {
    title: "Guest Lecture - AI in Healthcare",
    date: "March 20, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Auditorium",
    type: "lecture",
  },
  {
    title: "Lab Test - Computer Networks",
    date: "March 22, 2024",
    time: "9:00 AM - 11:00 AM",
    location: "Lab 2",
    type: "test",
  },
];

export const mockQuickActions: QuickAction[] = [
  { name: "Course Materials", icon: "📚", color: "bg-blue-500" },
  { name: "Grade Portal", icon: "📊", color: "bg-green-500" },
  { name: "Library Resources", icon: "📖", color: "bg-purple-500" },
  { name: "Student Services", icon: "🎓", color: "bg-orange-500" },
];
