// Generated by https://quicktype.io

export interface Stay {
    city: string;
    country: Country;
    superHost: boolean;
    title: string;
    rating: number;
    maxGuests: number;
    type: Type;
    beds: number | null;
    photo: string;
}

export enum Country {
    Finland = "Finland",
}

export enum Type {
    EntireApartment = "Entire apartment",
    EntireHouse = "Entire house",
    PrivateRoom = "Private room",
}