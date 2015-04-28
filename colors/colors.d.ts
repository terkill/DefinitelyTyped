// Type definitions for Colors.js 0.6.0-1
// Project: https://github.com/Marak/colors.js
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "colors" {
    export function setTheme(theme:any):any;

    export function black(text: string): string;
    export function red(text: string): string;
    export function green(text: string): string;
    export function yellow(text: string): string;
    export function blue(text: string): string;
    export function magenta(text: string): string;
    export function cyan(text: string): string;
    export function white(text: string): string;
    export function gray(text: string): string;
    export function grey(text: string): string;
}

interface String {
    // text colors
    black:string;
    red:string;
    green:string;
    yellow:string;
    blue:string;
    magenta:string;
    cyan:string;
    white:string;
    grey:string;
    // background colors
    bgBlack:string;
    bgRed:string;
    bgGreen:string;
    bgYellow:string;
    bgBlue:string;
    bgMagenta:string;
    bgCyan:string;
    bgWhite:string;
    // styles
    reset:string;
    bold:string;
    dim:string;
    italic:string;
    underline:string;
    inverse:string;
    hidden:string;
    strikethrough:string;
    // extras
    rainbow:string;
    zebra:string;
    america:string;
    trap:string;
    random:string;
}
