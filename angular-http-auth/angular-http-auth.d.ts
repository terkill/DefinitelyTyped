// Type definitions for HTTP Auth Interceptor (angular-http-auth module)
// Project: https://github.com/witoldsz/angular-http-auth
// Definitions by: Simon Bang Terkildsen <https://github.com/terkill>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ng.httpAuth {
	interface IAuthService {
		loginConfirmed(data?: any, configUpdater?: (IRequestConfig) => IRequestConfig);
		loginCancelled(data?: any, reason?: any);
	}
}