export interface IAttendancePresenceCheck {
  id: string;
  createdAt: string;
  updatedAt: string;
  
  status: "PENDING" | "CONFIRMED" | "EXPIRED";
  createdBy: "USER" | "SYSTEM";
  attendanceId: string;
  userId?: string;
  imageId?: string;
  }