interface OurTeamsList {
  src: string;
  name: string;
  posiiton: string;
}

type OurTeamListState = {
  lists: OurTeamsList[];
};

type OurTeamListAction = {
  type: string;
  list: OurTeamsList;
};

type DispatchType = (args: OurTeamListAction) => OurTeamListAction;
