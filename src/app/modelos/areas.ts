/**
export class AgendaAreas {

    public name: string;
    public departament: string;

    constructor(raw: any) {
        if (raw.hasOwnProperty('name')) {
            this.name = raw.name;
        }
        if (raw.hasOwnProperty('departament')) {
            this.departament = raw.departament;
        }
    }
}

export class GetAllAreas {
    public count: number;
    public area: AgendaAreas[];
    constructor(raw: any) {
        if (raw.hasOwnProperty('count')) {
            this.count = raw.count;
        }
        if (raw.hasOwnProperty('agenda') && Array.isArray(raw.agenda)) {
            this.area = raw.agenda.map((agenda: any) => { return new AgendaAreas(agenda); });
        }
    }
}
 */
export interface area{
    name: string,
    departament: string,
    details: details[]
}


export interface details{
    town: string,
    boss: string,
    age: number,
    last_degree: string
} 

export interface areas{
    areas: area[]
}