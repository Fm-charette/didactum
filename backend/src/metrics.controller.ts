import 'reflect-metadata';
import { Controller, Get } from 'routing-controllers';
import { db } from './database';

@Controller()
export class MetricsController {
  @Get('/metrics')
  async getAll() {
    const res = await db.selectFrom('metric').selectAll().execute();
    //db.execute(`select * from metric where account='$1';`,[param.filter.account])
    return res;
  }
}