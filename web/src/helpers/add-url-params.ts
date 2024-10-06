export const addUrlParams = ({
  param,
  value = "",
}: {
  param: string;
  value?: string;
}) => {
  try {
    // Ensure the window object exists (for SSR environments like Next.js)
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);

      // Set or update the query parameter
      url.searchParams.set(param, value);

      // Update the URL in the address bar without reloading the page
      window.history.pushState({}, "", url.toString());
    } else {
      console.error("Window object is not available.");
    }
  } catch (err) {
    console.error("Error updating URL parameters: ", err);
  }
};
