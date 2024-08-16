import { Loading } from "../loading";

export function Content({ error, loading, data, children, errorMessage, renderContent }) {
  if (error) return <p>{errorMessage}</p>;
  if (loading) return <Loading />;
  if (data) return renderContent(data);
  return null;
}
