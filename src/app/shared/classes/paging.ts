export class Paging {
    private static _instance: Paging = new Paging();

    limit: number;
    skip: number;

    private constructor() {
        this.limit = 30;
        this.skip = 0;
    }

    static getInstance(): Paging {        
        return Paging._instance
    }    
}