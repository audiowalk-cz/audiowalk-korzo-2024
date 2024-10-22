import { ErrorHandler, Injectable } from "@angular/core";
import { AnalyticsService } from "./shared/services/analytics.service";

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  error?: string;

  constructor(private analytics: AnalyticsService) {}

  handleError(error: any): void {
    this.analytics.trackError(error.message);
    this.error = error.message;
    console.error(error);
  }
}
