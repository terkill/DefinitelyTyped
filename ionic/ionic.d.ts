// Type definitions for Ionic
// Project: https://github.com/driftyco/ionic
// Definitions by: Simon Bang Terkildsen <https://github.com/terkill>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ionic {

    /*
     * Its by no mean a full blow interface
     * ~ add when ever needed cheers!
     */
    interface Ionic {
        animationFrameThrottle(fn: any): void;
        Platform: IonicPlatform;
    }

    interface IonicPlatform {
        device(): any;
        isWebView(): boolean;
        isIPad(): boolean;
        isIOS(): boolean;
        isAndroid(): boolean;
        isWindowsPhone(): boolean;
        platform(): string;
        version(): number;
        exitApp(): void;
        showStatusBar(shouldShow: boolean): void;
        fullScreen(showFullScreen?: boolean, showStatusBar?: boolean): any;
        isReady: boolean;
        isFullScreen: boolean;
        platforms: string[];
        grade: string;

    }

    interface IButtonSpec {
        text: string;
        type: string;
        onTap(e: Event): any;
    }

    interface IPopupOptions {
        title: string;
        subTitle?: string;
        template?: string;
        templateUrl?: string;
    }

    interface IPopupShowOptions extends IPopupOptions {
        scope?: ng.IScope;
        buttons: IButtonSpec[];
    }

    interface IPopupAlertOptions extends IPopupOptions {
        okText?: string;
        okType?: string;
    }

    interface IPopupConfirmOptions extends IPopupAlertOptions {
        cancelText?: string;
        cancelType?: string;
    }

    interface IPopupPromptOptions extends IPopupConfirmOptions {
        inputType?: string;
        inputPlaceholder?: string;
    }

    interface IPopupPromise<T> extends ng.IPromise<T> {
        close(): void;
    }

    interface IPopup {
        show(options: IPopupShowOptions): IPopupPromise<any>;
        alert(options: IPopupAlertOptions): IPopupPromise<any>;
        confirm(options: IPopupConfirmOptions): IPopupPromise<boolean>;
        prompt(options: IPopupPromptOptions): IPopupPromise<any>;
    }
}

/*
 * Ionic instance
 */
declare var ionic: ionic.Ionic;
