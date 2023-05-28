import { Injectable } from '@nestjs/common';

@Injectable()
export class DateTimeProvider {
  getUtcDate() {
    const now = new Date();
    return Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds(),
      now.getUTCMilliseconds(),
    );
  }
}
