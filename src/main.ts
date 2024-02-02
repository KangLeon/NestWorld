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

async function bootstrap() {
  const logger = new Logger(); //TODO：如果需要输出到文件里的话需要重新设置
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new HttpExceptionFilter(logger, httpAdapter));
  const port = 3000;
  await app.listen(3000);
  logger.log(`App 运行在端口: ${port}`);
}
bootstrap();
