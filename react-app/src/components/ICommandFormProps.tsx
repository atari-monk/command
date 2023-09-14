import { ICommand } from "./ICommand";

export interface ICommandFormProps {
  initialCommand: ICommand | null;
  onUpdate: (updatedCommand: ICommand) => void;
}
