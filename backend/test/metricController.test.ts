import { MetricsController } from '../src/metrics.controller';
import { HttpError } from 'routing-controllers';

jest.mock('../src/database', () => ({
  db: {
    selectFrom: jest.fn().mockReturnThis(),
    selectAll: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
    offset: jest.fn().mockReturnThis(),
    execute: jest.fn().mockRejectedValue(new Error('Database error')),
  },
}));

describe('MetricsController', () => {
  let metricsController: MetricsController;

  beforeEach(() => {
    metricsController = new MetricsController();
  });

  it('return 500 and the error message when database fails', async () => {
    // Arrange
    const expectedError = new HttpError(500, "Une erreur est survenue lors de la récupération des métriques.");

    // Act & Assert
    await expect(metricsController.getAll()).rejects.toThrow(expectedError);
  });
});