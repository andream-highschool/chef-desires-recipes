import "reflect-metadata"
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany, PrimaryColumn, Decimal128 } from "typeorm"

@Entity()
export class UnitaMisura {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public nome: string

    @Column()
    public simbolo: string
    
    @Column("decimal")
    public peso: number

}
