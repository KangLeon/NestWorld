import { ArgumentsHost, ExceptionFilter, HttpException, LoggerService } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
export declare class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger;
    private readonly httpAdapterHost;
    constructor(logger: LoggerService, httpAdapterHost: HttpAdapterHost);
    catch(exception: HttpException, host: ArgumentsHost): void;
}
