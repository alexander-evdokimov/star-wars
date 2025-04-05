import { render, screen } from "@testing-library/react";
import { CharacterCard } from "../ui/character-card/character-card";
import stylesTag from "../ui/character-tag/character-tag.module.scss";

describe("CharacterCard", () => {
  it("should not render gender tag if gender is null", () => {
    render(
      <CharacterCard
        name="Luke Skywalker"
        gender={null}
        height="172"
        mass="77"
        birth_year="19BBY"
      />
    );
    const genderTag = screen.queryByTestId("tag-gender");
    expect(genderTag).not.toBeInTheDocument();
  });
  it("should render gender tag and have class male", () => {
    render(
      <CharacterCard
        name="Luke Skywalker"
        gender="male"
        height="172"
        mass="77"
        birth_year="19BBY"
      />
    );
    const genderTag = screen.queryByTestId("tag-gender");
    expect(genderTag).toBeInTheDocument();
    expect(genderTag).toHaveClass(stylesTag.male);
  });
  it("should render birth_year tag and have class birth", () => {
    render(
      <CharacterCard
        name="Luke Skywalker"
        gender="male"
        height="172"
        mass="77"
        birth_year="19BBY"
      />
    );
    const genderTag = screen.queryByTestId("tag-birth");
    expect(genderTag).toBeInTheDocument();
    expect(genderTag).toHaveClass(stylesTag.birth);
  });
});
