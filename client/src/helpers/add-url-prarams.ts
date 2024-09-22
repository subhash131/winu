export const addUrlParams = ({
  param,
  value = "",
}: {
  param: string;
  value?: string;
}) => {
  const url = new URL(window.location.toString());
  url.searchParams.set(param, value);
  window.history.pushState({}, "", url);
};
