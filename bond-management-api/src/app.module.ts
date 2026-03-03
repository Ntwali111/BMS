import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.modules";
import { EmployeesModule } from "./employees/employees.module";
import { BondsModule } from "./bonds/bonds.module";
import { TrainingsModule } from "./trainings/trainings.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: false, // IMPORTANT for production discipline
    }),
    AuthModule,
    EmployeesModule,
    BondsModule,
    TrainingsModule,
  ],
})
export class AppModule {}
