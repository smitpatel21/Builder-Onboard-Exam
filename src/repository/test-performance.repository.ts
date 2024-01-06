import * as db from "../index";
import { TestPerformance } from "../models/test_performance";

export class TestPerformanceRepository {
  public addTestPerformance = async (params: TestPerformance): Promise<TestPerformance> => {
    return await db.TestPerformance.create(params as any);
  };

  public updateTestPerformance = async (
    params: TestPerformance,
    test_id: number
  ): Promise<[number]> => {
    return await db.TestPerformance.update(params, { where: { id: test_id } });
  };
}