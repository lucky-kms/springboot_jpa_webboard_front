

export interface Board {
    id: number;
    title: string;
    content: string;
    writer: string;
    viewCount: number;
}

export interface PageResponse<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
}