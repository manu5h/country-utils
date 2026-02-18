🌎 country-utils-code-vs-name
A simple, lightweight, and versatile JavaScript/React Native package for converting between country codes (ISO Alpha-2 / Alpha-3) and country names, and retrieving international dial codes.

✨ Features
Code ↔ Name Conversion: Easily switch between country names and their ISO Alpha-2 codes.

Dial Code Retrieval: Get the international telephone dial code for any country.

React Native Ready: Built to work seamlessly in both Node.js and mobile environments.

Comprehensive Data: Access a complete array of country data objects.

💾 Installation
Use your preferred package manager to install:

Bash

npm install country-utils-code-vs-name
or

Bash

yarn add country-utils-code-vs-name

//----------------------------------📖 Usage---------------------------------//


import countryUtils from "country-utils-code-vs-name";

Quick Examples

Name from Alpha-2	countryUtils.getCountryName("US");	"United States"

Alpha-2 from Name	countryUtils.getCountryCode("Canada");	"CA"

Dial Code Lookup	countryUtils.getDialCode("IN");	"+91"

Name from Alpha-3	countryUtils.getCountryNameFromCode3("DEU");	"Germany"

-------------------------------------------------------------------------------


🤝 Contributing
Got a suggestion, found a bug, or spotted a data inaccuracy? Contributions are welcome! Please feel free to open an issue or submit a pull request on the GitHub repository.

📜 License
This package is licensed under the MIT License.


