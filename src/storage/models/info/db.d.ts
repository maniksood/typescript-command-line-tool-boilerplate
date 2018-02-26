// tslint:disable
import * as Sequelize from 'sequelize';


// table: info_airlines
export interface info_airlinesAttribute {
  id:number;
  fs?:string;
  json_values?:any;
  createdAt?:Date;
  updatedAt?:Date;
  info_type?:string;
  data_source?:string;
}
export interface info_airlinesInstance extends Sequelize.Instance<info_airlinesAttribute>, info_airlinesAttribute { }
export interface info_airlinesModel extends Sequelize.Model<info_airlinesInstance, info_airlinesAttribute> { }

// table: airports
export interface airportsAttribute {
  id:number;
  fs?:string;
  icao?:string;
  name?:string;
  city?:string;
  countryCode?:string;
  countryName?:string;
  regionName?:string;
  timeZoneRegionName?:string;
  localTime?:Date;
  utcOffsetHours?:number;
  latitude?:number;
  longitude?:number;
  elevationFeet?:number;
  classification?:number;
  active?:boolean;
  weatherUrl?:string;
  delayIndexUrl?:string;
  website_url?:string;
  json_data?:any;
  createdAt?:Date;
  updatedAt?:Date;
  meta_data?:any;
}
export interface airportsInstance extends Sequelize.Instance<airportsAttribute>, airportsAttribute { }
export interface airportsModel extends Sequelize.Model<airportsInstance, airportsAttribute> { }

// table: master_data
export interface master_dataAttribute {
  id:number;
  date_of_departure?:Date;
  flight_number?:number;
  airline_code?:string;
  scheduled_departure_time?:number;
  source_airport?:string;
  destination_airport?:string;
  flight_status?:any;
  source_of_time?:string;
  time_object?:any;
  metadata_object?:any;
  createdAt?:Date;
  updatedAt?:Date;
  operating_carrier?:any;
  flight_plan?:any;
  scheduled_departure_date_source_airport?:Date;
}
export interface master_dataInstance extends Sequelize.Instance<master_dataAttribute>, master_dataAttribute { }
export interface master_dataModel extends Sequelize.Model<master_dataInstance, master_dataAttribute> { }

// table: info_airports
export interface info_airportsAttribute {
  id:number;
  fs?:string;
  json_values?:any;
  createdAt?:Date;
  updatedAt?:Date;
  info_type?:string;
  data_source?:string;
}
export interface info_airportsInstance extends Sequelize.Instance<info_airportsAttribute>, info_airportsAttribute { }
export interface info_airportsModel extends Sequelize.Model<info_airportsInstance, info_airportsAttribute> { }

// table: airlines
export interface airlinesAttribute {
  id:number;
  fs?:string;
  iata?:string;
  icao?:string;
  name?:string;
  active?:string;
  phoneNumber?:string;
  nickname1?:string;
  nickname2?:string;
  nickname3?:string;
  nickname4?:string;
  json_data?:any;
  baggage_allowances?:string;
  website?:string;
  createdAt?:Date;
  updatedAt?:Date;
  checkin_link?:string;
  baggage_link?:string;
}
export interface airlinesInstance extends Sequelize.Instance<airlinesAttribute>, airlinesAttribute { }
export interface airlinesModel extends Sequelize.Model<airlinesInstance, airlinesAttribute> { }

// table: flights
export interface flightsAttribute {
  id:number;
  airline_code?:string;
  airline_code2?:string;
  flight_number?:string;
  airline_name?:string;
  source_airport_fs?:string;
  source_airport_icao?:string;
  source_airport_name?:string;
  source_city?:string;
  departure_time?:string;
  departure_time_utc?:string;
  departure_terminal?:string;
  destination_airport_fs?:string;
  destination_airport_icao?:string;
  destination_airport_name?:string;
  destination_city?:string;
  arrival_time?:any;
  arrival_time_utc?:any;
  arrival_terminal?:string;
  duration?:number;
  route?:string;
  aircraft?:string;
  days_of_week?:number;
  updatedAt?:Date;
  createdAt?:Date;
  jurisdiction?:string;
}
export interface flightsInstance extends Sequelize.Instance<flightsAttribute>, flightsAttribute { }
export interface flightsModel extends Sequelize.Model<flightsInstance, flightsAttribute> { }
