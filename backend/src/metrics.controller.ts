import 'reflect-metadata';
import { Controller, Get, HttpError } from 'routing-controllers';
import { db } from './database';

@Controller()
export class MetricsController {
  @Get('/metrics')
  async getAll() {
    try {
      const limit = 100;
      let offset = 0;
      const allMetrics : any[] = [];
      while (true) {
        const batch = await db
        .selectFrom('metric')
        .selectAll()
        .limit(limit)
        .offset(offset)
        .execute();
        allMetrics.push(...batch)
        offset += limit;
        if (batch.length < limit) {
          break;
        }
      }
      return allMetrics;
    } catch {
      throw new HttpError(500, "Une erreur est survenue lors de la récupération des métriques.");
    }
  }
}