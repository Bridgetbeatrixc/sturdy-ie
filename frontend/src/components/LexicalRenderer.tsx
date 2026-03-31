import React from "react";
import Link from "next/link";

const API_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL ?? "http://localhost:3001"
).replace(/\/$/, "");

function resolveUrl(url?: string) {
  if (!url) return "";
  return url.startsWith("http") ? url : `${API_URL}${url}`;
}

type LexicalNode = {
  type: string;
  text?: string;
  format?: number;
  url?: string;
  tag?: string;
  listType?: string;
  checked?: boolean;
  fields?: { url?: string; newTab?: boolean };
  value?: {
    url?: string;
    alt?: string;
    filename?: string;
    mimeType?: string;
    width?: number;
    height?: number;
  };
  relationTo?: string;
  children?: LexicalNode[];
};

function serializeNode(
  node: LexicalNode,
  index: number,
  parentListType?: string,
): React.ReactNode {
  switch (node.type) {
    case "text": {
      let content: React.ReactNode = node.text ?? "";
      if (node.format) {
        if (node.format & 4) content = <s>{content}</s>;
        if (node.format & 8) content = <u>{content}</u>;
        if (node.format & 16)
          content = (
            <code className="bg-zinc-800 px-1 rounded text-sm font-mono">
              {content}
            </code>
          );
        if (node.format & 2) content = <em>{content}</em>;
        if (node.format & 1) content = <strong>{content}</strong>;
      }
      return <React.Fragment key={index}>{content}</React.Fragment>;
    }

    case "linebreak":
      return <br key={index} />;

    case "paragraph": {
      const isEmpty =
        !node.children?.length ||
        (node.children.length === 1 && node.children[0].type === "linebreak");
      return (
        <p key={index}>
          {isEmpty ? (
            <br />
          ) : (
            node.children?.map((child, i) => serializeNode(child, i))
          )}
        </p>
      );
    }

    case "link": {
      const href = node.fields?.url ?? node.url ?? "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          key={index}
          href={href}
          className="underline text-lime-400 hover:text-lime-300 transition-colors"
          target={isExternal || node.fields?.newTab ? "_blank" : undefined}
          rel={
            isExternal || node.fields?.newTab
              ? "noopener noreferrer"
              : undefined
          }
        >
          {node.children?.map((child, i) => serializeNode(child, i))}
        </a>
      );
    }

    case "list": {
      const isCheck = node.listType === "check";
      const Tag = node.listType === "number" ? "ol" : "ul";
      const cls = isCheck
        ? "list-none pl-0 space-y-1"
        : node.listType === "number"
          ? "list-decimal list-inside space-y-1 marker:[color:#c5f018]"
          : "list-disc list-inside space-y-1 marker:[color:#c5f018]";
      return (
        <Tag key={index} className={cls}>
          {node.children?.map((child, i) =>
            serializeNode(child, i, node.listType),
          )}
        </Tag>
      );
    }

    case "listitem": {
      if (parentListType === "check") {
        return (
          <li key={index} className="flex items-center gap-2">
            <span
              className="flex-shrink-0 w-4 h-4 rounded-sm border-2 flex items-center justify-center"
              style={{
                borderColor: "#c5f018",
                backgroundColor: node.checked ? "#c5f018" : "transparent",
              }}
            >
              {node.checked && (
                <svg
                  viewBox="0 0 10 8"
                  className="w-2.5 h-2.5"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="1 4 3.5 6.5 9 1" />
                </svg>
              )}
            </span>
            <span className={node.checked ? "line-through text-zinc-500" : ""}>
              {node.children?.map((child, i) => serializeNode(child, i))}
            </span>
          </li>
        );
      }
      return (
        <li key={index} className="marker:[color:#c5f018]">
          {node.children?.map((child, i) => serializeNode(child, i))}
        </li>
      );
    }

    case "heading": {
      const tag = node.tag ?? "h2";
      return React.createElement(
        tag,
        { key: index, className: "font-semibold text-white" },
        node.children?.map((child, i) => serializeNode(child, i)),
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

    case "horizontalrule":
      return <hr key={index} className="border-zinc-700 my-8" />;

    case "upload": {
      const url = resolveUrl(node.value?.url);
      const alt = node.value?.alt ?? node.value?.filename ?? "";
      const mime = node.value?.mimeType ?? "";

      if (!url) return null;

      // Video file
      if (mime.startsWith("video/")) {
        return (
          <video
            key={index}
            src={url}
            controls
            className="my-4 max-w-full rounded-lg"
          />
        );
      }

      if (!mime.startsWith("image/")) {
        return (
          <a
            key={index}
            href={url}
            download
            className="inline-flex items-center gap-2 my-2 text-lime-400 underline hover:text-lime-300"
          >
            {node.value?.filename ?? "Download file"}
          </a>
        );
      }

      // Image
      return (
        <img
          key={index}
          src={url}
          alt={alt}
          width={node.value?.width}
          height={node.value?.height}
          className="my-4 max-w-full rounded-lg"
        />
      );
    }

    case "relationship": {
      const val = node.value as
        | {
            url?: string;
            alt?: string;
            filename?: string;
            title?: string;
            name?: string;
            slug?: string;
            id?: string | number;
          }
        | undefined;
      const relationTo = node.relationTo;

      if (!val) return null;

      if (relationTo === "media" && val.url) {
        return (
          <img
            key={index}
            src={resolveUrl(val.url)}
            alt={val.alt ?? val.filename ?? ""}
            className="my-4 max-w-full rounded-lg"
          />
        );
      }

      const label = val.title ?? val.name ?? val.slug ?? String(val.id ?? "");
      const slug = val.slug;
      if (slug && relationTo) {
        return (
          <Link
            key={index}
            href={`/${relationTo}/${slug}`}
            className="inline-block my-2 text-lime-400 underline hover:text-lime-300"
          >
            {label}
          </Link>
        );
      }

      return (
        <span key={index} className="text-zinc-400">
          {label}
        </span>
      );
    }

    default:
      return (
        <React.Fragment key={index}>
          {node.children?.map((child, i) => serializeNode(child, i))}
        </React.Fragment>
      );
  }
}

export function LexicalRenderer({
  data,
}: {
  data: { root: { children: LexicalNode[] } };
}) {
  const children = data?.root?.children as LexicalNode[] | undefined;
  if (!children?.length) return null;

  return (
    <div className="space-y-2">
      {children.map((node, i) => serializeNode(node, i))}
    </div>
  );
}
