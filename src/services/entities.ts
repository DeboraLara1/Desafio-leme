import { Entity, SearchData } from '../types';

const API_BASE_URL = 'http://localhost:3001';

const handleResponse = async (res: Response) => {
  if (!res.ok) {
    const message = await res.text().catch(() => '');
    throw new Error(`Erro ${res.status}: ${res.statusText}${message ? ` - ${message}` : ''}`);
  }
  return res.json();
};

const normalize = (value: string) => value.replace(/\D/g, '').toLowerCase();

const includesIgnoreCase = (source: string, target: string) =>
  source.toLowerCase().includes(target.toLowerCase());

const filterEntities = (entities: Entity[], filters: SearchData) => {
  return entities.filter(({ nome, tipo, cpf, cnpj, emails, telefones, enderecos }) => {
    const doc = normalize(filters.documento || '');
    const entityDoc = tipo === 'pessoa' ? cpf : cnpj;

    return (
      (!filters.nome || includesIgnoreCase(nome, filters.nome)) &&
      (!filters.documento || normalize(entityDoc || '').includes(doc)) &&
      (!filters.email || emails.some(email => includesIgnoreCase(email, filters.email))) &&
      (!filters.telefone || telefones.some(tel => normalize(tel).includes(normalize(filters.telefone)))) &&
      (!filters.endereco || enderecos.some(end => includesIgnoreCase(end, filters.endereco)))
    );
  });
};

export const entitiesApi = {
  async getAll(): Promise<Entity[]> {
    const res = await fetch(`${API_BASE_URL}/entidades`);
    return handleResponse(res);
  },

  async search(filters: SearchData): Promise<Entity[]> {
    return !Object.keys(filters).length
      ? this.getAll()
      : this.getAll().then(all => filterEntities(all, filters));
  },
};
