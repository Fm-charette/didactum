import {
    Generated,
  } from 'kysely'


  export interface Database {
    metric: MetricTable
  }

  export interface MetricTable {

    id: Generated<number>
  
    account: string
    target: string
    metricname:string
    time:number
    value:number
    le: string

  }