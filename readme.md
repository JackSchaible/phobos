## Step 0 - Prerequisites

Ensure the following are installed:

- Java 1.8
- .NET Core 2.2
- Visual Studio 2017 (latest) or 2019
- Node.js

## Step 1 - Solr

- Ensure java 1.8+ is installed (open a new command prompt and type "java -version", if installed, it should show the version of java installed on your system)
  - If not, go to https://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html to download the latest java release for windows
- Ensure the JAVA_HOME environment variable is set, and points to your java installation
- Open a command prompt in the /solr directory, and run "bin\solr.cmd start"
  - Allow solr access through windows firewall, if applicable

## Step 2 - Client Application (Angular 7.3)

- Ensure node.js is installed (open a new command prompt and type "node -v", f installed, it should show the version of node installed on your system)
  - If not, go to https://nodejs.org/en/ to download the latest node release for windows
- Open a command prompt in the /client folder
- Run "npm i" to install the client-side packages required to run the app
- Run "ng serve --ssl" to serve up the client-side application. It should run on https://localhost:4200
- You might need to accept the localhost SSL certificate
  - For chrome:
    - Click the little red triangle in the URL bar
    - Click "Certificate (Invalid)"
    - In the Certificate popup, click the Details tab, and then "Copy to File..." button
    - Click next twice, then select a location on your hard drive, click Next and then Finish
    - Open the .cert file
    - Click "Install Certificate"
    - Click Next
    - Select the radio option "Place all certificates in the following store" and click Browse
    - Click "Trusted Root Certification Authorities", and click OK
    - Click Next and Finish
    - On the Security Warning, click Yes
    - Click OK on the popups

## Step 3 - Server Application (.NET Core 2.2)

- Open the .csproj file in the /server directory with visual studio 2017 (latest) or 2019
  - If you see a warning about not being able to target the .NET Core 2.2 framework, ensure .NET Core 2.2 is installed, and that you're using the latest release of visual studio 2017, or visual studio 2019
- Press the run button (F5)

## Features:

- CSV file (server/data/movies.csv) contains a list of 45,383 movies dated from 1900-2020
- App will check the solr server on first request for records, if no records are found, it uploads the entire list to solr
- Default search will search over all fields
- App is responsive, and works well on desktop, tablet (768px), and mobile (425px), and should work in all display resolutions in between
- Search uses stemming, so "Toy Story" will bring up Toy Story 2, Toy Story 3, and other toy-related movies
- Any misspelling in the search should bring up a list of alternatives
  - Clicking on the alternative will enter it into the search field, and search for it

## Assignment Overview:

## Basic Features:

- [x] The website should load and index some randomly generated or selected test data.
- [x] Your test data can be anything you want but should be at least several thousand records.
- [x] The app should allow the user to enter keywords and find your indexed content.
- [x] Your app should also feature a responsive design to ensure it renders well for a variety of screen sizes and resolutions.

## Advanced Features:

- [x] Stemming should be used – for example, when searching for “engineer”, the search should also return results for “engineering”, -“engineers”, and “engineered”.
- [x] Spell checking should present corrected search terms for user misspellings.
- [ ] Related search terms could be displayed when a user has searched, suggesting alternate keywords related to what they’ve already searched for.
- [ ] Auto-complete should suggest search terms as the user types in the search box.
- [ ] Attach meta-data to your indexed records and provide faceting options for the user to filter by.
