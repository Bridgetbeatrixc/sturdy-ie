import React from "react";

type LexicalNode = {
  type: string;
  text?: string;
  format?: number;
  url?: string;
  tag?: string;
  listType?: string;
  fields?: { url?: string };
  children?: LexicalNode[];
};

function serializeNode(node: LexicalNode, index: number): React.ReactNode {
  switch (node.type) {
    case "text": {
      let content: React.ReactNode = node.text ?? "";
      if (node.format) {
        if (node.format & 4)  content = <s>{content}</s>;
        if (node.format & 8)  content = <u>{content}</u>;
        if (node.format & 16) content = <code className="bg-zinc-800 px-1 rounded text-sm">{content}</code>;
        if (node.format & 2)  content = <em>{content}</em>;
        if (node.format & 1)  content = <strong>{content}</strong>;
      }
      return <React.Fragment key={index}>{content}</React.Fragment>;
    }

    case "paragraph":
      return (
        <p key={index}>
          {node.children?.map((child, i) => serializeNode(child, i))}
        </p>
      );

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
      const Tag = node.listType === "number" ? "ol" : "ul";
      const cls = node.listType === "number"
        ? "list-decimal list-inside space-y-1"
        : "list-disc list-inside space-y-1";
      return (
        <Tag key={index} className={cls}>
          {node.children?.map((child, i) => serializeNode(child, i))}
        </Tag>
      );
    }

    case "listitem":
      return (
        <li key={index}>
          {node.children?.map((child, i) => serializeNode(child, i))}
        </li>
      );

    case "heading": {
      const tag = node.tag ?? "h2";
      return React.createElement(
        tag,
        { key: index, className: "font-semibold text-white" },
        node.children?.map((child, i) => serializeNode(child, i))
      );
    }

    case "quote":
      return (
        <blockquote
          key={index}
          className="border-l-4 border-lime-400 pl-4 italic text-zinc-300"
        >
          {node.children?.map((child, i) => serializeNode(child, i))}
        </blockquote>
      );

    default:
      return (
        <React.Fragment key={index}>
          {node.children?.map((child, i) => serializeNode(child, i))}
        </React.Fragment>
      );
  }
}

export function LexicalRenderer({ data }: { data: { root: { children: LexicalNode[] } } }) {
  const children = data?.root?.children as LexicalNode[] | undefined;
  if (!children?.length) return null;

  return (
    <div className="space-y-2">
      {children.map((node, i) => serializeNode(node, i))}
    </div>
  );
}