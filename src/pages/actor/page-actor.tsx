import { DefaultPageContentWrapper } from "../../components/ui/page-content-helpers/default-page-content-wrapper";
import { ActorTable } from "./components/actor-table";

export const PageActor = () => {
  return (
    <DefaultPageContentWrapper>
      <h1>Actors</h1>
      <ActorTable />
    </DefaultPageContentWrapper>
  );
};
