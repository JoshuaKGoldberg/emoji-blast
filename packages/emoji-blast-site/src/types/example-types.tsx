export interface Example {
    name: string;
    blurb: string;
    codeSnippet: string;
    explosionFunct: () => void;
    disableButtonTime?: number;
};