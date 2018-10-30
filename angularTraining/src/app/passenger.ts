export class Child {
    name: string;
    age: number;
}
  
export class Passengers {
    id: number;
    fullname: string;
    checkin: boolean;
    checkinDate?: number;
    children?: Child[] | null;
    nationality?: String;
    baggage?: string;
}
