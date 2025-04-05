const mapFilterEyeColor = {
  all: "all",
  brown: "brown",
  red: "red",
  blue: "blue",
  white: "white",
} as const;

export type FilterEyeColor = keyof typeof mapFilterEyeColor;

export const filterEyeColors = Object.entries(mapFilterEyeColor).map(([value, label]) => ({
  label,
  value: value as FilterEyeColor,
}));
