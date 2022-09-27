import { LitElement } from "lit";
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResult;
    title: string;
    opened: boolean;
    icon: string;
    private onIconClickHandler;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-element": MyElement;
    }
}
