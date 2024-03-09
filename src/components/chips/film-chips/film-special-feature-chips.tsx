import { Chip, ChipProps } from "@nextui-org/react";
import { useCallback, useMemo } from "react";

export const FilmSpecialFeatureChips = (
  props: TFilmSpecialFeatureChipsProps
) => {
  const { data } = props;
  const specialFeatures = data?.split(",").map((feature) => feature.trim());

  const filmSpecialFeaturesStylings: TFilmSpecialFeaturesStylings = useMemo(
    () => [
      {
        match: "deleted scenes",
        classNames: {
          base: "bg-gradient-to-br from-red-500 to-orange-500 border-small border-red-600 shadow-red-500/30",
          content: "drop-shadow shadow-black text-white",
        },
      },
      {
        match: "behind the scenes",
        classNames: {
          base: "bg-gradient-to-br from-red-500 to-fuchsia-500 border-small border-white/50 shadow-red-500/30",
          content: "drop-shadow shadow-black text-white",
        },
      },
      {
        match: "commentaries",
        classNames: {
          base: "bg-gradient-to-br from-emerald-500 to-yellow-500 border-small border-white/50 shadow-emerald-500/30",
          content: "drop-shadow shadow-black text-white",
        },
      },
      {
        match: "trailers",
        classNames: {
          base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
          content: "drop-shadow shadow-black text-white",
        },
      },
      {
        match: "other",
        classNames: {
          base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
          content: "drop-shadow shadow-black text-white",
        },
      },
      {
        match: "none",
        classNames: {
          base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
          content: "drop-shadow shadow-black text-white",
        },
      },
    ],
    []
  );

  const chipsStyleMapper = useCallback((feature: string) => {
    const style = filmSpecialFeaturesStylings.find(
      (style) => feature.toLowerCase() === style.match
    );

    return style?.classNames;
  }, []);

  return (
    <div className="flex flex-wrap gap-0">
      {specialFeatures?.map((feature, index) => (
        <Chip
          key={index}
          variant="shadow"
          classNames={chipsStyleMapper(feature)}
          size="sm"
        >
          {feature}
        </Chip>
      ))}
    </div>
  );
};

type TFilmSpecialFeatureChipsProps = {
  data?: string;
};

type TFilmSpecialFeaturesStylings = {
  match: string;
  classNames: ChipProps["classNames"];
}[];
