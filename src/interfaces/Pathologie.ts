import Article from "./Article";

export default interface Pathologie {
  id: string,
  name: string,
  articles: Article[],
  treatment?: Article[]
}