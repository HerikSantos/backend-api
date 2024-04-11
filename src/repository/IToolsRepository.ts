import { type Tools } from "../entities/Tools";

interface IRequest {
    title: string;
    description: string;
    link: string;
    tags: string[];
}

interface IToolsRepository {
    create: ({ title, description, link, tags }: IRequest) => Promise<Tools>;
    list: (tagFilter: string) => Promise<Tools[]>;
    remove: (id: number) => Promise<void>;
}

export type { IToolsRepository, IRequest };
