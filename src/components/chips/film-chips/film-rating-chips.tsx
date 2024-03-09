import { Chip, ChipProps } from "@nextui-org/react";
import { useCallback, useMemo } from "react";

const filmRatingChipStylings: TFilmRatingChipStylings = [
  {
    styling: "success",
    matcher: ["G"],
  },
  {
    styling: "warning",
    matcher: ["PG"],
  },
  {
    styling: "secondary",
    matcher: ["PG-13"],
  },
  {
    styling: "danger",
    matcher: ["R"],
  },
  {
    styling: "primary",
    matcher: ["NC-17"],
  },
];

export const FilmRatingChips = (props: TFilmRatingChipsProps) => {
  const { data } = props;

  const ratings = useMemo(() => data?.split(",") || [], [data]);

  const chipsStyleMapper = useCallback((rating: string) => {
    const style = filmRatingChipStylings.find((style) =>
      style.matcher.includes(rating)
    );
    return style?.styling || "default";
  }, []);

  return (
    <div>
      {ratings.map((rating, index) => {
        const color = chipsStyleMapper(rating);
        return (
          <Chip
            key={index}
            color={color}
            classNames={{
              base: "shadow-black min-w-8",
            }}
          >
            {rating}
          </Chip>
        );
      })}
    </div>
  );
};

type TFilmRatingChipsProps = {
  data?: string;
};

type TFilmRatingChipStylings = {
  styling: ChipProps["color"];
  matcher: string[];
}[];
