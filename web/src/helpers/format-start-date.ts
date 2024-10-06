export function formatStartDate({
  includeYear = true,
  startDate,
}: {
  startDate: string;
  includeYear?: boolean;
}) {
  const date = new Date(startDate).getUTCDate();
  const month = new Date(startDate).toLocaleString("en-us", {
    month: "short",
  });
  const year = new Date(startDate).toLocaleString("en-us", {
    year: "numeric",
  });
  return includeYear
    ? `${date} ${month} ${year}`.toUpperCase()
    : `${date} ${month}`.toUpperCase();
}
