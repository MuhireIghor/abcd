interface Contacts {
  title: string;
  subtitle?: string;
  data: {
    profile: string;
    username: string;
    text: string;
    rating: number;
    id: number;
  }[];
}
interface Choose {
  subtitle: string;
  title: string;
  desc: string;
  lists: string[];
}
export interface belowType {
  contacts: Contacts;
  choose: Choose;
}

export interface latesttype {
  coverPhoto: string;
  uploader: number;
  status: string;
  title: string;
  date: string;
  readby: number;
}
