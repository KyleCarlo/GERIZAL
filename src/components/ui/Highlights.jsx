export function Good({ children }) {
  return <span className="font-bold text-emerald-400">{children}</span>;
}

export function Bad({ children }) {
  return <span className="font-bold text-red-400">{children}</span>;
}
