export const DefaultPageContentWrapper = (
  props: TDefaultPageContentWrapper
) => {
  const { children } = props;

  return (
    <div className="w-full h-full flex-col items-center justify-center">
      {children}
    </div>
  );
};

type TDefaultPageContentWrapper = {
  children?: React.ReactNode;
};
