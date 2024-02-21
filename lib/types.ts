export interface UserData {
  createdAt: string; // Assuming ISO 8601 date-time format
  email: string;
  fullCode: {
    css: string;
    html: string;
    js: string;
  };
  updatedAt: string; // Assuming ISO 8601 date-time format
  __v: number;
  _id: string;
}
