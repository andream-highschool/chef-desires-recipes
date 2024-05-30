import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { RicettaIngrediente } from "./RicettaIngrediente"
import { Tag } from "./Tag"

@Entity()
export class Ricetta {
    @PrimaryGeneratedColumn()
    public id: Number

    @Column()
    public nome: String

    @OneToMany(() => RicettaIngrediente, (ri) => ri.ricetta)
    public ingredienti: RicettaIngrediente[]

    @ManyToMany(() => Tag, (tag) => tag.ricetta)
    @JoinTable()
    public tags: Tag[]
}
