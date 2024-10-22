import Pathologie from "./Pathologie";

export default interface PartOfBody {
  id: string,
  areaName: string,
  pathologies: Pathologie[]
}