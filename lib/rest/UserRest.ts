import { BmbyRest } from './BmbyRest';
import { User } from '../entities/User';
import { NotificationSetting } from '../entities/NotificationSetting';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { QueryParams } from '../QueryParams';
import { Platform } from '../Enumerations';
import { TimeLineEvent } from '../entities/TimeLineEvent';
import { PaginatedList } from '../PaginatedList';

export class UserRest extends BmbyRest {
    storeToken(token: string, platorm: Platform): Promise<BmbyHttpResponse> {
        return this.post("/users/storetoken", { "token": token, "platorm": platorm }, true, BmbyContentType.Json);
    }

    me(): Promise<User> {
        let result = this.get("/users/me", true);

        return new Promise<User>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let property = new User();
                    property.data = response.data;

                    resolve(property);
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    timeline(params: QueryParams): Promise<PaginatedList<TimeLineEvent>> {
        var queryString = params != null ? params.queryString() : "";
        let result = this.get("/users/timeline" + queryString, true);

        return new Promise<PaginatedList<TimeLineEvent>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let events = new Array<TimeLineEvent>();
                    
                    for (let i in response.data.items) {
                        let timeLineEvent = new TimeLineEvent();
                        timeLineEvent.data = response.data.items[i];
                        events.push(timeLineEvent);
                    }

                    response.data.items = events;

                    resolve(new PaginatedList<TimeLineEvent>(response.data));
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    notificationSettings(): Promise<Array<NotificationSetting>> {
        let result = this.get("/users/notificationsettings", true);

        return new Promise<Array<NotificationSetting>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let settings = new Array<NotificationSetting>()

                    response.data.forEach(data => {
                        let setting = new NotificationSetting();
                        setting.data = data;
                        settings.push(setting);
                    });

                    resolve(settings);
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    setEventAsDone(eventId: string): Promise<BmbyHttpResponse> {
        return this.put("users/timeline/done", { "event_id": eventId, "snooze_time": null }, true);
    }

    setEventAsDismissed(eventId: string): Promise<BmbyHttpResponse> {
        return this.put("users/timeline/dismiss", { "event_id": eventId, "snooze_time": null }, true);
    }

    snoozeEvent(eventId: string, snoozeDate: Date): Promise<BmbyHttpResponse> {
        return this.put("users/timeline/snooze", { "event_id": eventId, "snooze_time": null }, true);
    }
}
