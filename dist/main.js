"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("./filters/http-exception.filter");
async function bootstrap() {
    const logger = new common_1.Logger();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix("api/v1");
    const httpAdapter = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter(logger, httpAdapter));
    const port = 3000;
    await app.listen(3000);
    logger.log(`App 运行在端口: ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map