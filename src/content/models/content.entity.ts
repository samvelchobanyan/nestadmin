import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Entities {
    @PrimaryGeneratedColumn({ type: "int", name: "entity_id", unsigned: true })
    entityId: number;
  
    @Column("datetime", { name: "entity_creation_date" })
    entityCreationDate: Date;
  
    @Column("int", { name: "entity_creator", unsigned: true })
    entityCreator: number;
  
    @Column("datetime", { name: "entity_update_date", nullable: true })
    entityUpdateDate: Date | null;
  
    @Column("int", { name: "entity_updater", nullable: true, unsigned: true })
    entityUpdater: number | null;
  
    @Column("int", { name: "entity_order", unsigned: true })
    entityOrder: number;
  
    @Column("int", { name: "entity_parent", unsigned: true })
    entityParent: number;
  
    @Column("tinyint", { name: "entity_visible", unsigned: true })
    entityVisible: number;
  
    @Column("char", { name: "entity_type", nullable: true, length: 50 })
    entityType: string | null;
  
    @Column("char", { name: "entity_sub_type", nullable: true, length: 50 })
    entitySubType: string | null;
  
    @Column("tinyint", { name: "entity_role", nullable: true, unsigned: true })
    entityRole: number | null;
  
    @Column("tinyint", { name: "entity_removable", unsigned: true })
    entityRemovable: number;
  
    @Column("tinyint", { name: "entity_is_widget", unsigned: true })
    entityIsWidget: number;
  }
  