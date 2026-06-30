import { Fragment, type ReactNode } from "react";

const METRIC_PATTERN =
  /(\d[\d,]*(?:\.\d+)?(?:%|x|K(?: img\/s)?|\+)?|~[\d,]+(?:K(?: img\/s)?)?)/g;

function isMetric(part: string): boolean {
  return /^(?:\d[\d,]*(?:\.\d+)?(?:%|x|K(?: img\/s)?|\+)?|~[\d,]+(?:K(?: img\/s)?)?)$/.test(
    part,
  );
}

export function highlightMetrics(text: string): ReactNode {
  const parts = text.split(METRIC_PATTERN).filter(Boolean);

  return parts.map((part, index) => {
    if (isMetric(part)) {
      return (
        <span key={index} className="font-semibold text-highlight">
          {part}
        </span>
      );
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}
