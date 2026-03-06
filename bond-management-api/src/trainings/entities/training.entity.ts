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

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  provider: string;

  @Column({
    type: "numeric",
    precision: 14,
    scale: 2,
    nullable: false,
  })
  cost: string;

  @Column({ name: "start_date", type: "date", nullable: true })
  startDate: string;

  @Column({ name: "end_date", type: "date", nullable: true })
  endDate: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
}
