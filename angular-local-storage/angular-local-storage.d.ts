// Type definitions for angular-local-storage
// Project: https://github.com/grevory/angular-local-storage
// Definitions by: Simon Bang Terkildsen <https://github.com/terkill>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ng.LocalStorage {
	interface ILocalStorageService {
		isSupported: boolean;
	    getStorageType(): string;
	    set(key: string, value: any): boolean;
	    get(key: string): any;
		keys(): string[];
		remove(key: string): boolean;
		clearAll(regularExpression: string): boolean;
		bind(scope: ng.IScope, key: string, def: any): void;
		deriveKey(key: string): string;
		cookie: {
			set(key: string, value: any): boolean;
	    	get(key: string): any;
			remove(key: string): void;
			clearAll(): void;
  		};
	}

	interface ILocalStorageProvider extends ng.IServiceProvider {
		setPrefix(prefix: string): void;
		setStorageType(storageType: string): void;
		setStorageCookie(expiry: number, path: string): void;
		setStorageCookieDomain(domain: string): void;
		setNotify(itemSet: boolean, itemRemove: boolean): void;
	}
}