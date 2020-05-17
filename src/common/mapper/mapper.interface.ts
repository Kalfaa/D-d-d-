export interface Mapper<Model, DTO> {
  toModel(dto: DTO): Model;
  toDTO(model: Model): DTO;
}

