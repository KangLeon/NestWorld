import { ArgumentsHost, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
export declare class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger;
    private readonly httpAdapterHost;
    constructor(logger: Logger, httpAdapterHost: HttpAdapterHost);
    catch(exception: HttpException, host: ArgumentsHost): void;
}
