import Resume from "./Resume";

export default interface Article {
  id: string,
  title: string,
  timeOfRead: number,
  dateOfPublication: string,
  link: string,
  resume: Resume[]
}