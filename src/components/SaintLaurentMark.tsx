type SaintLaurentMarkProps = {
  className?: string;
};

export function SaintLaurentMark({ className = "" }: SaintLaurentMarkProps) {
  return <span className={`ysl-wordmark ${className}`}>SAINT LAURENT</span>;
}
