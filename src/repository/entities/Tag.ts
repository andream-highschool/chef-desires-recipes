import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany, PrimaryColumn, ManyToMany } from "typeorm"
import { Ricetta } from "./Ricetta"

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public nome: string

    @ManyToMany(() => Ricetta, (ricetta) => ricetta.tags) 
    public ricetta: Ricetta[]
} 
