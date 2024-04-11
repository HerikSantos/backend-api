import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Tags } from "./Tags";

@Entity()
class Tools {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    link: string;

    @Column()
    description: string;

    @ManyToMany(() => Tags)
    @JoinTable()
    tags: Tags[];
}

export { Tools };
