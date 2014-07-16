// Type definitions for Angular Translate Partial Loader (angular-translate-loader-partial module)
// Project: https://github.com/angular-translate/bower-angular-translate-loader-partial
// Definitions by: Simon Bang Terkildsen <https://github.com/terkill>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ng.translate {
	interface ITranslatePartialLoaderService {
		addPart(name: string): ITranslatePartialLoaderProvider;
		deletePart(name: string, removeData?: boolean): ITranslatePartialLoaderService;
		isPartAvailable(name: string): boolean;
	}

	interface ITranslatePartialLoaderProvider extends ng.IServiceProvider {
		addPart(name: string): ITranslatePartialLoaderProvider;
		setPart(lang: string, part: string, table: Object): ITranslatePartialLoaderProvider;
		deletePart(name: string): ITranslatePartialLoaderProvider;
		isPartAvailable(name: string): boolean;
	}
}