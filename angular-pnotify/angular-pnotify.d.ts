// Type definitions for angular-notify
// Project: https://github.com/jacqueslareau/angular-pnotify
// Definitions by: Simon Bang Terkildsen <https://github.com/terkill>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ng.pnotify {
    interface INotificationService {
        getSettings(): { [key: string]: any };

        notice(content: any, stack?: string): void;
        info(content: string, stack?: string): void;
        success(content: string, stack?: string): void;
        error(content: string, stack?: string): void;
        notifyWithDefaults(content: string, stack?: string): void;

        notify(hash: any): void;
    }

    interface INotificationServiceProvider {
        setDefaults(defaults: { [key: string]: any }): void;
        setStack(name: string: addCLass: string, strack: any): void;
        setDefaultStack(name: string);
    }
}