import { useLocation } from "react-router-dom";
import CatalogOverview from "../components/catalog/CatalogOverview";
import CatalogSearch from "../components/catalog/CatalogSearch";

export default function CatalogPage() {
  const location = useLocation();
  return (
    <div className="container mx-auto py-2 md:py-4 px-2 md:px-0">
      {location.search === "" ? <CatalogOverview /> : <CatalogSearch />}
    </div>
  );
}
