export enum SortDirection {
    Asc = 0,
    Desc = 1
}

export class QueryParams {
    private _data: any = {
        'sortBy': '',
        'sortDirection': SortDirection[0].toLowerCase(),
        'page': 1,
        'pageSize': 100
    }

    get sortBy(): string {
        return this._data['sortBy'];
    }
    set sortBy(value: string) {
        this._data['sortBy'] = value;
    }

    get sortDirection(): SortDirection {
        return this._data['sortDirection'];
    }
    set sortDirection(value: SortDirection) {
        this._data['sortDirection'] = value;
    }
}