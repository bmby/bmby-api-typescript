import { BmbyEntity } from "./BmbyEntity";
import { PropertyCatalog, RealEstateMedia, DealType, RoommateGender, WindDirection } from "../Enumerations";
import { Contact } from "./Contact";
import { ListItem } from "./ListItem";
import { Image } from "./Image";
import { DisplayListItem } from "./DisplayListItem";

export class Property extends BmbyEntity {
    private _contact: Contact;

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

        this._contact = new Contact();

        this._data = {
            'property_id': 0,
            'agency_id': null,
            'bmby_project_id': null,
            'contact_id': '',
            'bedrooms': null,
            'contact': this._contact.data,
            'catalog': PropertyCatalog.Unknown,
            'title': '',
            'display_title': '',
            'description': '',
            'limited_description': '',
            'address': '',
            'bmby_property_id': 0,
            'bmby_owners_property_id': 0,
            'bmby_company_id': 0,
            'bmby_broker_id': 0,
            'is_published': false,
            'is_exclusive': false,
            'parser_record_id': 0,
            'media': RealEstateMedia.Unknown,
            'property_media_id': 0,
            'page_link': '',
            'is_commercial': false,
            'deal_type': DealType.Unknown,
            'number_of_payments_per_year': null,
            'can_be_rented_with_roommate': false,
            'roommate_gender': RoommateGender.Unknown,
            'rommate_can_smoke': false,
            'region_id': '',
            'city_id': '',
            'neighbourhood_id': '',
            'street_id': '',
            'house_number': '',
            'property_type': '',
            'floor': null,
            'floors': null,
            'rooms': null,
            'bathrooms': null,
            'toilets': null,
            'parkings': null,
            'area': null,
            'plot_area': null,
            'price': null,
            'price_change': null,
            'unit_price': null,
            'publish_date': null,
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
            'garden_area': null,
            'has_panorama': false,
            'on_columns': false,
            'published_by_agency': false,
            'wind_direction': WindDirection.Unknown,
            'creation_time': null,
            'last_update_time': null,
            'lat': null,
            'lon': null,
            'images': []
        }
    }

    set data(value: any) {
        this._data = value;

        if (value['contact'] == undefined || value['contact'] == null) {
            this._contact = new Contact();
            value['contact'] = this._contact.data;
        } else {
            this._contact.data = value['contact'];
        }

        this._data['deal_type'] = DealType[this._data['deal_type']];        
        this._data['media'] = RealEstateMedia[this._data['media']];        
    }

    get data(): any {
        this._data['contact'] = this._contact.data;

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
    
    get id(): string {
        return this._data['property_id'];
    }
    set id(value: string) {
        this._data['property_id'] = value;
    }

    get contact(): Contact {
        return this._contact;
    }
    set contact(contact: Contact) {
        this._contact = contact;
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
    
    get bedrooms(): number {
        return this._data['bedrooms'];
    }
    set bedrooms(value: number) {
        this._data['bedrooms'] = value;
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
        
    get displayTitle(): string {
        return this._data['display_title'];
    }
    set displayTitle(value: string) {
        this._data['display_title'] = value;
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
     
    get lat(): number {
        return this._data['lat'];
    }
    set lat(value: number) {
        this._data['lat'] = value;
    }
     
    get lon(): number {
        return this._data['lon'];
    }
    set lon(value: number) {
        this._data['lon'] = value;
    }
       
    get propertyType(): string {
        return this._data['property_type'];
    }
    set propertyType(value: string) {
        this._data['property_type'] = value;
    }
        
    get dealType(): DealType {
        return this._data['deal_type'];
    }
    set dealType(value: DealType) {
        this._data['deal_type'] = value;
    }

    get media(): RealEstateMedia {
        return this._data['media'];
    }
    set media(value: RealEstateMedia) {
        this._data['media'] = value;
    }
        
    get regionId(): string {
        return this._data['region_id'];
    }
    set regionId(value: string) {
        this._data['region_id'] = value;
    }
        
    get cityId(): string {
        return this._data['city_id'];
    }
    set cityId(value: string) {
        this._data['city_id'] = value;
    }
        
    get neighbourhoodId(): string {
        return this._data['neighbourhood_id'];
    }
    set neighbourhoodId(value: string) {
        this._data['neighbourhood_id'] = value;
    }
        
    get streetId(): string {
        return this._data['street_id'];
    }
    set streetId(value: string) {
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
       
    get bathrooms(): number {
        return this._data['bathrooms'];
    }
    set bathrooms(value: number) {
        this._data['bathrooms'] = value;
    }
       
    get toilets(): number {
        return this._data['toilets'];
    }
    set toilets(value: number) {
        this._data['toilets'] = value;
    }

    get isExclusive(): boolean {
        return this._data['is_exclusive'];
    }
    set isExclusive(value: boolean) {
        this._data['is_exclusive'] = value;
    }
       
    get parkings(): number {
        return this._data['parkings'];
    }
    set parkings(value: number) {
        this._data['parkings'] = value;
    }
       
    get area(): number {
        return this._data['area'];
    }
    set area(value: number) {
        this._data['area'] = value;
    }
       
    get plotArea(): number {
        return this._data['plot_area'];
    }
    set plotArea(value: number) {
        this._data['plot_area'] = value;
    }
       
    get gardenArea(): number {
        return this._data['garden_area'];
    }
    set gardenArea(value: number) {
        this._data['garden_area'] = value;
    }
    
    get price(): number {
        return this._data['price'];
    }
    set price(value: number) {
        this._data['price'] = value;
    }
       
    get priceChange(): number {
        return this._data['price_change'];
    }
    set priceChange(value: number) {
        this._data['price_change'] = value;
    }
       
    get unitPrice(): number {
        return this._data['unit_price'];
    }
    set unitPrice(value: number) {
        this._data['unit_price'] = value;
    }
       
    get publishDate(): Date {
        return this._data['publish_date'];
    }
    set publishDate(value: Date) {
        this._data['publish_date'] = value;
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

    getAttributes(dictionary?: any, icons?: any): Array<DisplayListItem> {
        let attributes = new Array<DisplayListItem>();

        let tanslate = (key) => {
            if (dictionary == undefined && dictionary[key] == undefined) {
                return key;
            }
            
            return dictionary[key];
        };

        let sqm = tanslate("sqm");
        
        if (this.rooms != 0) {
            attributes.push(new DisplayListItem(tanslate("rooms"), this.rooms.toString()));
        }
        
        if (this.area != 0) {
            attributes.push(new DisplayListItem(tanslate("area"), sqm.replace("{{value}}", this.area.toString())));
        }
        
        if (this.floor != 0) {
            attributes.push(new DisplayListItem(tanslate("floor"), this.floor.toString()));
        }
        
        if (this.floors != 0) {
            attributes.push(new DisplayListItem(tanslate("floors"), this.floors.toString()));
        }
        
        if (this.parkings != 0) {
            attributes.push(new DisplayListItem(tanslate("parkings"), this.parkings.toString()));
        }
        
        if (this.plotArea != 0) {
            attributes.push(new DisplayListItem(tanslate("plot_area"), sqm.replace("{{value}}", this.plotArea.toString())));
        }
        
        if (this.bedrooms != 0) {
            attributes.push(new DisplayListItem(tanslate("bedrooms"), this.bedrooms.toString()));
        }
        
        if (this.bathrooms != 0) {
            attributes.push(new DisplayListItem(tanslate("bathrooms"), this.bathrooms.toString()));
        }
        
        if (this.toilets != 0) {
            attributes.push(new DisplayListItem(tanslate("toilets"), this.toilets.toString()));
        }
        
        if (this.plotArea != 0) {
            attributes.push(new DisplayListItem(tanslate("garden_area"), sqm.replace("{{value}}", this.plotArea.toString())));
        }

        return attributes;
    }

    setOptionValue(option: string, value: boolean): void {
        this._data[option] = value
    }
}