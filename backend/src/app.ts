// this shim is required
import { createExpressServer } from 'routing-controllers';
import { MetricsController } from './metrics.controller';

const app = createExpressServer({
  controllers: [MetricsController],
});

console.log('listen to 3000')
app.listen(3000);