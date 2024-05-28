import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany, PrimaryColumn, JoinColumn } from "typeorm"
import { Ricetta } from "./Ricetta"
import { Ingrediente } from "./Ingrediente"
import { UnitaMisura } from "./UnitaMisura"


@Entity()
export class RicettaIngrediente {
    @Column()
    public quantita: number

    @ManyToOne(() => UnitaMisura)
    public unitaMisura: UnitaMisura
   
    @PrimaryColumn()
    public ricettaId: number;

    @PrimaryColumn()
    public ingredienteId: number;
   
    @ManyToOne(() => Ricetta, (ricetta) => ricetta.ingredienti)
    @JoinColumn({ name: "ricettaId" })
    public ricetta: Ricetta

    @ManyToOne(() => Ingrediente, (ingrediente) => ingrediente.ricette)
    @JoinColumn({ name: "ingredienteId" })
    public ingrediente: Ingrediente


}
