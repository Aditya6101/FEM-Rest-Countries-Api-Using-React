import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./scss/CountryDetail.scss";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import CircularProgress from "@material-ui/core/CircularProgress";

const CountryDetail = () => {
  const { countryname } = useParams();
  // const [fetchCountry, setFetchCountry] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [population, setPopulation] = useState("");
  const [borders, setBorders] = useState([]);

  console.log(countryname);

  const getData = async (fetchURL) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${fetchURL}?fullText=true`
      );
      const countryData = await res.json();
      console.log(countryData);
      setData(countryData[0]);
      setLoading(false);
      setCurrencies(countryData[0].currencies);
      setLanguages(countryData[0].languages);
      setPopulation(countryData[0].population.toLocaleString());
      setBorders(countryData[0].borders);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(data);

  useEffect(() => {
    getData(countryname);
  }, [countryname]);

  function getCountryName(key) {
    const codeData = {
      AFG: "Afghanistan",
      ALB: "Albania",
      DZA: "Algeria",
      ASM: "American Samoa",
      AND: "Andorra",
      AGO: "Angola",
      AIA: "Anguilla",
      ATA: "Antarctica",
      ATG: "Antigua and Barbuda",
      ARG: "Argentina",
      ARM: "Armenia",
      ABW: "Aruba",
      AUS: "Australia",
      AUT: "Austria",
      AZE: "Azerbaijan",
      BHS: "Bahamas (the)",
      BHR: "Bahrain",
      BGD: "Bangladesh",
      BRB: "Barbados",
      BLR: "Belarus",
      BEL: "Belgium",
      BLZ: "Belize",
      BEN: "Benin",
      BMU: "Bermuda",
      BTN: "Bhutan",
      BOL: "Bolivia (Plurinational State of)",
      BES: "Bonaire, Sint Eustatius and Saba",
      BIH: "Bosnia and Herzegovina",
      BWA: "Botswana",
      BVT: "Bouvet Island",
      BRA: "Brazil",
      IOT: "British Indian Ocean Territory (the)",
      BRN: "Brunei Darussalam",
      BGR: "Bulgaria",
      BFA: "Burkina Faso",
      BDI: "Burundi",
      CPV: "Cabo Verde",
      KHM: "Cambodia",
      CMR: "Cameroon",
      CAN: "Canada",
      CYM: "Cayman Islands (the)",
      CAF: "Central African Republic (the)",
      TCD: "Chad",
      CHL: "Chile",
      CHN: "China",
      CXR: "Christmas Island",
      CCK: "Cocos (Keeling) Islands (the)",
      COL: "Colombia",
      COM: "Comoros (the)",
      COD: "Congo (the Democratic Republic of the)",
      COG: "Congo (the)",
      COK: "Cook Islands (the)",
      CRI: "Costa Rica",
      HRV: "Croatia",
      CUB: "Cuba",
      CUW: "Curaçao",
      CYP: "Cyprus",
      CZE: "Czechia",
      CIV: "Côte d'Ivoire",
      DNK: "Denmark",
      DJI: "Djibouti",
      DMA: "Dominica",
      DOM: "Dominican Republic (the)",
      ECU: "Ecuador",
      EGY: "Egypt",
      SLV: "El Salvador",
      GNQ: "Equatorial Guinea",
      ERI: "Eritrea",
      EST: "Estonia",
      SWZ: "Eswatini",
      ETH: "Ethiopia",
      FLK: "Falkland Islands (the) [Malvinas]",
      FRO: "Faroe Islands (the)",
      FJI: "Fiji",
      FIN: "Finland",
      FRA: "France",
      GUF: "French Guiana",
      PYF: "French Polynesia",
      ATF: "French Southern Territories (the)",
      GAB: "Gabon",
      GMB: "Gambia (the)",
      GEO: "Georgia",
      DEU: "Germany",
      GHA: "Ghana",
      GIB: "Gibraltar",
      GRC: "Greece",
      GRL: "Greenland",
      GRD: "Grenada",
      GLP: "Guadeloupe",
      GUM: "Guam",
      GTM: "Guatemala",
      GGY: "Guernsey",
      GIN: "Guinea",
      GNB: "Guinea-Bissau",
      GUY: "Guyana",
      HTI: "Haiti",
      HMD: "Heard Island and McDonald Islands",
      VAT: "Holy See (the)",
      HND: "Honduras",
      HKG: "Hong Kong",
      HUN: "Hungary",
      ISL: "Iceland",
      IND: "India",
      IDN: "Indonesia",
      IRN: "Iran (Islamic Republic of)",
      IRQ: "Iraq",
      IRL: "Ireland",
      IMN: "Isle of Man",
      ISR: "Israel",
      ITA: "Italy",
      JAM: "Jamaica",
      JPN: "Japan",
      JEY: "Jersey",
      JOR: "Jordan",
      KAZ: "Kazakhstan",
      KEN: "Kenya",
      KIR: "Kiribati",
      PRK: "Korea (the Democratic People's Republic of)",
      KOR: "Korea (the Republic of)",
      KWT: "Kuwait",
      KGZ: "Kyrgyzstan",
      LAO: "Lao People's Democratic Republic (the)",
      LVA: "Latvia",
      LBN: "Lebanon",
      LSO: "Lesotho",
      LBR: "Liberia",
      LBY: "Libya",
      LIE: "Liechtenstein",
      LTU: "Lithuania",
      LUX: "Luxembourg",
      MAC: "Macao",
      MDG: "Madagascar",
      MWI: "Malawi",
      MYS: "Malaysia",
      MDV: "Maldives",
      MLI: "Mali",
      MLT: "Malta",
      MHL: "Marshall Islands (the)",
      MTQ: "Martinique",
      MRT: "Mauritania",
      MUS: "Mauritius",
      MYT: "Mayotte",
      MEX: "Mexico",
      FSM: "Micronesia (Federated States of)",
      MDA: "Moldova (the Republic of)",
      MCO: "Monaco",
      MNG: "Mongolia",
      MNE: "Montenegro",
      MSR: "Montserrat",
      MAR: "Morocco",
      MOZ: "Mozambique",
      MMR: "Myanmar",
      NAM: "Namibia",
      NRU: "Nauru",
      NPL: "Nepal",
      NLD: "Netherlands (the)",
      NCL: "New Caledonia",
      NZL: "New Zealand",
      NIC: "Nicaragua",
      NER: "Niger (the)",
      NGA: "Nigeria",
      NIU: "Niue",
      NFK: "Norfolk Island",
      MNP: "Northern Mariana Islands (the)",
      NOR: "Norway",
      OMN: "Oman",
      PAK: "Pakistan",
      PLW: "Palau",
      PSE: "Palestine, State of",
      PAN: "Panama",
      PNG: "Papua New Guinea",
      PRY: "Paraguay",
      PER: "Peru",
      PHL: "Philippines (the)",
      PCN: "Pitcairn",
      POL: "Poland",
      PRT: "Portugal",
      PRI: "Puerto Rico",
      QAT: "Qatar",
      MKD: "Republic of North Macedonia",
      ROU: "Romania",
      RUS: "Russian Federation (the)",
      RWA: "Rwanda",
      REU: "Réunion",
      BLM: "Saint Barthélemy",
      SHN: "Saint Helena, Ascension and Tristan da Cunha",
      KNA: "Saint Kitts and Nevis",
      LCA: "Saint Lucia",
      MAF: "Saint Martin (French part)",
      SPM: "Saint Pierre and Miquelon",
      VCT: "Saint Vincent and the Grenadines",
      WSM: "Samoa",
      SMR: "San Marino",
      STP: "Sao Tome and Principe",
      SAU: "Saudi Arabia",
      SEN: "Senegal",
      SRB: "Serbia",
      SYC: "Seychelles",
      SLE: "Sierra Leone",
      SGP: "Singapore",
      SXM: "Sint Maarten (Dutch part)",
      SVK: "Slovakia",
      SVN: "Slovenia",
      SLB: "Solomon Islands",
      SOM: "Somalia",
      ZAF: "South Africa",
      SGS: "South Georgia and the South Sandwich Islands",
      SSD: "South Sudan",
      ESP: "Spain",
      LKA: "Sri Lanka",
      SDN: "Sudan (the)",
      SUR: "Suriname",
      SJM: "Svalbard and Jan Mayen",
      SWE: "Sweden",
      CHE: "Switzerland",
      SYR: "Syrian Arab Republic",
      TWN: "Taiwan (Province of China)",
      TJK: "Tajikistan",
      TZA: "Tanzania, United Republic of",
      THA: "Thailand",
      TLS: "Timor-Leste",
      TGO: "Togo",
      TKL: "Tokelau",
      TON: "Tonga",
      TTO: "Trinidad and Tobago",
      TUN: "Tunisia",
      TUR: "Turkey",
      TKM: "Turkmenistan",
      TCA: "Turks and Caicos Islands (the)",
      TUV: "Tuvalu",
      UGA: "Uganda",
      UKR: "Ukraine",
      ARE: "United Arab Emirates (the)",
      GBR: "United Kingdom of Great Britain and Northern Ireland (the)",
      UMI: "United States Minor Outlying Islands (the)",
      USA: "United States of America (the)",
      URY: "Uruguay",
      UZB: "Uzbekistan",
      VUT: "Vanuatu",
      VEN: "Venezuela (Bolivarian Republic of)",
      VNM: "Viet Nam",
      VGB: "Virgin Islands (British)",
      VIR: "Virgin Islands (U.S.)",
      WLF: "Wallis and Futuna",
      ESH: "Western Sahara",
      YEM: "Yemen",
      ZMB: "Zambia",
      ZWE: "Zimbabwe",
      ALA: "Åland Islands",
    };
    if (codeData.hasOwnProperty(key.toUpperCase())) {
      return codeData[key.toUpperCase()];
    } else {
      return key;
    }
  }

  return (
    <div className="country-detail">
      <Link to="/" className="link">
        <button className="btn">
          <ArrowBackRoundedIcon /> Back
        </button>
      </Link>

      {loading ? (
        <CircularProgress className="progress-circle" />
      ) : (
        <div className="main-wrapper">
          <img
            className="country-flag"
            src={data.flags.svg}
            alt="country-flag"
          />
          <div className="text-wrapper">
            <div className="country-info">
              <h3 className="country-info__country-name">{data.name.common}</h3>
              <div className="country-info__cols">
                <div className="country-info__cols__col">
                  {/* <div className="col__details">
                    <h4 className="details__bold">Native Name:&nbsp;</h4>
                    <p className="details__light">{data.nativeName}</p>
                  </div> */}
                  <div className="col__details">
                    <h4 className="details__bold">Population:&nbsp;</h4>
                    <p className="details__light">{population}</p>
                  </div>
                  <div className="col__details">
                    <h4 className="details__bold">Region:&nbsp;</h4>
                    <p className="details__light">{data.region}</p>
                  </div>
                  <div className="col__details">
                    <h4 className="details__bold">Sub Region:&nbsp;</h4>
                    <p className="details__light">{data.subregion}</p>
                  </div>
                  <div className="col__details">
                    <h4 className="details__bold">Capital:&nbsp;</h4>
                    <p className="details__light">{data.capital[0]}</p>
                  </div>
                </div>
                <div className="country-info__cols__col">
                  <div className="col__details">
                    <h4 className="details__bold">Top Level Domain:&nbsp;</h4>
                    <p className="details__light">{data.tld[0]}</p>
                  </div>
                  {/* <div className="col__details">
                    <h4 className="details__bold">Currencies:&nbsp;</h4>
                     <p className="details__light">
                      {currencies.map((currency, index) => {
                        return (
                          <span key={index}>
                            {index === currencies.length - 1
                              ? `${currency.name} `
                              : `${currency.name}, `}
                          </span>
                        );
                      })}
                    </p> 
                  </div> */}

                  {/* <div className="col__details">
                    <h4 className="details__bold">Languages:&nbsp;</h4>
                    <p className="details__light">
                      {languages.map((language, index) => {
                        return (
                          <span key={index}>
                            {index === languages.length - 1
                              ? `${language.name} `
                              : `${language.name}, `}
                          </span>
                        );
                      })}
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="country-info__border-countries">
              <div>
                <h4 className="title">Border Countries</h4>
                <div className="tags-container">
                  {borders.length === 0 ? (
                    <button className="country-tag">N/A</button>
                  ) : (
                    borders.map((border) => {
                      return (
                        <Link
                          className="link"
                          key={getCountryName(border)}
                          onClick={() => {
                            setLoading(true);
                            // setFetchCountry(getCountryName(border));
                          }}
                          to={`/country/${getCountryName(border)}`}
                        >
                          <button className="country-tag">
                            {getCountryName(border)}
                          </button>
                        </Link>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
