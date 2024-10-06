export function formatEndDate({
  endDate,
  includeYear = true,
}: {
  endDate: string;
  includeYear?: boolean;
}) {
  const date = new Date(endDate).getUTCDate();
  const month = new Date(endDate).toLocaleString("en-us", {
    month: "short",
  });
  const year = new Date(endDate).toLocaleString("en-us", {
    year: "numeric",
  });
  return includeYear
    ? `${date} ${month} ${year}`.toUpperCase()
    : `${date} ${month}`.toUpperCase();
}
