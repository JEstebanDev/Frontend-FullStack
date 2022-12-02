import { Response } from "./response.interfaces";

export interface ListData {
  id: number;
  image: string;
  text: Response;
  color?: boolean;
}
