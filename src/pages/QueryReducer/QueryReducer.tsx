import React, { useLayoutEffect } from "react";
import { useQueryReducer } from "react-router-use-location-state";
import { emptyFilters, filterReducer } from "./filterReducer";
import { FilterDisplay } from "./FilterDisplay";
import { availableFilters } from "./availableFilters";

export default function QueryReducerDemo() {
  const [activeFilters, filtersDispatch] = useQueryReducer(
    "filters",
    filterReducer,
    emptyFilters
  );

  useLayoutEffect(() => {
    filtersDispatch(
      {
        type: "add",
        toAdd: ["boots", "running"]
      }
    );
  }, [filtersDispatch]);

  return (
    <div>
      <h2>useQueryReducer Demo</h2>
      <div style={{ display: "flex" }}>
        <aside>
          <form>
            {availableFilters.map((filter) => (
              <FilterDisplay
                key={"filterKey" in filter ? filter.filterKey : filter.title}
                activeFilters={activeFilters}
                filtersDispatch={filtersDispatch}
                {...filter}
              />
            ))}
            <hr />
            <button
              type="button"
              onClick={() =>
                filtersDispatch({ type: "clear" }, { method: "push" })
              }
            >
              clear activeFilters
            </button>
          </form>
        </aside>
      </div>
    </div>
  );
}
