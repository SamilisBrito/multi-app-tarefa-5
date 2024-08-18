import { useEffect } from "react";

export function Head(props) {
  useEffect(() => {
    document.title = "Multi App | " + props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description);
  }, [props]);

  return <></>;
}
