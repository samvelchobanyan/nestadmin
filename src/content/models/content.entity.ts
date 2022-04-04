import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('entities')
export class Content {
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

@Entity('entity_data')
export class ContentData{
  @Column("int", { primary: true, name: "ed_entity", unsigned: true })
  edEntity: number;

  @Column("char", { name: "ed_title", nullable: true, length: 255 })
  edTitle: string | null;

  @Column("char", { name: "ed_image", nullable: true, length: 255 })
  edImage: string | null;

  @Column("char", { name: "ed_char_1", nullable: true, length: 255 })
  edChar_1: string | null;

  @Column("char", { name: "ed_char_2", nullable: true, length: 255 })
  edChar_2: string | null;

  @Column("char", { name: "ed_char_3", nullable: true, length: 255 })
  edChar_3: string | null;

  @Column("longtext", { name: "ed_text_1", nullable: true })
  edText_1: string | null;

  @Column("longtext", { name: "ed_text_2", nullable: true })
  edText_2: string | null;

  @Column("longtext", { name: "ed_text_3", nullable: true })
  edText_3: string | null;

  @Column("longtext", { name: "ed_text_4", nullable: true })
  edText_4: string | null;

  @Column("longtext", { name: "ed_text_5", nullable: true })
  edText_5: string | null;

  @Column("int", { name: "ed_number_1", nullable: true, unsigned: true })
  edNumber_1: number | null;

  @Column("int", { name: "ed_number_2", nullable: true, unsigned: true })
  edNumber_2: number | null;

  @Column("int", { name: "ed_number_3", nullable: true, unsigned: true })
  edNumber_3: number | null;

  @Column("int", { name: "ed_number_4", nullable: true, unsigned: true })
  edNumber_4: number | null;

  @Column("int", { name: "ed_number_5", nullable: true, unsigned: true })
  edNumber_5: number | null;

  @Column("datetime", { name: "ed_datetime_1", nullable: true })
  edDatetime_1: Date | null;

  @Column("date", { name: "ed_datetime_2", nullable: true })
  edDatetime_2: string | null;

  @Column("date", { name: "ed_datetime_3", nullable: true })
  edDatetime_3: string | null;

  @Column("time", { name: "ed_datetime_4", nullable: true })
  edDatetime_4: string | null;

  @Column("time", { name: "ed_datetime_5", nullable: true })
  edDatetime_5: string | null;
}

@Entity('tmp')
export class ContTmp{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToOne(()=>Content)
  @JoinColumn()
  cnt: Content

}