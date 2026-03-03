export interface Bond {
  id: string;
  bondValue: string;
  bondDurationMonths: number;
  startDate: string;
  expiryDate: string;
  status: string;
  documentUrl: string;
  createdAt: string;

  employee: {
    id: string;
    employeeNumber: string;
    firstName: string;
    lastName: string;
    department: string;
    position: string;
  } | null;

  training: {
    id: string;
    title: string | null;
    provider: string | null;
    cost: string | null;
    startDate: string | null;
    endDate: string | null;
  } | null;
}
