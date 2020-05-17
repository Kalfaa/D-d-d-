import {HrRepositoryInterface} from "../core/business/hr-repository.interface";
import {HrMapper} from "../common/mapper/hr.mapper";

export class HrRepository implements HrRepositoryInterface {
  constructor(
    private readonly mapper: HrMapper,
  ) {}
}
