// Custom type declarations for the project

// Declare module for next/link
declare module 'next/link' {
    import { LinkProps as NextLinkProps } from 'next/link';
    import { ComponentType } from 'react';

    const Link: ComponentType<NextLinkProps>;
    export default Link;
}

// Declare module for lucide-react
declare module 'lucide-react' {
    import { FC, SVGProps } from 'react';

    export interface IconProps extends SVGProps<SVGSVGElement> {
        size?: string | number;
        color?: string;
        strokeWidth?: string | number;
    }

    export const Star: FC<IconProps>;
    // Add other icons as needed
}

// Declare JSX namespace to fix "JSX element implicitly has type 'any'" errors
declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
} 