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
      let getData = true;
      const allMetrics : any[] = [];
      while (getData) {
        const batch = await db
        .selectFrom('metric')
        .selectAll()
        .limit(limit)
        .offset(offset)
        .execute();
        if (batch.length < limit) {
          getData = false;
          break;
        }
        allMetrics.push(...batch)
        offset += limit;
      }
      return allMetrics;
    } catch {
      throw new HttpError(500, "Une erreur est survenue lors de la récupération des métriques.");
    }
  }
}