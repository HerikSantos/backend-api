interface IRequest {
    title: string;
    description: string;
    link: string;
    tags: string[];
}

interface ITools {
    create: ({ title, description, link, tags }: IRequest) => void;
}

export type { ITools };
