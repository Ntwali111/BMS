import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Employee } from "../../employees/entities/employee.entity";
import { Training } from "../../trainings/entities/training.entity";
import { User } from "../../users/entities/user.entity";

export enum BondStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  BREACHED = "BREACHED",
}

@Entity("bonds")
export class Bond {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Employee, { eager: true })
  @JoinColumn({ name: "employee_id" })
  employee: Employee;

  @ManyToOne(() => Training, { eager: true, nullable: true })
  @JoinColumn({ name: "training_id" })
  training?: Training | null;

  @Column({ name: "bond_value", type: "numeric", precision: 14, scale: 2 })
  bondValue: string;

  @Column({ name: "bond_duration_months", type: "int" })
  bondDurationMonths: number;

  @Column({ name: "start_date", type: "date" })
  startDate: string;

  @Column({ name: "expiry_date", type: "date" })
  expiryDate: string;

  @Column({ type: "varchar", length: 50, default: BondStatus.ACTIVE })
  status: BondStatus;

  @Column({ name: "document_url", type: "text", nullable: true })
  documentUrl?: string | null;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: "created_by" })
  createdBy: User;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
}
