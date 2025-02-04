# HCID  - Lookup Tool 

## About

Single Lookup Tool - The Department maintains over 8 different database and data sources (Excel & Access files) containing information about different rental properties. The Department often needs to lookup and attribute different programs to these units. This tool would consider of an unified ETL pipeline and deduplication service that allows staff to lookup properties and see which programs have been used, along with alternate addresses, etc. 

## Sponsors

Rushmore Cervantes, Laura Guglielmo & Luz Santiago

## Partners

UCLA Extension - The Coding Bootcamp

## Demo Videos

[File processing demo](http://www.youtube.com/watch?v=BHbRR9wnzD0) |
[Upload demo](http://www.youtube.com/watch?v=pYN1qi4-kh0) |
[Search demo](http://www.youtube.com/watch?v=fJ-0yVI8Ywo)

## City Team

Grace Benedicto
Donya Plazo (Code)
Stephen Lew
Rollin Nelson
Emmanuel Yuen
Bryan Kirkness (Code)
Franklin Campos
Rent
Compliance
Neighborhood Development

## Development Team

### Phase 1
[Andrey Orlov](https://github.com/andreyorlov33)
[Ryan House](https://github.com/rhouse00)
[Matt Whitcomb](https://github.com/mwhitcom)

Developed backend server that provides a response to a single query of relations of various databases.

### Phase 2
[Ben Chang](https://github.com/benjinchang)
[Charlotte Anongos](https://github.com/sharloteean)
[Daniel Yeh](https://github.com/danielfyeh)

Developed frontend sever using react with redux with a clean visual of the query results.

## Goals

1. Single query of multiple data sources to provide all information on a single (and related) property i.e. Property Information Sheet/Snapshot
2. Minimize need to search using multiple platforms.
3. Ensure non-duplication of data
4. Long-term goal:  Additional query options.  Generate a report that produces results from the search of the multiple data sources based on shared common criteria.  Criteria search vs. Property Search. i.e. properties that have a land use covenant, financed new construction that are now in the Rent Escrow Program.

## Deliverables

Lookup Tool - a website with an automated ETL process on the data exports and a search and lookup functionality. 

### Load Script

To load the data, you'll need a database called hcid-disp running in postgres. You'll also need the data files stored in the `data` directory, which is ignored from git in the `.gitignore`. 

Additionally, you'll need to install csvkit. Run `pip install csvkit` to install the package. 

Run `etl/load.sh` from the project root dir and it should create the data tables and run the join query for the APN master table. 

Tested using ZSH on Ubuntu and OSX. 

## Data Sources

HIMS
BIMS
CCRIS
Rent
Preservation Properties - Historical Access Database
Land Use
Neighborhood Development
Homeownership
Other Non-City Tax Credits and Financed

We've pulled these togehter into a single SQL Server database backup, called `datalake.bak`. The Database name is DataLake. 

## Local Deployment Instructions

There are two servers running for this application. 
*Backend server using node & express in root folder
*Frontend server using react in "app" folder

1. Install dependencies for root and app folder
```bash
npm install
```
2. Install postgreSQL
3. Create user for prostgres named "username"
4. Start backend & frontend servers for root and app folder
```bash
npm start
```

## Resources

[LA City Geohub Parcel](http://geohub.lacity.org/datasets/6d85cb5f5f5641c6aa95203849ca05bb_0) | 
[LA County APN Change File](https://data.lacounty.gov/Parcel-/Assessor-Parcel-Change-File/qju6-wpwm) | 
[LA County Parcel Data](https://data.lacounty.gov/Parcel-/Assessor-Parcels-Data-2016/7rjj-f2pv)

## Technology / Node Packages

[Node v6.x](https://nodejs.org/dist/latest-v6.x/docs/api/)
[Postgres v9.6](https://www.postgresql.org/docs/9.6/static/index.html)
[Sequelize ORM](http://docs.sequelizejs.com/en/v3/)
[Babel](https://babeljs.io/)
[BlueBird npm](http://bluebirdjs.com/docs/getting-started.html)
[Parse-address npm](https://www.npmjs.com/package/parse-address)
[Fast-csv npm](https://www.npmjs.com/package/fast-csv)
[Multer npm](https://www.npmjs.com/package/multer)
[React](https://facebook.github.io/react/)
[React-Redux](https://github.com/reactjs/react-redux)
[Google Autocomplete](https://developers.google.com/maps/documentation/javascript/places-autocomplete)