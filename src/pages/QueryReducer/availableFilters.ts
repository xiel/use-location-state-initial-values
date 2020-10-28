import { Filter } from "./QueryReducerTypes";

export const availableFilters: Filter[] = [
  {
    title: "clothing",
    subFilters: [
      {
        filterKey: "shirts"
      },
      {
        filterKey: "jackets"
      },
      {
        filterKey: "shorts"
      }
    ]
  },
  {
    title: "shoes",
    subFilters: [
      {
        filterKey: "boots"
      },
      {
        filterKey: "running"
      },
      {
        filterKey: "slippers"
      },
      {
        filterKey: "sneakers",
        subFilters: [
          {
            filterKey: "converse"
          },
          {
            filterKey: "other"
          }
        ]
      }
    ]
  }
];
