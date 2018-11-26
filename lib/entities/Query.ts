import { BmbyEntity } from "./BmbyEntity";
import { WindDirection, DealType } from "../Enumerations";
import { ListItem } from "./ListItem";

export class Query extends BmbyEntity {
    private _options = {
        'is_new_building': null,
        'has_air_conditioner': null,
        'has_window_bars': null,
        'has_parking': null,
        'has_furniture': null,
        'has_religion_facility': null,
        'can_be_extended': null,
        'has_swimming_pool': null,
        'has_jacuzzi': null,
        'has_pandoor': null,
        'has_gym': null,
        'has_yard': null,
        'has_parent_bedroom': null,
        'has_event_room': null,
        'has_storage': null,
        'has_cellar': null,
        'has_elevator': null,
        'has_shabat_elevator': null,
        'has_secure_room': null,
        'has_guard': null,
        'has_separate_entrance': null,
        'is_unit': null,
        'has_balcony': null,
        'has_teracce': null,
        'has_access_for_disabled': null,
        'has_garden': null,
        'has_panorama': null,
        'on_columns': null,
    }

    constructor() {
        super();

        this._data = {
            'query_id': '',
            'title': '',
            'min_rooms': null,
            'max_rooms': null,
            'min_floor': null,
            'max_floor': null,
            'min_price': null,
            'max_price': null,
            'min_area': null,
            'max_area': null,
            'wind_direction': WindDirection.Unknown,
            'is_new_building': null,
            'has_air_conditioner': null,
            'has_window_bars': null,
            'has_parking': null,
            'has_furniture': null,
            'has_religion_facility': null,
            'can_be_extended': null,
            'has_swimming_pool': null,
            'has_jacuzzi': null,
            'has_pandoor': null,
            'has_gym': null,
            'has_yard': null,
            'has_parent_bedroom': null,
            'has_event_room': null,
            'has_storage': null,
            'has_cellar': null,
            'has_elevator': null,
            'has_shabat_elevator': null,
            'has_secure_room': null,
            'has_guard': null,
            'has_separate_entrance': null,
            'is_unit': null,
            'has_balcony': null,
            'has_teracce': null,
            'has_access_for_disabled': null,
            'has_garden': null,
            'has_panorama': null,
            'on_columns': null,
            'customer_id': null,
    
            'is_active': true,

            'deal_types': [],

            'regions': [],
            'cities': [],
            'neighbourhoods': [],
            'streets': [],

            'property_types': [],
            'matches': 0,
            'creation_time': new Date(),
            'last_update_time': new Date()
        }
    }
    
    set data(value: any) {
        this._data = value;

        this._data['wind_direction'] = WindDirection[this._data['wind_direction']];        
    }
    get data(): any {
        return this._data;
    }

    set title(value: string) {
        this._data['title'] = value;
    }
    get title(): string {
        return this._data['title'];
    }

    set customerId(value: string) {
        this._data['customer_id'] = value;
    }
    get customerId(): string {
        return this._data['customer_id'];
    }

    get matches(): number {
        return this._data['matches'];
    }

    get creationTime(): Date {
        return new Date(this._data['creation_time']);
    }

    get lastUpdateTime(): Date {
        return new Date(this._data['last_update_time']);
    }

    get id(): string {
        return this._data['query_id'];
    }
    set id(value: string) {
        this._data['query_id'] = value;
    }

    get minRooms(): number {
        return this._data['min_rooms'];
    }
    set minRooms(value: number) {
        this._data['min_rooms'] = value;
    }

    get maxRooms(): number {
        return this._data['max_rooms'];
    }
    set maxRooms(value: number) {
        this._data['max_rooms'] = value;
    }

    get minFloor(): number {
        return this._data['min_floor'];
    }
    set minFloor(value: number) {
        this._data['min_floor'] = value;
    }

    get maxFloor(): number {
        return this._data['max_floor'];
    }
    set maxFloor(value: number) {
        this._data['max_floor'] = value;
    }

    get minPrice(): number {
        return this._data['min_price'];
    }
    set minPrice(value: number) {
        this._data['min_price'] = value;
    }

    get maxPrice(): number {
        return this._data['max_price'];
    }
    set maxPrice(value: number) {
        this._data['max_price'] = value;
    }

    get minArea(): number {
        return this._data['min_area'];
    }
    set minArea(value: number) {
        this._data['min_area'] = value;
    }

    get maxArea(): number {
        return this._data['max_area'];
    }
    set maxArea(value: number) {
        this._data['max_area'] = value;
    }

    get windDirection(): WindDirection {
        return this._data['wind_direction'];
    }
    set windDirection(value: WindDirection) {
        this._data['wind_direction'] = value;
    }

    get hasReligionFacility(): boolean {
        return this._data['has_religion_facility'];
    }
    set hasReligionFacility(value: boolean) {
        this._data['has_religion_facility'] = value;
    }

    get hasSecureRoom(): boolean {
        return this._data['has_secure_room'];
    }
    set hasSecureRoom(value: boolean) {
        this._data['has_secure_room'] = value;
    }

    get isUnit(): boolean {
        return this._data['is_unit'];
    }
    set isUnit(value: boolean) {
        this._data['is_unit'] = value;
    }

    get onColumns(): boolean {
        return this._data['on_columns'];
    }
    set onColumns(value: boolean) {
        this._data['on_columns'] = value;
    }

    get hasSeparateEntrance(): boolean {
        return this._data['has_separate_entrance'];
    }
    set hasSeparateEntrance(value: boolean) {
        this._data['has_separate_entrance'] = value;
    }

    get hasTeracce(): boolean {
        return this._data['has_teracce'];
    }
    set hasTeracce(value: boolean) {
        this._data['has_teracce'] = value;
    }

    get hasAccessForDisabled(): boolean {
        return this._data['has_access_for_disabled'];
    }
    set hasAccessForDisabled(value: boolean) {
        this._data['has_access_for_disabled'] = value;
    }

    get canBeExtended(): boolean {
        return this._data['can_be_extended'];
    }
    set canBeExtended(value: boolean) {
        this._data['can_be_extended'] = value;
    }

    get hasWindowBars(): boolean {
        return this._data['has_window_bars'];
    }
    set hasWindowBars(value: boolean) {
        this._data['has_window_bars'] = value;
    }

    get hasBalcony(): boolean {
        return this._data['has_balcony'];
    }
    set hasBalcony(value: boolean) {
        this._data['has_balcony'] = value;
    }

    get hasPanorama(): boolean {
        return this._data['has_panorama'];
    }
    set hasPanorama(value: boolean) {
        this._data['has_panorama'] = value;
    }

    get hasSwimmingPool(): boolean {
        return this._data['has_swimming_pool'];
    }
    set hasSwimmingPool(value: boolean) {
        this._data['has_swimming_pool'] = value;
    }

    get hasGuard(): boolean {
        return this._data['has_guard'];
    }
    set hasGuard(value: boolean) {
        this._data['has_guard'] = value;
    }

    get hasJacuzzi(): boolean {
        return this._data['has_jacuzzi'];
    }
    set hasJacuzzi(value: boolean) {
        this._data['has_jacuzzi'] = value;
    }

    get hasPandoor(): boolean {
        return this._data['has_pandoor'];
    }
    set hasPandoor(value: boolean) {
        this._data['has_pandoor'] = value;
    }

    get hasGym(): boolean {
        return this._data['has_gym'];
    }
    set hasGym(value: boolean) {
        this._data['has_gym'] = value;
    }

    get hasYard(): boolean {
        return this._data['has_yard'];
    }
    set hasYard(value: boolean) {
        this._data['has_yard'] = value;
    }

    get hasParentBedroom(): boolean {
        return this._data['has_parent_bedroom'];
    }
    set hasParentBedroom(value: boolean) {
        this._data['has_parent_bedroom'] = value;
    }

    get hasEventRoom(): boolean {
        return this._data['has_event_room'];
    }
    set hasEventRoom(value: boolean) {
        this._data['has_event_room'] = value;
    }

    get hasSecurityBalcony(): boolean {
        return this._data['has_security_room'];
    }
    set hasSecurityBalcony(value: boolean) {
        this._data['has_security_room'] = value;
    }

    get hasParking(): boolean {
        return this._data['has_parking'];
    }
    set hasParking(value: boolean) {
        this._data['has_parking'] = value;
    }

    get hasAirConditioner(): boolean {
        return this._data['has_air_conditioner'];
    }
    set hasAirConditioner(value: boolean) {
        this._data['has_air_conditioner'] = value;
    }

    get hasStorage(): boolean {
        return this._data['has_storage'];
    }
    set hasStorage(value: boolean) {
        this._data['has_storage'] = value;
    }

    get isNewBuilding(): boolean {
        return this._data['is_new_building'];
    }
    set isNewBuilding(value: boolean) {
        this._data['is_new_building'] = value;
    }

    get hasGarden(): boolean {
        return this._data['has_garden'];
    }
    set hasGarden(value: boolean) {
        this._data['has_garden'] = value;
    }

    get hasElevator(): boolean {
        return this._data['has_elevator'];
    }
    set hasElevator(value: boolean) {
        this._data['has_elevator'] = value;
    }

    get hasShabatElevator(): boolean {
        return this._data['has_shabat_elevator'];
    }
    set hasShabatElevator(value: boolean) {
        this._data['has_shabat_elevator'] = value;
    }

    get hasFurniture(): boolean {
        return this._data['has_furniture'];
    }
    set hasFurniture(value: boolean) {
        this._data['has_furniture'] = value;
    }

    get hasAccessToDisabled(): boolean {
        return this._data['has_access_to_disabled'];
    }
    set hasAccessToDisabled(value: boolean) {
        this._data['has_access_to_disabled'] = value;
    }

    get isActive(): boolean {
        return this._data['is_active'];
    }
    set isActive(value: boolean) {
        this._data['is_active'] = value;
    }

    get dealTypes(): Array<ListItem> {
        let dealTypes = Array<ListItem>();

        if (this._data['deal_types']) {
            for (let i in this._data['deal_types']) {
                let dealType = new ListItem();
                dealType.data = this._data['deal_types'][i];
                dealTypes.push(dealType);
            }
        }

        return dealTypes;
    }
    set dealTypes(value: Array<ListItem>) {
        this._data['deal_types'] = [];

        if (value != null) {
            for (let i in value) {
                this._data['deal_types'].push(value[i].data)
            }
        }
    }

    get regions(): Array<ListItem> {
        let regions = Array<ListItem>();

        if (this._data['regions']) {
            for (let i in this._data['regions']) {
                let region = new ListItem();
                region.data = this._data['regions'][i];
                regions.push(region);
            }
        }

        return regions;
    }
    set regions(value: Array<ListItem>) {
        this._data['regions'] = [];

        if (value != null) {
            for (let i in value) {
                this._data['regions'].push(value[i].data)
            }
        }
    }

    get cities(): Array<ListItem> {
        let cities = Array<ListItem>();

        if (this._data['cities']) {
            for (let i in this._data['cities']) {
                let city = new ListItem();
                city.data = this._data['cities'][i];
                cities.push(city);
            }
        }

        return cities;
    }
    set cities(value: Array<ListItem>) {
        this._data['cities'] = [];

        if (value != null) {
            for (let i in value) {
                this._data['cities'].push(value[i].data)
            }

            return;
        }
    }

    get neighbourhoods(): Array<ListItem> {
        let neighbourhoods = Array<ListItem>();

        if (this._data['neighbourhoods']) {
            for (let i in this._data['neighbourhoods']) {
                let neighbourhood = new ListItem();
                neighbourhood.data = this._data['neighbourhoods'][i];
                neighbourhoods.push(neighbourhood);
            }
        }

        return neighbourhoods;
    }
    set neighbourhoods(value: Array<ListItem>) {
        this._data['neighbourhoods'] = [];

        if (value != null) {
            for (let i in value) {
                this._data['neighbourhoods'].push(value[i].data)
            }

            return;
        }
    }

    get streets(): Array<ListItem> {
        let streets = Array<ListItem>();

        if (this._data['streets']) {
            for (let i in this._data['streets']) {
                let street = new ListItem();
                street.data = this._data['streets'][i];
                streets.push(street);
            }
        }

        return streets;
    }
    set streets(value: Array<ListItem>) {
        this._data['streets'] = [];

        if (value != null) {
            for (let i in value) {
                this._data['streets'].push(value[i].data)
            }

            return;
        }
    }

    get propertyTypes(): Array<ListItem> {
        let propertyTypes = Array<ListItem>();

        if (this._data['property_types']) {
            for (let i in this._data['property_types']) {
                let propertyType = new ListItem();
                propertyType.data = this._data['property_types'][i];
                propertyTypes.push(propertyType);
            }
        }

        return propertyTypes;
    }
    set propertyTypes(value: Array<ListItem>) {
        this._data['property_types'] = [];

        if (value != null) {
            for (let i in value) {
                this._data['property_types'].push(value[i].data)
            }

            return;
        }
    }

    getOptions(dictionary?: any, icons?: any): Array<ListItem> {
        let options = new Array<ListItem>();
        
        for (let key in this._options) {
            let optionData = {
                'key': key,
                'display_name': dictionary != undefined && dictionary[key] != undefined ? dictionary[key] : key,
                'tags': '',
                'icon': icons != undefined && icons[key] != undefined ? icons[key] : '',
                'selected': this._data[key]
            }

            let option = new ListItem();
            option.data = optionData;

            options.push(option);
        }

        return options;
    }

    setOptionValue(option: string, value: boolean): void {
        this._data[option] = value
    }
    
}