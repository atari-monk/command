import { ICommand } from './ICommand'

export interface ICommandListProps {
  commands: ICommand[]
  onEdit: (command: ICommand) => void
  onDelete: (id: string) => void
}
