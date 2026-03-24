import React from "react";
import type { RichTextNode } from "@/lib/hero";

type LexicalNode = {
    type: string;
    text?: string;
    format?: number;
    url?: string;
    tag?: string;
    fields?: { url?: string };
    children?: LexicalNode[];
};

function serializeNode(node: LexicalNode, index: number): React.ReactNode {
    switch (node.type) {
        case "text": {
            let content: React.ReactNode = node.text ?? "";
            if (node.format) {
                if (node.format & 1) content = <strong key={index}>{content}</strong>;
                if (node.format & 2) content = <em key={index}>{content}</em>;
                if (node.format & 8) content = <u key={index}>{content}</u>;
            }
            return <React.Fragment key={index}>{content}</React.Fragment>;
        }

        case "paragraph": {
            return (
                <p key={index}>
                    {node.children?.map((child, i) => serializeNode(child, i))}
                </p>
            );
        }

        case "link": {
            const href = node.fields?.url ?? node.url ?? "#";
            return (
                <a
                    key={index}
                    href={href}
                    className="underline text-lime-400 hover:text-lime-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {node.children?.map((child, i) => serializeNode(child, i))}
                </a>
            );
        }

        case "list": {
            return (
                <ul key={index} className="list-disc list-inside space-y-1">
                    {node.children?.map((child, i) => serializeNode(child, i))}
                </ul>
            );
        }

        case "listitem": {
            return (
                <li key={index}>
                    {node.children?.map((child, i) => serializeNode(child, i))}
                </li>
            );
        }

        case "heading": {
            const tag = node.tag ?? "h2";
            const headingMap: Record<string, React.ElementType> = {
                h1: "h1",
                h2: "h2",
                h3: "h3",
                h4: "h4",
                h5: "h5",
                h6: "h6",
            };
            const Tag = headingMap[tag] ?? "h2";
            return React.createElement(
                Tag,
                { key: index, className: "font-semibold text-white" },
                node.children?.map((child, i) => serializeNode(child, i))
            );
        }

        default: {
            return (
                <React.Fragment key={index}>
                    {node.children?.map((child, i) => serializeNode(child, i))}
                </React.Fragment>
            );
        }
    }
}

export function LexicalRenderer({ data }: { data: RichTextNode }) {
    const children = data?.root?.children as LexicalNode[] | undefined;
    if (!children?.length) return null;

    return (
        <div className="space-y-2">
            {children.map((node, i) => serializeNode(node, i))}
        </div>
    );
}