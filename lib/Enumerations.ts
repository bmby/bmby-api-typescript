export enum CrmTaskPriority  {
    Normal = 1,
    High = 2,
    Medium = 3,
    Tohandle = 4
}

export enum EntityType  {
    Property = 1,
    Customer = 2,
    CrmTask = 3,
    Query = 4
}

export enum ContactType {
    Customer = 1,
    PropertyOwner = 2
}

export enum CrmTaskStatus {
    New = 1,
    Completed = 2,
    Canceled = 3
}

export enum CrmTaskSubType {
    Unknown = 0,
    Incoming = 1,
    Outgoing = 2,
    Hidden = 3
}

export enum PropertyTypeCategory
{
    Residencial = 1,
    Commercial = 2,
    Plot = 3
}

export enum CrmTaskType {
    Unknown = 0,
    Task = 1,
    Appointment = 2,
    Comment = 3,
    Sms = 4,
    Phone = 5,
    Email = 6,
    DirectMailing = 7,
    ServiceRequest = 8,
    MultiTask = 9,
    Lead = 10,
    ErrorRequest = 11,
    LeadCopy = 12,
    AppointmentCopy = 13,
    TaskCopy = 14,
    SmsCopy = 15,
    PhoneCopy = 16,
    EmailCopy = 17,
    CommentCopy = 18
}

export enum CustomerReaction {
    Unknown = 0,
    Likes = 1,
    Dislikes = 2,
    NotDecidedYet = 3
}

export enum DealType {
    Unknown = 0,
    Sale = 1,
    Rent = 2
}

export enum FileAccess {
    Unknown = 0,
    Public = 1,
    Private = 2
}

export enum NotificationInterval {
    Disabled = 0,
    Online = 1,
    Hourly = 2,
    Daily = 3
}

export enum NotificationScope {
    None = 0,
    User = 1,
    Project = 2
}

export enum PropertyCatalog {
    Unknown = 0,
    Repository = 1,
    Agency = 2
}

export enum RealEstateMedia {
    Unknown = 0,
    Yad2 = 1,
    WinWin = 2,
    Madas = 3
}

export enum RoommateGender {
    Unknown = 0,
    Male = 1,
    Female = 2
}

export enum VisitStatus {
    Unknown = 0,
    Visited = 1,
    NotVisited = 2
}

export enum WindDirection {
    Unknown = 0,
    North = 1,
    South = 2,
    East = 3,
    West = 4
}