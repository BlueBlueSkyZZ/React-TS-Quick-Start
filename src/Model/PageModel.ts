export interface PersonInfo {
    Name: string,
    Team: string,
    Sex: string
}

export interface TeamInfo {
    TeamName: string,
    Persons: PersonInfo[]
}