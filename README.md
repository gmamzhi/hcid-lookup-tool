# HCID  - Lookup Tool 

## About

Single Lookup Tool - The Department maintains over 8 different database and data sources (Excel & Access files) containing information about different rental properties. The Department often needs to lookup and attribute different programs to these units. This tool would consider of an unified ETL pipeline and deduplication service that allows staff to lookup properties and see which programs have been used, along with alternate addresses, etc. 

## Sponsors

Rushmore Cervantes

Laura Guglielmo

Luz Santiago

## Partners

UCLA

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
