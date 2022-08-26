import{ Table,Model,Column,DataType } from "sequelize-typescript";
import { ModuleResolutionKind } from "typescript";

@Table({
    timestamps:false,
    tableName:"todos"
})

export class Todos extends Model{
    @Column({
        type:DataType.STRING,
        allowNull:false,    
    })
    name!:string;

    @Column({
        type:DataType.STRING,
        allowNull:false,    
    })
    description!:string;
} 