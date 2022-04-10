import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('widget_types')
export class  WidgetTypes{
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    edId: number;

    @Column("char", { name: "name", nullable: true, length: 255 })
    name: string | null;

    @Column("char", { name: "tmp_description", nullable: true, length: 255 })
    description: string | null;

    @Column("simple-json",{name: "w_conf",nullable: false})
    conf: object;
}