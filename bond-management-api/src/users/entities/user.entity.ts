import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

export enum UserRole {
  ADMIN = "ADMIN",
  HR = "HR",
  LEGAL = "LEGAL",
  MANAGEMENT = "MANAGEMENT",
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password_hash: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.HR,
  })
  role: UserRole;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;
}
