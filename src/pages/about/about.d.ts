export interface IAbout{
        id: number;
        title: string;
        description: string;
        file:IAboutFile;

    }

    export interface IAboutFile{
        id: number;
        url: string;
    }