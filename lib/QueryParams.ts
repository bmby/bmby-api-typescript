export enum SortDirection {
    Asc = 0,
    Desc = 1
}

export class QueryParams {
    private _params: any = {
        'sortBy': '',
        'sortDirection': SortDirection[0].toLowerCase(),
        'page': 1,
        'pageSize': 100
    }

    get sortBy(): string {
        return this._params['sortBy'];
    }
    set sortBy(value: string) {
        this._params['sortBy'] = value;
    }

    get sortDirection(): SortDirection {
        return this._params['sortDirection'];
    }
    set sortDirection(value: SortDirection) {
        this._params['sortDirection'] = SortDirection[value].toLowerCase();
    }
}