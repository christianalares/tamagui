import { Variable } from '@tamagui/core';
import { lightColors } from './tokens';
interface SubTheme {
    background: Variable<any> | string;
    backgroundStrong: Variable<any> | string;
    backgroundSoft: Variable<any> | string;
    backgroundHover: Variable<any> | string;
    backgroundPress: Variable<any> | string;
    backgroundFocus: Variable<any> | string;
    backgroundTransparent: Variable<any> | string;
    color: Variable<any> | string;
    colorHover: Variable<any> | string;
    colorPress: Variable<any> | string;
    colorFocus: Variable<any> | string;
    colorTranslucent: Variable<any> | string;
    colorMid: Variable<any> | string;
    shadowColor: Variable<any> | string;
    shadowColorHover: Variable<any> | string;
    shadowColorPress: Variable<any> | string;
    shadowColorFocus: Variable<any> | string;
    borderColor: Variable<any> | string;
    borderColorHover: Variable<any> | string;
    borderColorPress: Variable<any> | string;
    borderColorFocus: Variable<any> | string;
}
declare type BaseTheme = {
    [key in keyof typeof lightColors | keyof SubTheme]: Variable<string>;
};
declare const light: BaseTheme;
export declare const colorSchemes: readonly [{
    readonly name: "blue";
    readonly colors: BaseTheme;
    readonly darkColors: BaseTheme;
}, {
    readonly name: "gray";
    readonly colors: BaseTheme;
    readonly darkColors: BaseTheme;
}, {
    readonly name: "green";
    readonly colors: BaseTheme;
    readonly darkColors: BaseTheme;
}, {
    readonly name: "orange";
    readonly colors: BaseTheme;
    readonly darkColors: BaseTheme;
}, {
    readonly name: "pink";
    readonly colors: BaseTheme;
    readonly darkColors: BaseTheme;
}, {
    readonly name: "purple";
    readonly colors: BaseTheme;
    readonly darkColors: BaseTheme;
}, {
    readonly name: "red";
    readonly colors: BaseTheme;
    readonly darkColors: BaseTheme;
}, {
    readonly name: "yellow";
    readonly colors: BaseTheme;
    readonly darkColors: BaseTheme;
}];
export declare type ColorNames = typeof colorSchemes[number]['name'];
export declare const colorNames: ColorNames[];
declare type TypedTheme = typeof light;
declare type TypedThemes = {
    [key in keyof typeof allThemes]: TypedTheme;
};
declare const allThemes: {
    readonly blue: SubTheme;
    readonly gray: SubTheme;
    readonly green: SubTheme;
    readonly orange: SubTheme;
    readonly pink: SubTheme;
    readonly purple: SubTheme;
    readonly red: SubTheme;
    readonly yellow: SubTheme;
    readonly light_blue_alt1: SubTheme;
    readonly light_blue_alt2: SubTheme;
    readonly light_gray_alt1: SubTheme;
    readonly light_gray_alt2: SubTheme;
    readonly light_green_alt1: SubTheme;
    readonly light_green_alt2: SubTheme;
    readonly light_orange_alt1: SubTheme;
    readonly light_orange_alt2: SubTheme;
    readonly light_pink_alt1: SubTheme;
    readonly light_pink_alt2: SubTheme;
    readonly light_purple_alt1: SubTheme;
    readonly light_purple_alt2: SubTheme;
    readonly light_red_alt1: SubTheme;
    readonly light_red_alt2: SubTheme;
    readonly light_yellow_alt1: SubTheme;
    readonly light_yellow_alt2: SubTheme;
    readonly dark_blue_alt1: SubTheme;
    readonly dark_blue_alt2: SubTheme;
    readonly dark_gray_alt1: SubTheme;
    readonly dark_gray_alt2: SubTheme;
    readonly dark_green_alt1: SubTheme;
    readonly dark_green_alt2: SubTheme;
    readonly dark_orange_alt1: SubTheme;
    readonly dark_orange_alt2: SubTheme;
    readonly dark_pink_alt1: SubTheme;
    readonly dark_pink_alt2: SubTheme;
    readonly dark_purple_alt1: SubTheme;
    readonly dark_purple_alt2: SubTheme;
    readonly dark_red_alt1: SubTheme;
    readonly dark_red_alt2: SubTheme;
    readonly dark_yellow_alt1: SubTheme;
    readonly dark_yellow_alt2: SubTheme;
    readonly dark: BaseTheme;
    readonly dark_active: SubTheme;
    readonly dark_Card: SubTheme;
    readonly dark_DrawerFrame: SubTheme;
    readonly dark_SliderTrack: SubTheme;
    readonly dark_SliderTrackActive: SubTheme;
    readonly dark_Switch: SubTheme;
    readonly dark_SwitchThumb: SubTheme;
    readonly dark_Button: SubTheme;
    readonly dark_alt1: SubTheme;
    readonly dark_alt2: SubTheme;
    readonly dark_darker: SubTheme;
    readonly light: BaseTheme;
    readonly light_active: SubTheme;
    readonly light_Card: SubTheme;
    readonly light_SliderTrack: SubTheme;
    readonly light_SliderTrackActive: SubTheme;
    readonly light_Switch: SubTheme;
    readonly light_SwitchThumb: SubTheme;
    readonly light_DrawerFrame: SubTheme;
    readonly light_alt1: SubTheme;
    readonly light_alt2: SubTheme;
    readonly light_darker: SubTheme;
};
export declare const themes: TypedThemes;
export {};
//# sourceMappingURL=themes.d.ts.map