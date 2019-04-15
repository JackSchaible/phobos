## Step 0 - Prerequisites

Ensure the following are installed:

- Java 1.8
- .NET Core 2.2

## Step 1 - Solr

- Ensure java 1.8+ is installed (open a new command prompt and type "java -version", if installed, it should show the version of java installed on your system)
  - If not, go to https://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html to download the latest java release for windows
- Ensure the JAVA_HOME environment variable is set, and points to your java installation
- Open a command prompt in ther /solr directory, and run "bin\solr.cmd start"
  - Allow solr access through windows firewall, if applicable

## Step 2 - Client Application (Angular 7.3)

## Step 3 - Server Application (.NET Core 2.2)

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
