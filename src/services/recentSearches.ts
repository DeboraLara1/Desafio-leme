import { RecentSearch } from '../types';

const BASE_URL = 'http://localhost:3001/pesquisas_recentes';

const generateId = (): number => Date.now() + Math.floor(Math.random() * 10000);

const handleResponse = async <T>(res: Response): Promise<T> => {
  if (!res.ok) {
    throw new Error(`Erro ${res.status}: ${res.statusText}`);
  }
  return res.json();
};

export const recentSearchesApi = {
  getAll: (): Promise<RecentSearch[]> => 
    fetch(BASE_URL).then(handleResponse),

  add: async (data: Omit<RecentSearch, 'id'>): Promise<RecentSearch> => {
    const { tipo, valor, data: date, resultados = 0 } = data;
    if (!tipo || !valor || !date) {
      throw new Error('Campos obrigatórios ausentes.');
    }

    const newSearch: RecentSearch = {
      id: generateId(),
      tipo,
      valor,
      data: date,
      resultados,
    };

    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSearch),
    });

    return handleResponse(res);
  },

  clear: async (): Promise<void> => {
    const res = await fetch(BASE_URL, { method: 'DELETE' });
    if (!res.ok) {
      throw new Error(`Erro ${res.status}: ${res.statusText}`);
    }
  },
};