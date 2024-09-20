import { useLocation } from "react-router-dom";
import CatalogOverview from "../components/catalog/CatalogOverview";

export default function CatalogPage() {
  const location = useLocation();
  return (
    <div className="container mx-auto p-4">
      {location.search === "" ? <CatalogOverview /> : <>Catalog Search</>}
    </div>
  );
}
