import { Conteudo } from "./conteudo.models";

export class TipoConteudo{
  id?: number;
  name?: string;
  is_active?: number;
  order?: number;
  contents?: Conteudo[];
}