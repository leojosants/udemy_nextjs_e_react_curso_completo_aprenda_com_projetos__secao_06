import { Url } from "next/dist/shared/lib/router/router";

export interface ButtonProps {
    text: string;
    href?: Url; // href?: string;
    onClick?: (e: any) => void;
};