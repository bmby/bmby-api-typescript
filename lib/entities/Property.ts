import { BmbyEntity } from "./BmbyEntity";
import { PropertyCatalog, RealEstateMedia, DealType, RoommateGender, WindDirection, PropertyType } from "../Enumerations";
import { Contact } from "./Contact";
import { ListItem } from "./ListItem";
import { Image } from "./Image";

export class Property extends BmbyEntity {
    private _options = {
        'has_air_conditioner': false,
        'has_window_bars': false,
        'has_parking': false,
        'has_furniture': false,
        'has_religion_facility': false,
        'can_be_extended': false,
        'has_swimming_pool': false,
        'has_jacuzzi': false,
        'has_pandoor': false,
        'has_gym': false,
        'has_yard': false,
        'has_parent_bedroom': false,
        'has_event_room': false,
        'has_storage': false,
        'has_cellar': false,
        'has_elevator': false,
        'has_shabat_elevator': false,
        'has_secure_room': false,
        'has_guard': false,
        'has_separate_entrance': false,
        'is_unit': false,
        'has_balcony': false,
        'has_teracce': false,
        'has_access_for_disabled': false,
        'has_garden': false,
        'has_panorama': false,
        'on_columns': false,
    }

    constructor() {
        super();

        this._data = {
            'property_id': 0,
            'agency_id': null,
            'bmby_project_id': null,
            'contact_id': '',
            'catalog': PropertyCatalog.Unknown,
            'title': '',
            'description': '',
            'limited_description': '',
            'address': '',
            'bmby_property_id': 0,
            'bmby_owners_property_id': 0,
            'bmby_company_id': 0,
            'bmby_broker_id': 0,
            'is_published': false,
            'parser_record_id': 0,
            'media': RealEstateMedia.Unknown,
            'property_media_id': 0,
            'page_link': '',
            'is_commercial': false,
            'deal_type': DealType.Unknown,
            'number_of_payments_per_year': 0,
            'can_be_rented_with_roommate': false,
            'roommate_gender': RoommateGender.Unknown,
            'rommate_can_smoke': false,
            'zone_id': 0,
            'city_id': 0,
            'neighbourhood_id': 0,
            'street_id': 0,
            'house_number': '',
            'property_type': 0,
            'floor': 0,
            'floors': 0,
            'rooms': 0.0,
            'area': 0.0,
            'plot_area': 0.0,
            'rent_price': 0.0,
            'sale_price': 0.0,
            'unit_price': 0.0,
            'entry_date': '',
            'comments': '',
            'has_air_conditioner': false,
            'has_window_bars': false,
            'has_parking': false,
            'has_furniture': false,
            'furniture_description': '',
            'has_religion_facility': false,
            'can_be_extended': false,
            'has_swimming_pool': false,
            'has_jacuzzi': false,
            'has_pandoor': false,
            'has_gym': false,
            'has_yard': false,
            'has_parent_bedroom': false,
            'has_event_room': false,
            'has_storage': false,
            'has_cellar': false,
            'has_elevator': false,
            'has_shabat_elevator': false,
            'has_secure_room': false,
            'has_guard': false,
            'has_separate_entrance': false,
            'is_unit': false,
            'has_balcony': false,
            'has_teracce': false,
            'has_access_for_disabled': false,
            'has_garden': false,
            'garden_area': 0.0,
            'has_panorama': false,
            'on_columns': false,
            'published_by_agency': false,
            'wind_direction': WindDirection.Unknown,
            'creation_time': 0,
            'last_update_time': 0,
            'external_images': [],
            'images': []
        }
    }

    set data(value: any) {
        this._data = value;

        if (this._data['contact'] != undefined && this._data['contact'] != null) {
            this._data['contact'] = new Contact();
            this._data['contact'].data = this._data['contact'];
        }
    }

    get data(): any {
        if (this._data['contact'] != undefined && this._data['contact'] instanceof Contact) {
            this._data['contact'] = this._data['contact'].data;
        }
        
        for (let key in this._options) {
            this._data[key] = this._options[key];
        }

        return this._data;
    }

    get images(): Array<Image> {
        let imagesArr = new Array<Image>();
        
        for (let i in this._data['images']) {
            let image = new Image();
            image.data = this._data['images'][i];

            imagesArr.push(image);
        }

        return imagesArr;
    }

    get contact(): Contact {
        if (this._data['contact'] == undefined || this._data['contact'] == null) {
            this._data['contact'] = new Contact();
        }

        return this._data['contact'];
    }
    
    get id(): string {
        return this._data['property_id'];
    }
    set id(value: string) {
        this._data['property_id'] = value;
    }
    
    get agencyId(): string {
        return this._data['agency_id'];
    }
    set agencyId(value: string) {
        this._data['agency_id'] = value;
    }
    
    get bmbyProjectId(): number {
        return this._data['bmby_project_id'];
    }
    set bmbyProjectId(value: number) {
        this._data['bmby_project_id'] = value;
    }
    
    get contactId(): string {
        return this._data['contact_id'];
    }
    set contactId(value: string) {
        this._data['contact_id'] = value;
    }
    
    get catalog(): PropertyCatalog {
        return this._data['catalog'];
    }
    set catalog(value: PropertyCatalog) {
        this._data['catalog'] = value;
    }
        
    get title(): string {
        return this._data['title'];
    }
    set title(value: string) {
        this._data['title'] = value;
    }
        
    get description(): string {
        return this._data['description'];
    }
    set description(value: string) {
        this._data['description'] = value;
    }
        
    get comments(): string {
        return this._data['comments'];
    }
    set comments(value: string) {
        this._data['comments'] = value;
    }
        
    get limitedDescription(): string {
        return this._data['limited_description'];
    }
    set limitedDescription(value: string) {
        this._data['limited_description'] = value;
    }
        
    get address(): string {
        return this._data['address'];
    }
    set address(value: string) {
        this._data['address'] = value;
    }
        
    get propertyType(): PropertyType {
        return this._data['property_type'];
    }
    set propertyType(value: PropertyType) {
        this._data['property_type'] = value;
    }
        
    get dealType(): DealType {
        return this._data['deal_type'];
    }
    set dealType(value: DealType) {
        this._data['deal_type'] = value;
    }
        
    get zoneId(): number {
        return this._data['zone_id'];
    }
    set zoneId(value: number) {
        this._data['zone_id'] = value;
    }
        
    get cityId(): number {
        return this._data['city_id'];
    }
    set cityId(value: number) {
        this._data['city_id'] = value;
    }
        
    get neighbourhoodId(): number {
        return this._data['neighbourhood_id'];
    }
    set neighbourhoodId(value: number) {
        this._data['neighbourhood_id'] = value;
    }
        
    get streetId(): number {
        return this._data['street_id'];
    }
    set streetId(value: number) {
        this._data['street_id'] = value;
    }
        
    get houseNumber(): string {
        return this._data['house_number'];
    }
    set houseNumber(value: string) {
        this._data['house_number'] = value;
    }
        
    get floor(): number {
        return this._data['floor'];
    }
    set floor(value: number) {
        this._data['floor'] = value;
    }
        
    get floors(): number {
        return this._data['floors'];
    }
    set floors(value: number) {
        this._data['floors'] = value;
    }
       
    get rooms(): number {
        return this._data['rooms'];
    }
    set rooms(value: number) {
        this._data['rooms'] = value;
    }
       
    get area(): number {
        return this._data['rooms'];
    }
    set area(value: number) {
        this._data['rooms'] = value;
    }
       
    get plotArea(): number {
        return this._data['plot_area'];
    }
    set plotArea(value: number) {
        this._data['plot_area'] = value;
    }
       
    get rentPrice(): number {
        return this._data['rent_price'];
    }
    set rentPrice(value: number) {
        this._data['rent_price'] = value;
    }
       
    get salePrice(): number {
        return this._data['sale_price'];
    }
    set salePrice(value: number) {
        this._data['sale_price'] = value;
    }
       
    get unitPrice(): number {
        return this._data['unit_price'];
    }
    set unitPrice(value: number) {
        this._data['unit_price'] = value;
    }
       
    get entryDate(): Date {
        return this._data['entry_date'];
    }
    set entryDate(value: Date) {
        this._data['entry_date'] = value;
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
        }

        return options;
    }

    setOptionValue(option: string, value: boolean): void {
        this._options[option] = value
    }
}