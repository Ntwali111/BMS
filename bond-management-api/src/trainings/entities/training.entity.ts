import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("trainings")
export class Training {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  provider: string;

  // NUMERIC returns as string in pg driver
  @Column({ type: "numeric", precision: 14, scale: 2 })
  cost: string;

  @Column({ name: "start_date", type: "date", nullable: true })
  startDate: string;

  @Column({ name: "end_date", type: "date", nullable: true })
  endDate: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
}
