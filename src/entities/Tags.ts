import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Tags {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    tags: string;
}

export { Tags };
