import MiniCssExtractPlugin = require("mini-css-extract-plugin");
import { CleanWebpackPlugin } from "clean-webpack-plugin";
export declare const mode: string;
export declare const entry: string;
export declare namespace output {
    const path: string;
    const publicPath: string;
    const filename: string;
    const library: any;
    const libraryTarget: string;
    const clean: boolean;
}
export declare namespace resolve {
    const extensions: string[];
    const plugins: any[];
}
export declare namespace module {
    const rules: ({
        test: RegExp;
        use: string[];
        exclude?: undefined;
        loader?: undefined;
        type?: undefined;
    } | {
        test: RegExp;
        use: string[];
        exclude: RegExp;
        loader?: undefined;
        type?: undefined;
    } | {
        test: RegExp;
        exclude: string;
        use: string;
        loader?: undefined;
        type?: undefined;
    } | {
        test: RegExp;
        loader: string;
        use?: undefined;
        exclude?: undefined;
        type?: undefined;
    } | {
        test: RegExp;
        type: string;
        use?: undefined;
        exclude?: undefined;
        loader?: undefined;
    })[];
}
declare const plugins_1: (MiniCssExtractPlugin | CleanWebpackPlugin)[];
export { plugins_1 as plugins };
export declare namespace optimization {
    const minimize: boolean;
}
