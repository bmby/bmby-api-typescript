import { BmbyEntity } from "./BmbyEntity";
import { WindDirection, DealType, PropertyType } from "../Enumerations";

export class Query extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            'query_id': '',
            'user_id': 0,
            'agency_id': 0,
            'min_rooms': null,
            'max_rooms': null,
            'min_floor': null,
            'max_floor': null,
            'min_price': null,
            'max_price': null,
            'min_area': null,
            'max_area': null,
            'wind_direction': WindDirection.Unknown,
            'has_balcony': null,
            'has_security_room': null,
            'has_parking': null,
            'has_air_conditioner': null,
            'has_storage': null,
            'is_new_building': null,
            'has_garden': null,
            'has_elevator': null,
            'has_furniture': null,
            'has_access_to_disabled': null,
            'is_active': null,
            'deal_types': [],
            'zones': [],
            'cities': [],
            'neighbourhoods': [],
            'streets': [],
            'property_types': [],
            'matches': 0,
            'creation_time': new Date()
        }
    }

    get matches(): number {
        return this._data['matches'];
    }

    get creationTime(): Date {
        return this._data['creation_time'];
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

    get agencyId(): string {
        return this._data['agency_id'];
    }
    set agencyId(value: string) {
        this._data['agency_id'] = value;
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

    get hasBalcony(): boolean {
        return this._data['has_balcony'];
    }
    set hasBalcony(value: boolean) {
        this._data['has_balcony'] = value;
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

    get zones(): Array<number> {
        return this._data['zones'];
    }
    set zones(value: Array<number>) {
        this._data['zones'] = value;
    }

    get cities(): Array<number> {
        return this._data['cities'];
    }
    set cities(value: Array<number>) {
        this._data['cities'] = value;
    }

    get neighbourhoods(): Array<number> {
        return this._data['neighbourhoods'];
    }
    set neighbourhoods(value: Array<number>) {
        this._data['neighbourhoods'] = value;
    }

    get propertyTypes(): Array<PropertyType> {
        return this._data['property_types'];
    }
    set propertyTypes(value: Array<PropertyType>) {
        this._data['property_types'] = value;
    }
}