export declare const EVENTO_SESION_EXPIRADA = "sesion-expirada";
export declare class ApiError extends Error {
    status: number;
    constructor(message: string, status: number);
}
export declare function apiFetch<T>(path: string, options?: RequestInit): Promise<T>;
//# sourceMappingURL=api.d.ts.map