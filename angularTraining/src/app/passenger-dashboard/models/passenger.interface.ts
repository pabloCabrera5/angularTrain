export interface Child {
    name: string,
    age: number,
  }
  
export interface Passengers {
    id: number;
    fullname: string;
    checkin: boolean;
    checkinDate?: number;
    children?: Child[] | null;
    nationality?: String;
    baggage?: string;
}