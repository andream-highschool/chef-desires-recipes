import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { RicettaIngrediente } from "./RicettaIngredienti"
import { Ricetta } from "./Ricetta"


@Entity()
export class Ingrediente {
    @PrimaryGeneratedColumn()
    public id: Number

    @Column()
    public nome: String

    @OneToMany(() => RicettaIngrediente, (ricettaIngrediente) => {ricettaIngrediente.ingrediente})
    public ricette: RicettaIngrediente[]

}