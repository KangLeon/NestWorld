/*
 * @Author: JY jitengjiao@bytedance.com
 * @Date: 2024-01-27 17:00:31
 * @LastEditors: JY jitengjiao@bytedance.com
 * @LastEditTime: 2024-02-01 23:50:01
 * @FilePath: /NestWorld/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";
import { HttpExceptionFilter } from "./filters/http-exception.filter";
import { createLogger } from "winston";
import * as winston from "winston";
import { WinstonModule, utilities } from "nest-winston";

async function bootstrap() {
  //Winston
  const instance = createLogger({
    transports: [
      new winston.transports.Console({
        level: "info",
        format: winston.format.combine(
          winston.format.timestamp(),
          utilities.format.nestLike(),
        ),
      }),
      new winston.transports.DailyRotateFile({
        level: "warn",
        filename: "application-%DATE%.log",
        datePattern: "YYYY-MM-DD-HH",
        zippedArchive: true,
        maxSize: "20m",
        maxFiles: "14d",
        format: winston.format.combine(
          winston.format.timestamp(),
          utilities.format.nestLike(),
        ),
      }),
    ],
  });

  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      instance,
    }),
  });
  app.setGlobalPrefix("api/v1");
  // const httpAdapter = app.get(HttpAdapterHost);
  const port = 3000;
  await app.listen(port);

  //1.默认logger
  // const logger = new Logger(); //TODO：如果需要输出到文件里的话需要重新设置
  // app.useGlobalFilters(new HttpExceptionFilter(logger, httpAdapter));
  // logger.log(`App 运行在端口: ${port}`);
}
bootstrap();
