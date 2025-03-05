import useSWR from "swr";

import { useGlobalStore } from "@/store/global";
import { systemStatusSelectors } from "@/store/global/selectors";

const FETCH_TABLES = "fetch-tables";
const FETCH_TABLE_COLUMN_KEY = (tableName: string) => ["fetch-table-columns", tableName];
export const FETCH_TABLE_DATA_KEY = (tableName: string) => ["fetch-table-data", tableName];

export const useFetchTables = () => {
	const isDBInited = useGlobalStore(systemStatusSelectors.isDBInited);

	return useSWR(isDBInited ? FETCH_TABLES : null);
};

export const useTableColumns = (tableName?: string) => {
	const isDBInited = useGlobalStore(systemStatusSelectors.isDBInited);

	return useSWR(isDBInited && tableName ? FETCH_TABLE_COLUMN_KEY(tableName) : null);
};

export const usePgTable = (tableName?: string) => {
	const isDBInited = useGlobalStore(systemStatusSelectors.isDBInited);

	return useSWR(isDBInited && tableName ? FETCH_TABLE_DATA_KEY(tableName) : null);
};
