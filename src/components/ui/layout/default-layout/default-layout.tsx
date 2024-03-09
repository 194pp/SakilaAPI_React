import { DefaultNavbar } from "../../navbar/default-navbar";

export const DefaultLayout = (props: TDefaultLayout) => {
  const { children } = props;

  return (
    <div className="flex h-screen max-h-screen items-center flex-col">
      <DefaultNavbar />
      <main className="flex-col max-w-[1024px] w-full p-4 flex-1 self-center">
        {children}
      </main>
    </div>
  );
};

type TDefaultLayout = {
  children?: React.ReactNode;
};
