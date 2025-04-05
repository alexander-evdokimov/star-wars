export const ROUTES = {
  HOME: "/",
  CHARACTERS: "/characters",
  CHARACTER: "/characters/:id",
} as const;

export const navLinks = [
  { label: "Home", href: ROUTES.HOME },
  { label: "Characters", href: ROUTES.CHARACTERS },
] as const;
