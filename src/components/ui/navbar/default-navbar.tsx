import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { BsPerson } from "react-icons/bs";
import { BiCategory, BiFilm } from "react-icons/bi";
import { useLocation } from "react-router-dom";

export const DefaultNavbar = () => {
  const router = useLocation();
  console.log(router);

  const routes: TRoute[] = [
    {
      path: "/actor",
      children: "Actors",
      icon: <BsPerson />,
      isMenuItem: true,
      isActive: router.pathname.startsWith("/actor"),
    },
    {
      path: "/category",
      children: "Categories",
      icon: <BiCategory />,
      isMenuItem: true,
      isActive: router.pathname.startsWith("/category"),
    },
    {
      path: "/film",
      children: "Films",
      icon: <BiFilm />,
      isMenuItem: true,
      isActive: router.pathname.startsWith("/film"),
    },
  ];

  const brand = (
    <Link
      className="font-bold bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent text-xl"
      href="/"
    >
      Sakila
    </Link>
  );

  return (
    <Navbar
      isBordered
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-danger-500",
        ],
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>{brand}</NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>{brand}</NavbarBrand>
        {routes.map((item) => {
          return (
            <NavbarItem
              key={item.path.replace("/", "_")}
              isActive={item?.isActive}
            >
              <Link
                href={item.path}
                // make this link different color when parent li element has data-[active=true] attribute
                className="flex gap-1 text-danger-500"
              >
                {item?.icon}
                {item.children}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarMenu>
        {routes
          .filter((item) => item?.isMenuItem)
          .map((item) => {
            return (
              <NavbarMenuItem key={item.path.replace("/", "_")}>
                <Link href={item.path} className="flex gap-3">
                  {item?.icon}
                  {item.children}
                </Link>
              </NavbarMenuItem>
            );
          })}
      </NavbarMenu>
    </Navbar>
  );
};

type TRoute = {
  path: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  isMenuItem?: boolean;
  isActive?: boolean;
};
