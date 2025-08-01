export interface Entity {
  id: number;
  tipo: 'pessoa' | 'empresa';
  nome: string;
  cpf?: string;
  cnpj?: string;
  sexo?: string;
  data_nascimento?: string;
  nome_mae?: string;
  capital_social?: string;
  data_inicio_atividade?: string;
  situacao_cadastral?: string;
  cnae_principal?: string;
  telefones: string[];
  emails: string[];
  enderecos: string[];
  quadro_societario?: string[];
}

export type SearchType = 'nome' | 'documento' | 'email' | 'telefone' | 'endereco' | '';

export interface SearchData {
  [key: string]: string;
}

export interface SearchFormData {
  searchType: SearchType;
  searchValue: string;
}

export interface RecentSearch {
  id: number;
  tipo: SearchType;
  valor: string;
  data: string;
  resultados: number;
}

export interface SearchFormProps {
  onSearch: (searchData: SearchData | {}) => void;
  loading: boolean;
  onNavigateToResults?: (searchData: SearchData) => void;
}

export interface EntityDataTableProps {
  entities: Entity[];
  loading: boolean;
  onRowSelect: (entity: Entity) => void;
  selectedEntity: Entity | null;
}

export interface EntityModalProps {
  entity: Entity | null;
  visible: boolean;
  onHide: () => void;
}

export interface RecentSearchesProps {
  searches: RecentSearch[];
  onViewDetails: (search: RecentSearch) => void;
  loading: boolean;
}

 