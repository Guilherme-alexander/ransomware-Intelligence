// utils.js — Ransomware Intelligence Hub
// Utilitários compartilhados para carregamento e análise de data.json

let _cachedData = null;

/** Carrega e faz cache do data.json */
export async function loadData() {
  if (_cachedData) return _cachedData;
  const response = await fetch('data.json');
  if (!response.ok) throw new Error(`Falha ao carregar data.json: HTTP ${response.status}`);
  const json = await response.json();
  _cachedData = json.families;
  return _cachedData;
}

/** Distribuição de linguagens (todas, não apenas a principal) */
export function getLanguagesStats(data) {
  const stats = {};
  data.forEach(f => {
    f.lang.split('/').forEach(raw => {
      let l = raw.trim();
      if (l === 'Turbo Pascal') l = 'Pascal';
      if (l === 'C#/Assembly') l = 'C#';
      stats[l] = (stats[l] || 0) + 1;
    });
  });
  return stats;
}

/** Distribuição de algoritmos de criptografia */
export function getCryptoStats(data) {
  const stats = {};
  const extractAlgos = (crypto) => {
    const u = crypto.toUpperCase();
    const found = [];
    if (u.includes('AES'))      found.push('AES');
    if (u.includes('RSA'))      found.push('RSA');
    if (u.includes('CHACHA20')) found.push('ChaCha20');
    if (u.includes('SALSA20'))  found.push('Salsa20');
    if (u.includes('KYBER'))    found.push('Kyber');
    if (u.includes('RC4'))      found.push('RC4');
    if (found.length === 0)     found.push('Outro');
    return found;
  };
  data.forEach(f => {
    extractAlgos(f.crypto).forEach(algo => {
      stats[algo] = (stats[algo] || 0) + 1;
    });
  });
  return stats;
}

/** Contagem de status */
export function getStatusStats(data) {
  return {
    Ativo:        data.filter(f => f.status.includes('Ativo')).length,
    Desmantelado: data.filter(f => f.status.includes('Desmantelado')).length,
    Descontinuado:data.filter(f => f.status.includes('Descontinuado')).length,
    Desativado:   data.filter(f => f.status === 'Desativado').length,
  };
}

/** Arrecadação total em US$ M */
export function getTotalRevenue(data) {
  return data.reduce((sum, f) => sum + (f.revenueM || 0), 0);
}

/** Total de vítimas estimadas */
export function getTotalVictims(data) {
  return data.reduce((sum, f) => sum + (f.estimated_victims || 0), 0);
}

/** Famílias com dupla extorsão */
export function getDoubleExtortionCount(data) {
  return data.filter(f => f.double_extortion).length;
}

/** Famílias sancionadas pelo OFAC */
export function getSanctionedCount(data) {
  return data.filter(f => f.sanctions).length;
}

/** Distribuição de setores alvo */
export function getSectorStats(data) {
  const stats = {};
  data.forEach(f => {
    (f.sectors || []).forEach(s => {
      stats[s] = (stats[s] || 0) + 1;
    });
  });
  return stats;
}

/** Top N famílias por arrecadação */
export function getTopByRevenue(data, n = 10) {
  return [...data].sort((a, b) => b.revenueM - a.revenueM).slice(0, n);
}

/** Normaliza nome de país */
export function normalizeCountry(country) {
  if (country.includes('Rússia'))  return 'Rússia';
  if (country.includes('Coreia'))  return 'Coreia do Norte';
  if (country.includes('Romênia')) return 'Romênia';
  if (country.includes('Irã'))     return 'Irã';
  if (country.includes('China'))   return 'China';
  if (country.includes('Brasil'))  return 'Brasil (suspeita)';
  if (country.includes('Europa'))  return 'Europa Oriental';
  return 'Desconhecido';
}

/** Distribuição por país de origem */
export function getCountryStats(data) {
  const stats = {};
  data.forEach(f => {
    const c = normalizeCountry(f.country);
    stats[c] = (stats[c] || 0) + 1;
  });
  return stats;
}

/** Famílias ativas em um determinado ano (considerando vida útil) */
export function getFamiliesActiveInYear(data, year, estimateEndFn) {
  return data.filter(f => {
    const endYear = estimateEndFn ? estimateEndFn(f) : (f.status.includes('Ativo') ? 2026 : f.year + 2);
    return f.year <= year && endYear >= year;
  });
}

/** Formata número grande (1M, 10k, etc.) */
export function fmtNumber(n) {
  if (!n) return '—';
  if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(0) + 'k';
  return String(n);
}
