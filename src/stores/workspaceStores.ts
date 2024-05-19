import { create } from "zustand";
import { IWorkSpaceResponse } from "./workSpaceData.types";

interface WorkSpace {
  workSpaces: IWorkSpaceResponse[] | null;
  addWorkSpaces: (workspaces: IWorkSpaceResponse[]) => void;
}

const useWorkSpaceStore = create<WorkSpace>((set) => ({
  workSpaces: null,
  addWorkSpaces: (workspaces: IWorkSpaceResponse[]) =>
    set(() => ({ workSpaces: workspaces })),
}));

export default useWorkSpaceStore;
