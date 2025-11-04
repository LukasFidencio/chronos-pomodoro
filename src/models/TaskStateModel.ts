import type { TaskModel } from './TaskModel';

// Estado  -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; //historico, mainform
  secondsRemaining: number; //home, countdown, historico, mainform, button
  formattedSecondsRemaining: string; //titulo, countdown
  activeTask: TaskModel | null; //countdown, historico, mainform, button
  currentCycle: number; // home
  config: {
    workTime: number; //mainform
    shortBreakTime: number; //mainform
    longBreakTime: number; //mainform
  };
};
