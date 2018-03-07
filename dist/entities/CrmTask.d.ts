import { BmbyEntity, Contact } from "../index";
import { CrmTaskType, CrmTaskSubType, CrmTaskStatus, CrmTaskPriority } from "../Enumerations";
export declare class CrmTask extends BmbyEntity {
    constructor();
    id: string;
    propertyId: string;
    customerId: string;
    taskType: CrmTaskType;
    taskSubType: CrmTaskSubType;
    status: CrmTaskStatus;
    priority: CrmTaskPriority;
    meetingStartDate: Date;
    meetingEndDate: Date;
    taskDate: Date;
    participants: Array<Contact>;
}
