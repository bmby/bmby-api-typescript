import { BmbyEntity } from "./BmbyEntity";
import { WindDirection, DealType, PropertyType } from "../Enumerations";
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
            'user_id': 0,
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
    
            'is_active': true,

            'deal_types': [],

            'regions': [],
            'cities': [],
            'neighbourhoods': [],
            'streets': [],

            'regions_list': [],
            'cities_list': [],
            'neighbourhoods_list': [],
            'streets_list': [],

            'property_types': [],
            'matches': 0,
            'creation_time': new Date(),
            'last_update_time': new Date()
        }
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

    get userId(): number {
        return this._data['user_id'];
    }
    set userId(value: number) {
        this._data['user_id'] = value;
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

    get HasEventRoom(): boolean {
        return this._data['has_event_room'];
    }
    set HasEventRoom(value: boolean) {
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

    get dealTypes(): Array<DealType> {
        return this._data['deal_types'];
    }
    set dealTypes(value: Array<DealType>) {
        this._data['deal_types'] = value;
    }

    get regions(): Array<ListItem> {
        let regions = Array<ListItem>();

        if (this._data['regions_list']) {
            for (let i in this._data['regions_list']) {
                let region = new ListItem();
                region.data = this._data['regions_list'][i];
                regions.push(region);
            }
        }

        return regions;
    }
    set regions(value: Array<ListItem>) {
        if (value != null) {
            this._data['regions_list'] = [];
            this._data['regions'] = [];

            for (let i in value) {
                this._data['regions_list'].push(value[i].data)
                this._data['regions'].push(value[i].key)
            }

            return;
        }

        this._data['regions'] = value;
    }

    get cities(): Array<ListItem> {
        let cities = Array<ListItem>();

        if (this._data['cities_list']) {
            for (let i in this._data['cities_list']) {
                let city = new ListItem();
                city.data = this._data['cities_list'][i];
                cities.push(city);
            }
        }

        return cities;
    }
    set cities(value: Array<ListItem>) {
        if (value != null) {
            this._data['cities_list'] = [];
            this._data['cities'] = [];

            for (let i in value) {
                this._data['cities_list'].push(value[i].data)
                this._data['cities'].push(value[i].key)
            }

            return;
        }

        this._data['cities'] = value;
    }

    get neighbourhoods(): Array<ListItem> {
        let neighbourhoods = Array<ListItem>();

        if (this._data['neighbourhoods_list']) {
            for (let i in this._data['neighbourhoods_list']) {
                let neighbourhood = new ListItem();
                neighbourhood.data = this._data['neighbourhoods_list'][i];
                neighbourhoods.push(neighbourhood);
            }
        }

        return neighbourhoods;
    }
    set neighbourhoods(value: Array<ListItem>) {
        if (value != null) {
            this._data['neighbourhoods_list'] = [];
            this._data['neighbourhoods'] = [];

            for (let i in value) {
                this._data['neighbourhoods_list'].push(value[i].data)
                this._data['neighbourhoods'].push(value[i].key)
            }

            return;
        }

        this._data['neighbourhoods'] = value;
    }

    get streets(): Array<ListItem> {
        let streets = Array<ListItem>();

        if (this._data['streets_list']) {
            for (let i in this._data['streets_list']) {
                let street = new ListItem();
                street.data = this._data['streets_list'][i];
                streets.push(street);
            }
        }

        return streets;
    }
    set streets(value: Array<ListItem>) {
        if (value != null) {
            this._data['streets_list'] = [];
            this._data['streets'] = [];

            for (let i in value) {
                this._data['streets_list'].push(value[i].data)
                this._data['streets'].push(value[i].key)
            }

            return;
        }

        this._data['streets'] = value;
    }

    get propertyTypes(): Array<PropertyType> {
        return this._data['property_types'];
    }
    set propertyTypes(value: Array<PropertyType>) {
        this._data['property_types'] = value;
    }

    getOptions(dictionary?: any, icons?: any): Array<ListItem> {
        let options = new Array<ListItem>();
        
        for (let key in this._options) {
            let optionData = {
                'key': key,
                'display_name': dictionary != undefined && dictionary[key] != undefined ? dictionary[key] : key,
                'tags': '',
                'icon': icons != undefined && icons[key] != undefined ? icons[key] : '',
                'selected': this._options[key]
            }

            let option = new ListItem();
            option.data = optionData;

            options.push(option);
        }

        return options;
    }

    setOptionValue(option: string, value: boolean): void {
        this._options[option] = value
    }
    
}