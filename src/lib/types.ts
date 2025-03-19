export interface AuthorData {
  designation: any;
  image: string;
  name: string;
}

export interface ChiefAuthorData extends AuthorData {
  designation: any;
  title: string;
}
